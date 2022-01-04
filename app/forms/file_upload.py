from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models import File


class FileUpload(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    file = StringField('file', validators=[DataRequired()])
