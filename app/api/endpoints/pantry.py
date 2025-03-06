from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.api.crud.pantry import create_pantry, get_pantry, update_pantry, delete_pantry
from app.db.schemas.pantry import PantryCreate, PantryResponse

router = APIRouter()

@router.post("/", response_model=PantryResponse)
def add_pantry(user_id: int, pantry_data: PantryCreate, db: Session = Depends(get_db)):
    return create_pantry(db, user_id, pantry_data)

@router.get("/", response_model=PantryResponse)
def read_pantry(user_id: int, db: Session = Depends(get_db)):
    pantry = get_pantry(db, user_id)
    if not pantry:
        raise HTTPException(status_code=404, detail="Pantry not found")
    return pantry

@router.put("/", response_model=PantryResponse)
def update_pantry_items(user_id: int, pantry_data: PantryCreate, db: Session = Depends(get_db)):
    return update_pantry(db, user_id, pantry_data)

@router.delete("/")
def remove_pantry(user_id: int, db: Session = Depends(get_db)):
    if not delete_pantry(db, user_id):
        raise HTTPException(status_code=404, detail="Pantry not found")
    return {"message": "Pantry deleted successfully"}
