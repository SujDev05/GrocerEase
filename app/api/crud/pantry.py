from sqlalchemy.orm import Session
from app.db.models.pantry import Pantry
from app.db.schemas.pantry import PantryCreate

def create_pantry(db: Session, user_id: int, pantry_data: PantryCreate):
    pantry = Pantry(user_id=user_id, items=pantry_data.items)  # ✅ JSONB data
    db.add(pantry)
    db.commit()
    db.refresh(pantry)
    return pantry

def get_pantry(db: Session, user_id: int):
    return db.query(Pantry).filter(Pantry.user_id == user_id).first()

def update_pantry(db: Session, user_id: int, pantry_data: PantryCreate):
    pantry = db.query(Pantry).filter(Pantry.user_id == user_id).first()
    if pantry:
        pantry.items = pantry_data.items  # ✅ Update JSONB data
        db.commit()
        db.refresh(pantry)
    return pantry

def delete_pantry(db: Session, user_id: int):
    pantry = db.query(Pantry).filter(Pantry.user_id == user_id).first()
    if pantry:
        db.delete(pantry)
        db.commit()
        return True
    return False
# Compare this snippet from app/db/models/shopping_list.py: