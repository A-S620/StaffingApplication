__package__ = 'UI'
import os
from kivy.lang import Builder
from kivy.uix.boxlayout import BoxLayout
from kivy.properties import ObjectProperty
from kivymd.app import MDApp
from kivy.uix.screenmanager import ScreenManager, Screen
from Staffly.daysOff import daysOff
#Loading all .kv files
Builder.load_file('daysOff.kv')

class ContentNavigationDrawer(BoxLayout):

    screen_manager = ObjectProperty()
    nav_drawer = ObjectProperty()




class Staffly(MDApp):
    def build(self):
        return Builder.load_file(os.path.join(os.path.dirname(__file__), "./main.kv"))



def createUI():
    Staffly().run()
