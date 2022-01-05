from flask import Blueprint
from flask_login import login_required
from app.models import Group

group_routes = Blueprint('groups', __name__)

@group_routes.route('/')
@login_required
def groups():
    groups = Group.query.all()
    return {'groups': [group.to_dict() for group in groups ]}