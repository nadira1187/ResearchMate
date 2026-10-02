import { API_BASE_URL } from "@/lib/config";
import type { HealthResponse } from "@/types/health";

export class ApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      cache: "no-store",
      ...init,
      headers: { Accept: "application/json" },
    });
  } catch (error) {
    // Let callers handle cancelled requests themselves
    if (error instanceof DOMException && error.name === "AbortError") {
      throw error;
    }
    // Network failure, server down, or CORS blocked
    throw new ApiError("Unable to reach the ResearchMate server.", 0);
  }

  if (!response.ok) {
    throw new ApiError(`Request failed with status ${response.status}`, response.status);
  }

  return (await response.json()) as T;
}

export function getHealth(signal?: AbortSignal): Promise<HealthResponse> {
  return request<HealthResponse>("/api/health", { signal });
}