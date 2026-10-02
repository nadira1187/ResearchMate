"use client";

import { useEffect, useState } from "react";

import { getHealth } from "@/lib/api";
import type { HealthResponse } from "@/types/health";

type Status =
  | { state: "checking" }
  | { state: "online"; data: HealthResponse }
  | { state: "offline"; message: string };

export function BackendStatus() {
  const [status, setStatus] = useState<Status>({ state: "checking" });

  useEffect(() => {
    const controller = new AbortController();

    getHealth(controller.signal)
      .then((data) => setStatus({ state: "online", data }))
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        setStatus({
          state: "offline",
          message: error instanceof Error ? error.message : "Unknown error",
        });
      });

    // Cancel the request if the component unmounts
    return () => controller.abort();
  }, []);

  const dotColor =
    status.state === "online"
      ? "bg-emerald-600"
      : status.state === "offline"
        ? "bg-red-600"
        : "bg-amber-500";

  let label: string;
  if (status.state === "checking") {
    label = "Checking backend…";
  } else if (status.state === "online") {
    label = `Backend connected · ${status.data.service} v${status.data.version} (${status.data.environment})`;
  } else {
    label = `Backend unreachable. ${status.message}`;
  }

  return (
    <p role="status" aria-live="polite" className="flex items-center gap-2 text-sm text-muted-foreground">
      <span className={`size-2 shrink-0 rounded-full ${dotColor}`} aria-hidden="true" />
      {label}
    </p>
  );
}