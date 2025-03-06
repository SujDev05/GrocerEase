from sqlalchemy.orm import Session
from app.db.models.shopping_list import ShoppingList
from app.db.schemas.shopping_list import ShoppingListCreate

def create_shopping_list(db: Session, user_id: int, shopping_data: ShoppingListCreate):
    shopping_list = ShoppingList(user_id=user_id, items=shopping_data.items)  # ✅ JSONB data
    db.add(shopping_list)
    db.commit()
    db.refresh(shopping_list)
    return shopping_list

def get_shopping_list(db: Session, user_id: int):
    return db.query(ShoppingList).filter(ShoppingList.user_id == user_id).first()

def update_shopping_list(db: Session, user_id: int, shopping_data: ShoppingListCreate):
    shopping_list = db.query(ShoppingList).filter(ShoppingList.user_id == user_id).first()
    if shopping_list:
        shopping_list.items = shopping_data.items  # ✅ Update JSONB data
        db.commit()
        db.refresh(shopping_list)
    return shopping_list

def delete_shopping_list(db: Session, user_id: int):
    shopping_list = db.query(ShoppingList).filter(ShoppingList.user_id == user_id).first()
    if shopping_list:
        db.delete(shopping_list)
        db.commit()
        return True
    return False
