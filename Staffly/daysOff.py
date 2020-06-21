from datetime import date
from kivymd.uix.menu import MDDropdownMenu
from kivymd.uix.picker import MDDatePicker
from kivy.uix.screenmanager import Screen
from kivy.core.window import Window
from Staffly.model import DaysOffRequest
from Staffly.controller.Database import createDaysOffRequest

request_date = date.today()
request = DaysOffRequest.DaysOffRequest(0, request_date, request_date, request_date, "test")
class daysOff(Screen):
    menu: MDDropdownMenu
    window_sizes = Window.size
    print("window" + str(window_sizes))

    def vacationType(self):
        request.setTypeId(1)
        print(request.type_id)

    def desHolidayType(self):
        request.setTypeId(2)
        print(request.type_id)

    def illnessType(self):
        request.setTypeId(3)
        print(request.type_id)

    def nonTrainType(self):
        request.setTypeId(4)
        print(request.type_id)

    def workTrainType(self):
        request.setTypeId(5)
        print(request.type_id)

    def militaryType(self):
        request.setTypeId(6)
        print(request.type_id)

    def parentType(self):
        request.setTypeId(7)
        print(request.type_id)

    def getComment(self):
        comment = self.ids.comment.text
        request.setComment(comment)
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
        request.setStartDate(the_date)

    def endDate(self, the_date):
        print(the_date)
        self.ids.end_date_label.text = str(the_date)
        request.setEndDate(the_date)

    def createDaysOff(self):
        print(request.type_id, request.request_date, request.start_date, request.end_date, request.comment)
        createDaysOffRequest(request.type_id, request.request_date, request.start_date, request.end_date,
                             request.comment)

        print("test")

# if __name__ == "__main__":
# swap().run()
