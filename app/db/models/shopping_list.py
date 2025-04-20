from sqlalchemy import Column, Integer, String, Boolean, JSON, ForeignKey
from sqlalchemy.orm import relationship
from app.db.base import Base

class ShoppingList(Base):
    __tablename__ = "shopping_list"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)  # Foreign key omitted for simplicity
    item_name = Column(String, nullable=False)
    quantity = Column(Integer, nullable=False)  # Ensure this column exists
    unit = Column(String, nullable=False)
    purchased = Column(Boolean, nullable=True)
    items = Column(JSON, nullable=True)  # Optional JSON field for structured data

    # Relationship to the User model (if applicable)
    user = relationship("User", back_populates="shopping_lists")