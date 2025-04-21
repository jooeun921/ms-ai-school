from flask import Blueprint, render_template


bp = Blueprint('main', __name__, url_prefix='/')


@bp.route('/<username>')
def show_name(username):
    return render_template('index.html',
                           title="나의 홈페이지",
                           username=username)


@bp.route('/')
def index():
    return "기본페이지 입니다."
    # return render_template('index.html',
    #                        title="나의 홈페이지",
    #                        username="박지민")


@bp.route('/hello')
def hello():
    return 'Hello hello page'


@bp.route('/<int:star>')
def stars(star):
    return render_template('stars.html', n=star)
