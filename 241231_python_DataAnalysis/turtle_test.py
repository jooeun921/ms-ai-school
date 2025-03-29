from turtle import *
import random

# class로 상속해와서 마우스 클릭 위치에 직사각형 생성. 이때, 선의 굵기랑 색상도 달라야 함.
# 설정: 색상 모드와 속도
colormode(255)
speed(0)

def draw(l1, l2):
    penup()
    x = random.randint(-200, 200)  # x축 랜덤 위치
    y = random.randint(-200, 200)  # y축 랜덤 위치
    goto(x, y)
    pendown()

    # 직사각형 그리기
    begin_fill()
    color(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))
    for i in range(2):  # 두 번 반복 (직사각형)
        forward(l1)  # 한쪽 변
        right(90)
        forward(l2)  # 다른쪽 변
        right(90)
    end_fill()

# 랜덤 크기의 직사각형을 10개 그리기
for _ in range(10):
    l1 = random.randint(20, 100)  # 직사각형의 가로길이
    l2 = random.randint(50, 150)  # 직사각형의 세로길이
    draw(l1, l2)

done()
