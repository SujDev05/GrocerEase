# FastAPI Project

A FastAPI-based REST API project with SQLAlchemy, Alembic migrations, and Docker support.

## Features

- FastAPI framework
- PostgreSQL database
- SQLAlchemy ORM
- Alembic migrations
- Docker and docker-compose support
- Environment-based configuration
- JWT authentication
- Automatic API documentation

## Prerequisites

- Python 3.9+
- Docker and Docker Compose (for containerized deployment)
- PostgreSQL (for local development)

## Project Structure

```
├── app/ 
│ ├── api/ 
│ │ ├── crud/ 
│ │ └── endpoints/ 
│ ├── core/ 
│ ├── db/ 
│ │ ├── models/ 
│ │ └── schemas/ 
│ └── main.py 
├── migrations/ 
├── .env 
├── .env.development 
├── requirements.txt 
├── Dockerfile 
└── docker-compose.yml
```

## Getting Started

### Development Environment

1. Create and activate a virtual environment:

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/macOS
python -m venv venv
source venv/bin/activate

pip install -r requirements.txt
```
This will:

- Build the Docker image
- Start the PostgreSQL database
- Run database migrations
- Start the FastAPI application

## API Documentation

Once the application is running, you can access:

- OpenAPI documentation: http://localhost:8000/docs
- Read Doc alternative documentation: http://localhost:8000/redoc

## Database Migrations

This project uses Alembic for database migrations:

```bash
# Create a new migration
alembic revision --autogenerate -m "Telestra db init"

# Run migrations
alembic upgrade head

# Rollback migrations
alembic downgrade -1
```

## Environment Variables

Key environment variables:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
SECRET_KEY=your_secret_key
ENV=development|production
```

# Docker Setup

## Build and Run

```bash
# Build and start containers
docker-compose up --build

# Run in detached mode
docker-compose up -d

# Stop containers
docker-compose down

```
## License 

The is project is open sourced and licensed by MIT 
