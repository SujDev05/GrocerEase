from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.endpoints import users, pantry, shopping_list
from app.db.session import engine
from app.db.base import Base
from app.db.models import User, Pantry, ShoppingList

from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException


# Initialize FastAPI app
app = FastAPI(title="GrocerEase - AI-Driven Grocery Management")

# Create database tables if they don't exist
Base.metadata.create_all(bind=engine)

# CORS settings (modify as per your frontend)
origins = ["*"]  # Allow all origins (update this in production)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API Routes
app.include_router(users.router, prefix="/api/v1/users", tags=["Users"])
app.include_router(pantry.router, prefix="/api/v1/pantry", tags=["Pantry"])
app.include_router(shopping_list.router, prefix="/api/v1/shopping-list", tags=["Shopping List"])

# Root Endpoint
@app.get("/")
def root():
    return {"message": "Welcome to GrocerEase API 🚀"}

