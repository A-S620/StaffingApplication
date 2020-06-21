assert __name__ == '__main__'
__package__ == 'Staffly'
# Imports from external libraries

# Imports from project
# from Staffly.UI.navigation import navigation
from Staffly import navigation
from Staffly.controller import Database

if __name__ == '__main__':
    print("looooool")
    #Database.createDaysOff()

    navigation.createUI()
