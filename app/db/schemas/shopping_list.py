from pydantic import BaseModel
from typing import List, Optional

class ShoppingListItem(BaseModel):
    item_name: str
    quantity: float
    unit: str
    purchased: bool = False

class ShoppingListCreate(BaseModel):
    user_id: int
    item_name: str
    quantity: float
    unit: str
    purchased: Optional[bool] = None
    items: List[ShoppingListItem]

class ShoppingListUpdate(ShoppingListCreate):
    pass

class ShoppingListResponse(ShoppingListCreate):
    id: int
    user_id: int

    class Config:
        from_attributes = True
        orm_mode = True