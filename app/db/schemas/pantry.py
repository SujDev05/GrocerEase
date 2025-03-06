from pydantic import BaseModel
from typing import Dict, Any

class PantryBase(BaseModel):
    items: Dict[str, Any]  # ✅ Store pantry items as JSON

class PantryCreate(PantryBase):
    pass

class PantryResponse(PantryBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True
