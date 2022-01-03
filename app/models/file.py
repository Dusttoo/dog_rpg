from .db import db

class File(db.Model):
    __tablename__ = 'files'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    url= db.Column(db.String, nullable=False)

    users = db.relationship('User', back_populates='files')
