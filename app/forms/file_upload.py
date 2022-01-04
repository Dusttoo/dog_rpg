from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models import File


class LoginForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    url = StringField('url', validators=[DataRequired()])
