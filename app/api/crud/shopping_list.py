from sqlalchemy.orm import Session
from app.db.models.shopping_list import ShoppingList
from app.db.schemas.shopping_list import ShoppingListCreate

def create_shopping_list(db: Session, shopping_data: ShoppingListCreate):
    db_item = ShoppingList(
        user_id=shopping_data.user_id,
        item_name=shopping_data.item_name,
        quantity=shopping_data.quantity,
        unit=shopping_data.unit,
        purchased=shopping_data.purchased,
        items=[item.dict() for item in shopping_data.items]  # Serialize items
    )
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

def get_shopping_list(db: Session, user_id: int):
    shopping_list = db.query(ShoppingList).filter(ShoppingList.user_id == user_id).first()
    if not shopping_list:
        raise ValueError("Shopping list not found")
    return shopping_list

def update_shopping_list(db: Session, user_id: int, shopping_data: ShoppingListCreate):
    shopping_list = db.query(ShoppingList).filter(ShoppingList.user_id == user_id).first()
    if not shopping_list:
        raise ValueError("Shopping list not found")

    shopping_list.item_name = shopping_data.item_name
    shopping_list.quantity = shopping_data.quantity
    shopping_list.unit = shopping_data.unit
    shopping_list.purchased = shopping_data.purchased
    shopping_list.items = [item.dict() for item in shopping_data.items]  # Serialize items

    db.commit()
    db.refresh(shopping_list)
    return shopping_list

def delete_shopping_list(db: Session, user_id: int):
    shopping_list = db.query(ShoppingList).filter(ShoppingList.user_id == user_id).first()
    if not shopping_list:
        return False

    db.delete(shopping_list)
    db.commit()
    return True