from app.models import db, Kennel


# Adds a demo user, you can add other users here if you want
def seed_kennels():
    demo = Kennel(
        user_id = 1)


    db.session.add(demo)
    

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_kennels():
    db.session.execute('TRUNCATE kennels RESTART IDENTITY CASCADE;')
    db.session.commit()
