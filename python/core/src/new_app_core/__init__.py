"""Shared Python core library for the new-app workspace."""


def healthcheck() -> str:
    """Return a constant used to verify the workspace wiring end to end."""
    return "ok"
