from .db import db

class Breed(db.Model):
    __tablename__ = 'breeds'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    breed_group = db.Column(db.Integer, db.ForeignKey('groups.id'), nullable=False)
    personality = db.Column(db.String, nullable=False)
    avg_height = db.Column(db.JSON, nullable=False)
    avg_weight = db.Column(db.JSON, nullable=False)
    avg_life_exp = db.Column(db.String, nullable=False)
    breed_video = db.Column(db.String, nullable=False)
    description = db.Column(db.Text, nullable=False)
    population = db.Column(db.Integer, nullable=False, default=0)

    groups = db.relationship('Group', back_populates='breeds')
    dogs = db.relationship('Dog', back_populates='breeds')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'group': self.breed_group,
            'personality': self.personality,
            'avg_height': self.avg_height,
            'avg_weight': self.avg_weight,
            'avg_life_exp': self.avg_life_exp,
            'breed_video': self.breed_video,
            'description': self.description,
            'population': self.population
        }