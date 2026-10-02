from fastapi import APIRouter

from app.api.routes import health

# Every route in the app lives under /api. Later milestones add
# papers and library routers here.
api_router = APIRouter(prefix="/api")
api_router.include_router(health.router)