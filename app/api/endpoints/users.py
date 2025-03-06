from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db import session
from app.api.crud import user, pantry, shopping_list
from app.db.schemas import user as user_schema, pantry as pantry_schema, shopping_list as shopping_schema
router = APIRouter()

@router.post("/users/", response_model=user_schema.UserResponse)
def create_user(user_data: user_schema.UserCreate, db: Session = Depends(session.get_db)):
    return user.create_user(db, user_data)

@router.get("/users/{user_id}", response_model=user_schema.UserResponse)
def get_user(user_id: int, db: Session = Depends(session.get_db)):
    db_user = user.get_user(db, user_id)
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user