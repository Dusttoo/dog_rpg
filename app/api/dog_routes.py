from flask import Blueprint
from flask_login import login_required
from app.models import Dog

dog_routes = Blueprint('dogs', __name__)


@dog_routes.route('/<int:id>')
@login_required
def dogs(id):
    dogs = Dog.query.filter(Dog.owner == id)
    return {'dogs': [dog.to_dict() for dog in dogs]}
