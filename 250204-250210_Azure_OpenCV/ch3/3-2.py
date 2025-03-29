import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('TkAgg')
import cv2 as cv

# OpenCV 버전 출력
print(cv.__version__)

# 이미지 파일 경로
img_path = '/Users/jinwookkwon/Dropbox/권진욱/Work/교재모음/딥러닝/컴퓨터비전과딥러닝/source_4548_1/source/ch3/soccer.jpg'

# 이미지 읽기
img = cv.imread(img_path)

# 이미지가 정상적으로 불러와졌는지 확인
if img is None:
    print("이미지를 불러올 수 없습니다. 경로를 확인하세요.")
else:
    # R 채널의 히스토그램 계산
    h = cv.calcHist([img], [2], None, [256], [0, 256])

    # Matplotlib을 사용하여 히스토그램 그리기
    plt.plot(h, color='r', linewidth=1)
    plt.title('Histogram for Red Channel')
    plt.xlabel('Pixel Intensity')
    plt.ylabel('Frequency')
    plt.show()  # 그래프 출력