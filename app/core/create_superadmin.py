from sqlalchemy.orm import Session
from app.api.crud import user as crud 
from app.db.schemas.user import UserCreate
from app.core.config import settings
from app.db.session import SessionLocal
from app.db.models.user import User

def create_superadmin(db: Session):
    superadmin = db.query(User).filter(User.username == settings.SUPERADMIN_USERNAME).first()
    if not superadmin:
        user_in = UserCreate(
            username=settings.SUPERADMIN_USERNAME,
            fullname="Super Admin",
            email=settings.SUPERADMIN_EMAIL,
            password=settings.SUPERADMIN_PASSWORD,
            role="superadmin",
            branch_id=None
        )
        crud.create_user(db=db, user=user_in)
        print("Super admin user created")
    else:
        print("Super admin user already exists")

def init_superadmin():
    db = SessionLocal()
    try:
        create_superadmin(db)
    finally:
        db.close()

if __name__ == "__main__":
    init_superadmin()
