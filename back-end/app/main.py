"""FastAPI app"""
from typing import List

from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

# FastAPI app
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/games", response_model=schemas.Game)
def post_game(game: schemas.GameCreate, db: Session = Depends(get_db)) -> schemas.Game:
    return crud.create_new_game(db, game)


@app.get("/games", response_model=List[schemas.Game])
def get_games(db: Session = Depends(get_db)) -> List[schemas.Game]:
    return crud.get_games(db)


@app.delete("/games/{id}", response_model=dict)
def delete_game(id: int, db: Session = Depends(get_db)) -> schemas.Game:
    crud.delete_game(db, id)
    return {}


@app.get("/scores", response_model=List[schemas.Score])
def get_scores(db: Session = Depends(get_db)) -> List[schemas.Score]:
    return [s._asdict() for s in crud.get_scores(db)]
