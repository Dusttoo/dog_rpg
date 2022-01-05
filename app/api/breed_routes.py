from flask import Blueprint
from flask_login import login_required
from app.models import Breed

breed_routes = Blueprint('breeds', __name__)


@breed_routes.route('/')
@login_required
def breeds():
    breeds = Breed.query.all()
    return {'breeds': [breed.to_dict() for breed in breeds]}
