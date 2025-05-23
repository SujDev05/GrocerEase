from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import relationship
from app.db.base import Base

class Pantry(Base):
    __tablename__ = "pantry"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, unique=True)
    items = Column(JSONB, nullable=False, default=list)  # Stores items as a JSONB array

    user = relationship("User", back_populates="pantry")
