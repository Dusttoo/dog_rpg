from .db import db

class Group(db.Model):
    __tablename__ = 'groups'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

    breeds = db.relationship('Breed', back_populates='groups')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
        }