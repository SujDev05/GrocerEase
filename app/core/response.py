from typing import Any
from app.db.schemas.response import ResponseModel
from fastapi import HTTPException, Request
from fastapi.responses import JSONResponse

def create_response(data: Any = None, message: str = None, status: str = "success"):
    return ResponseModel(status=status, message=message, data=data)

async def http_exception_handler(request: Request, exc: HTTPException):
    return JSONResponse(
        status_code=exc.status_code,
        content=create_response(
            data=None,
            message=exc.detail,
            status="error"
        ).dict()
    )
