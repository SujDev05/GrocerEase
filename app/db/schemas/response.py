from typing import Generic, TypeVar, Optional
from pydantic import BaseModel
from pydantic.generics import GenericModel

T = TypeVar('T')

class ResponseModel(GenericModel, Generic[T]):
    status: str
    message: Optional[str]
    data: Optional[T]