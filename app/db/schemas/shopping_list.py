from pydantic import BaseModel
from typing import Dict, Any

class ShoppingListBase(BaseModel):
    items: Dict[str, Any]  # ✅ Store shopping list items as JSON

class ShoppingListCreate(ShoppingListBase):
    pass

class ShoppingListUpdate(ShoppingListBase):
    pass

class ShoppingListResponse(ShoppingListBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True
