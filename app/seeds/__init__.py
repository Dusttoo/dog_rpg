from flask.cli import AppGroup
from app.seeds.groups import seed_breed_groups, undo_breed_groups
from app.seeds.breeds import seed_breeds, undo_breeds
from app.seeds.kennels import seed_kennels, undo_kennels
from app.seeds.dogs import seed_dogs, undo_dogs
from .users import seed_users, undo_users


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_kennels()
    seed_breed_groups()
    seed_breeds()
    seed_dogs()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_kennels()
    undo_dogs()
    undo_breeds()
    undo_breed_groups()
    # Add other undo functions here
