from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Kennel

kennel_routes = Blueprint('kennel', __name__)

@kennel_routes.route('/<int:id>')
@login_required
def kennel(id):
    kennel = Kennel.query.get(id)
    return kennel.to_dict()