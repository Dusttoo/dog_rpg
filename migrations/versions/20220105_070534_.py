"""empty message

Revision ID: d82a1d0da566
Revises: 0c4043c61812
Create Date: 2022-01-05 07:05:34.109303

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd82a1d0da566'
down_revision = '0c4043c61812'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('breeds', 'population')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('breeds', sa.Column('population', sa.INTEGER(), autoincrement=False, nullable=False))
    # ### end Alembic commands ###
