from .db import db

class Breed(db.Model):
    __tablename__ = 'breeds'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    group = db.Column(db.Integer, db.ForeignKey('groups.id'), nullable=False)
    population = db.Column(db.Integer, nullable=False, default=0)

    group = db.relationship('Group', back_populates='breeds')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'group': self.group,
            'population': self.population
        }