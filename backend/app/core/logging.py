import logging


def setup_logging(level: str = "INFO") -> None:
    """Configure application-wide logging."""
    logging.basicConfig(
        level=level.upper(),
        format="%(asctime)s | %(levelname)-8s | %(name)s | %(message)s",
    )