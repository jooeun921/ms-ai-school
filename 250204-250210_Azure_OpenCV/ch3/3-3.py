import matplotlib
matplotlib.use('TkAgg')
import cv2 as cv
import sys

img=cv.imread('/Users/jinwookkwon/Dropbox/권진욱/Work/교재모음/딥러닝/컴퓨터비전과딥러닝/source_4548_1/source/ch3/soccer.jpg') 
            
t,bin_img=cv.threshold(img[:,:,2],0,255,cv.THRESH_BINARY+cv.THRESH_OTSU)
print('오츄 알고리즘이 찾은 최적 임곗값=',t)

cv.imshow('R channel',img[:,:,2])			# R 채널 영상
cv.imshow('R channel binarization',bin_img)	# R 채널 이진화 영상

cv.waitKey()
cv.destroyAllWindows()