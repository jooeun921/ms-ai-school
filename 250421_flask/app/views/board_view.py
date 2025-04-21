from flask import Blueprint


bp = Blueprint('board', __name__, url_prefix='/board')


@bp.route('/board/')
def board():
    return '게시판'


@bp.route('/board/<id>')
def board_view(id):
    if type(id) == str:
        return f'{id}님 안녕하세요'
    else:
        return f'게시판 {id} 글 내용'
    # print(type(id))
