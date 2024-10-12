import pyautogui
import time
time.sleep(1)

count =0


while count <= 50: 
    pyautogui.typewrite("@Deepak Lpu side me aao")
    pyautogui.press('enter')
    count = count+1