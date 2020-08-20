const initialState = {
    selectedRow: {},
    login: {
        login: true
    },
    help: [
        {
            ID:1,
            PostDate: "21/08/2020",
            PostTitle: "Test",
            PostText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique odio condimentum varius maximus. Aliquam at purus posuere, dignissim nisl ut, commodo lorem. Cras ut efficitur ex. Donec dapibus tellus eget dolor dapibus tincidunt. Maecenas eleifend semper iaculis. Cras vitae condimentum tortor, sed blandit mi. Fusce dapibus rhoncus ipsum nec facilisis. "
        },
        {
            ID:2,
            PostDate: "14/08/2020",
            PostTitle: "Test 2",
            PostText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique odio condimentum varius maximus. Aliquam at purus posuere, dignissim nisl ut, commodo lorem. Cras ut efficitur ex. Donec dapibus tellus eget dolor dapibus tincidunt. Maecenas eleifend semper iaculis. Cras vitae condimentum tortor, sed blandit mi. Fusce dapibus rhoncus ipsum nec facilisis. "
        },
        {
            ID:3,
            PostDate: "03/06/2020",
            PostTitle: "Test 3",
            PostText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique odio condimentum varius maximus. Aliquam at purus posuere, dignissim nisl ut, commodo lorem. Cras ut efficitur ex. Donec dapibus tellus eget dolor dapibus tincidunt. Maecenas eleifend semper iaculis. Cras vitae condimentum tortor, sed blandit mi. Fusce dapibus rhoncus ipsum nec facilisis. "
        },
        {
            ID:4,
            PostDate: "12/03/2020",
            PostTitle: "Test 4",
            PostText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique odio condimentum varius maximus. Aliquam at purus posuere, dignissim nisl ut, commodo lorem. Cras ut efficitur ex. Donec dapibus tellus eget dolor dapibus tincidunt. Maecenas eleifend semper iaculis. Cras vitae condimentum tortor, sed blandit mi. Fusce dapibus rhoncus ipsum nec facilisis. "
        }
    ],
    newDayOff: [
        {
            ID: 1,
            SelectedDays: "",
            ShiftType: 1,
            Comment: ""
        }
    ],
    shiftTypes: [
        {
            Key: 1,
            Value: "2 hour"
        },
        {
            Key: 2,
            Value: "4 hour"
        },
        {
            Key: 3,
            Value: "6 hour"
        },
        {
            Key: 4,
            Value: "8 hour"
        }
    ],
    daysOffTypes: [
        {
            Key: 1,
            Value: "Vacation"
        },
        {
            Key: 2,
            Value: "Designated Holiday"
        },
        {
            Key: 3,
            Value: "Illness"
        },
        {
            Key: 4,
            Value: "Non-work learning/ Training"
        },
        {
            Key: 5,
            Value: "Work learning/ Training"
        },
        {
            Key: 6,
            Value: "Military Time Off"
        },
        {
            Key: 7,
            Value: "Parenting Time Off"
        },
    ],


    balance: [
        {
            AsOff: "06/04/2020",
            TotalDays: 35,
            DaysUsed: 5,
        }
    ],
    person: [
        {
            PersonId: 244,
            FirstName: "Bob",
            LastName: "Marley",
            UserName: "BobM1",
            UserType: 1,
            Email: "BobM",
            Password: "test123"
        }
    ],
    shifts: [
        {
            ShiftId: 233,
            PersonId: 244,
            ShiftStartDate: "27/03/2020",
            ShiftEndDate: "27/03/2020",
            ShiftType: 1,
            Location: "G336",
        },
        {
            ShiftId: 234,
            PersonId: 244,
            ShiftStartDate: "27/06/2020",
            ShiftEndDate: "28/06/2020",
            ShiftType: 2,
            Location: "G336",
        },
    ],
    daysoff: [
        {
            RequestId: 123,
            TypeId: 1,
            PersonId: 244,
            RequestDate: "13/07/2020",
            StartDate: "20/07/2020",
            EndDate: "24/07/2020",
            Comment: "Approved by team lead"


        }
    ],
    notifications: [
        {
            NotifId: 544,
            NotifDate: "13/07/2020",
            NotifTitle: "Day off requested",
            NotifInfo: "Request has been put in for manager",
        },
        {
            NotifId: 545,
            NotifDate: "27/07/2020",
            NotifTitle: "Shift Swap requested",
            NotifInfo: "Request has been put in to Sally Jens",
        }
    ]

};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case "DELETE_NOTIFICATION":
            console.log({
                ...state,
                notifications: [...state.notifications].filter((notif) => notif.NotifId !== action.payload)
            });

            return {

                ...state,
                notifications: [...state.notifications].filter((notif) => notif.NotifId !== action.payload)
            };
        case "SET_SELECTED_ROW":
            console.log(action.payload);
            return {
                ...state,
                selectedRow: action.payload
            };
        case "SET_isLoggedIn":
            console.log(action.payload);
            return {
                ...state,
                isLoggedIn: action.payload
            };
        case "ADD_PERSON":
            return {
                ...state,
                person: [...state.person, action.payload]
            };
        case "ADD_SHIFT":
            console.log([...state.shifts, {...action.payload, ShiftId: state.shifts.length}]);
            return {
                ...state,
                shifts: [...state.shifts, {...action.payload, ShiftId: state.shifts.length}]
            };
        case "DELETE_SHIFT":
            console.log({
                ...state,
                shifts: [...state.shifts].filter((shift) => shift.ShiftId !== action.payload)
            });

            return {

                ...state,
                shifts: [...state.shifts].filter((shift) => shift.ShiftId !== action.payload)
            };
        case "MODIFY_SHIFT":
            const index = state.shifts.findIndex(shift => shift.ShiftId === action.payload.id);
            console.log([...state.shifts]);
            return {
                ...state,
                shifts: [...state.shifts][index][action.payload.key] = action.payload.value
            };
        case "DAYS_OFF_TEMP":
            const i = state.newDayOff.findIndex(day => day.ID === action.payload.id);
            console.log([...state.newDayOff]);
            return {
                ...state.newDayOff,
                newDayOff: [...state.newDayOff][i][action.payload.key] = action.payload.value
            };

        default:
            return state;

    }

}