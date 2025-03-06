from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.api.crud.shopping_list import create_shopping_list, get_shopping_list, update_shopping_list, delete_shopping_list
from app.db.schemas.shopping_list import ShoppingListCreate, ShoppingListResponse

router = APIRouter()

@router.post("/", response_model=ShoppingListResponse)
def add_shopping_list(user_id: int, shopping_data: ShoppingListCreate, db: Session = Depends(get_db)):
    return create_shopping_list(db, user_id, shopping_data)

@router.get("/", response_model=ShoppingListResponse)
def read_shopping_list(user_id: int, db: Session = Depends(get_db)):
    shopping_list = get_shopping_list(db, user_id)
    if not shopping_list:
        raise HTTPException(status_code=404, detail="Shopping list not found")
    return shopping_list

@router.put("/", response_model=ShoppingListResponse)
def update_shopping_list_items(user_id: int, shopping_data: ShoppingListCreate, db: Session = Depends(get_db)):
    return update_shopping_list(db, user_id, shopping_data)

@router.delete("/")
def remove_shopping_list(user_id: int, db: Session = Depends(get_db)):
    if not delete_shopping_list(db, user_id):
        raise HTTPException(status_code=404, detail="Shopping list not found")
    return {"message": "Shopping list deleted successfully"}
