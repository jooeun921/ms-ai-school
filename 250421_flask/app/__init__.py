from flask import Flask
from .views import main_view, auth_view, board_view

app = Flask(__name__)

app.register_blueprint(main_view.bp)
app.register_blueprint(auth_view.bp)
app.register_blueprint(board_view.bp)

# flask routes <- 이 명령어를 통해서 등록이 된 함수를 확인할 수 있음.


# def about():
#     return "회사소개"


# def contact():
#     return "여기로 연락하세요~"
