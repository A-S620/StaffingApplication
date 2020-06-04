__package__ = 'UI'

from kivy.lang import Builder
from kivy.uix.boxlayout import BoxLayout
from kivy.properties import ObjectProperty

from kivymd.app import MDApp

KV = '''
<ContentNavigationDrawer>:

    ScrollView:

        MDList:

            OneLineListItem:
                text: "Home"
                on_press:
                    root.nav_drawer.set_state("close")
                    root.screen_manager.current = "home"

            OneLineListItem:
                text: "Swap Shifts"
                on_press:
                    root.nav_drawer.set_state("close")
                    root.screen_manager.current = "swap"
            OneLineListItem:
                text: "Days Off"
                on_press:
                    root.nav_drawer.set_state("close")
                    root.screen_manager.current = "days"
            OneLineListItem:
                text: "Amend Data"
                on_press:
                    root.nav_drawer.set_state("close")
                    root.screen_manager.current = "amend"
            OneLineListItem:
                text: "Notifications"
                on_press:
                    root.nav_drawer.set_state("close")
                    root.screen_manager.current = "notifications"
            OneLineListItem:
                text: "Calendar"
                on_press:
                    root.nav_drawer.set_state("close")
                    root.screen_manager.current = "calendar"
            OneLineListItem:
                text: "Help Centre"
                on_press:
                    root.nav_drawer.set_state("close")
                    root.screen_manager.current = "help"
            OneLineListItem:
                text: "Settings"
                on_press:
                    root.nav_drawer.set_state("close")
                    root.screen_manager.current = "settings"


Screen:

    MDToolbar:
        id: toolbar
        pos_hint: {"top": 1}
        elevation: 10
        title: "Staffly"
        left_action_items: [["menu", lambda x: nav_drawer.set_state("open")]]

    NavigationLayout:
        x: toolbar.height

        ScreenManager:
            id: screen_manager

            Screen:
                name: "home"

                MDLabel:
                    text: "Home"
                    halign: "center"

            Screen:
                name: "swap"

                MDLabel:
                    text: "Swap Shifts"
                    halign: "center"
            Screen:
                name: "days"

                MDLabel:
                    text: "Days Off"
                    halign: "center"
            Screen:
                name: "amend"

                MDLabel:
                    text: "Amend Data"
                    halign: "center"
            Screen:
                name: "notifications"

                MDLabel:
                    text: "Notifications"
                    halign: "center"
            Screen:
                name: "calendar"

                MDLabel:
                    text: "Calendar"
                    halign: "center"
            Screen:
                name: "help"

                MDLabel:
                    text: "Help Centre"
                    halign: "center"
            Screen:
                name: "settings"

                MDLabel:
                    text: "Settings"
                    halign: "center"
        MDNavigationDrawer:
            id: nav_drawer

            ContentNavigationDrawer:
                screen_manager: screen_manager
                nav_drawer: nav_drawer
'''


class ContentNavigationDrawer(BoxLayout):
    screen_manager = ObjectProperty()
    nav_drawer = ObjectProperty()


class Staffly(MDApp):
    def build(self):
        return Builder.load_string(KV)



def createUI():
    Staffly().run()
