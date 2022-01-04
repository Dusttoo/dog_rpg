from .db import db


class Kennel(db.Model):
    __tablename__ = 'kennels'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    size = db.Column(db.Integer, nullable=False, default=5)
    cleanliness = db.Column(db.Integer, nullable=False, default=100)

    users = db.relationship('User', back_populates='kennels')



    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'size': self.size,
            'cleanliness': self.cleanliness
        }
