from datetime import datetime

from pydantic import BaseModel, Field


class HealthResponse(BaseModel):
    """Response model for the health-check endpoint."""

    status: str = Field(examples=["ok"])
    service: str
    version: str
    environment: str
    timestamp: datetime