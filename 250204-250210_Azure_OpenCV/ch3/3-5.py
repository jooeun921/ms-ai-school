import cv2 as cv
import numpy as np

img=cv.imread('/Users/jinwookkwon/Dropbox/권진욱/Work/교재모음/딥러닝/컴퓨터비전과딥러닝/source_4548_1/source/ch3/soccer.jpg') 
img=cv.resize(img,dsize=(0,0),fx=0.25,fy=0.25)

def gamma(f,gamma=1.0):
    f1=f/255.0			# L=256이라고 가정
    return np.uint8(255*(f1**gamma))

gc=np.hstack((gamma(img,0.5),gamma(img,0.75),gamma(img,1.0),gamma(img,2.0),gamma(img,3.0)))
cv.imshow('gamma',gc)

cv.waitKey()
cv.destroyAllWindows()