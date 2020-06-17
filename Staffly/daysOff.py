import os
from kivy.lang import Builder
from kivy.factory import Factory
from kivy.properties import ObjectProperty, StringProperty
from kivymd.app import MDApp
from kivymd.uix.menu import MDDropdownMenu
from kivymd.uix.picker import MDDatePicker
from kivy.uix.screenmanager import ScreenManager, Screen
from kivy.uix.gridlayout import GridLayout
from kivy.core.window import Window
from kivy.uix.spinner import Spinner
from kivymd.uix.list import IRightBodyTouch, OneLineAvatarIconListItem
from kivymd.uix.selectioncontrol import MDCheckbox
from kivymd.icon_definitions import md_icons
class daysOff(Screen):
    menu: MDDropdownMenu
    window_sizes = Window.size
    print("window" + str(window_sizes))
    def holidayType(self):
        print (1)
    def sickType(self):
        print (2)



    def getComment(self):
        comment = self.ids.comment.text
        print(comment)

    def setStartDate(self):
        picker = MDDatePicker(callback=self.startDate)
        picker.open()

    def setEndDate(self):
        picker = MDDatePicker(callback=self.endDate)
        picker.open()

    def startDate(self, the_date):
        print(the_date)
        self.ids.start_date_label.text = str(the_date)

    def endDate(self, the_date):
        print(the_date)
        self.ids.end_date_label.text = str(the_date)

# if __name__ == "__main__":
# swap().run()
