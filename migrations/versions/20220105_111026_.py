"""empty message

Revision ID: def9eedb367b
Revises: 66f1678c908a
Create Date: 2022-01-05 11:10:26.422744

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'def9eedb367b'
down_revision = '66f1678c908a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('dogs', sa.Column('happiness', sa.Integer(), nullable=False))
    op.add_column('dogs', sa.Column('health', sa.Integer(), nullable=False))
    op.add_column('dogs', sa.Column('energy', sa.Integer(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('dogs', 'energy')
    op.drop_column('dogs', 'health')
    op.drop_column('dogs', 'happiness')
    # ### end Alembic commands ###
