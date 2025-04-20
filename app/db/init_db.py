from sqlalchemy.orm import Session
from app.db.base import Base
from app.db.session import engine
from app.db.models.user import User
from app.db.models.pantry import Pantry
from app.db.models.shopping_list import ShoppingList

def init_db():
    # Create all tables
    Base.metadata.create_all(bind=engine) 