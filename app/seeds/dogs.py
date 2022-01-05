from app.models import db, Dog

def seed_dogs():
    dogs = [
        Dog(
           owner = 1, name = 'Padme', description='My dog',
           breed=1, gender='female', image='https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/boxer-drawing-murphy-art-elliott.jpg'
        )
    ]

    db.session.add_all(dogs)
    db.session.commit()


def undo_dogs():
    db.session.execute('TRUNCATE dogs RESTART IDENTITY CASCADE;')
    db.session.commit()