from flask import Blueprint, request
from flask_login import login_required

from app.config import Config
from app.aws_s3 import upload_file_to_s3
from app.models import db, File
#any other imports as needed

file_routes = Blueprint('file', __name__)

  #Don't forget to register your Blueprint

@file_routes.route('/', methods=["POST"])
# @login_required
def upload_file():
    print('\n\n\n', request.form['file'], '\n\n\n')

    if "file" not in request.form:

        return "No user_file key in request.files"

    file = request.form['file']
    print('\n\n\n', file, '\n\n\n')

    if file:
        file_url = upload_file_to_s3(file, Config.S3_BUCKET)
        # create an instance of <Your_Model>
        file = File(
            user_id=request.form.get('user_id'),
            #extract any form fields you've appended to the
            #body of your POST request
            #i.e.
            url=file_url
        )
        db.session.add(file)
        db.session.commit()
        return file.to_dict()
    else: return "No File Attached!"


