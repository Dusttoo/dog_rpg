from .db import db
import datetime

class Dog(db.Model):
    __tablename__ = 'dogs'

    id = db.Column(db.Integer, primary_key=True)
    owner = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(500))
    callname = db.Column(db.String(80))
    breed = db.Column(db.Integer, db.ForeignKey('breeds.id'), nullable=False)
    gender = db.Column(db.String, nullable=False)
    birthday = db.Column(db.Date, nullable=False, default=datetime.datetime.now())
    age = db.Column(db.Integer, nullable=False,
                    default=datetime.datetime.now() - birthday)
    image= db.Column(db.String, nullable=False, default='https://i.etsystatic.com/7867651/r/il/6346e1/2131533539/il_fullxfull.2131533539_jslp.jpg')

    users = db.relationship('User', back_populates='dogs')
    breed = db.relationship('Breed', back_populates='dogs')

    def calculate_age(self):
        now = datetime.datetime.now()
        return now - self.birthday

    def to_dict(self):
        return {
            'owner': self.owner,
            'name': self.name,
            'callname': self.callname,
            'description': self.description,
            'breed': self.breed,
            'gender': self.gender,
            'birthday': self.birthday,
            'age': self.age,
            'image': self.image
        }