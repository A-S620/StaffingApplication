const initialState = {
    balance: [
        {
          AsOff: "06/04/2020",
          TotalDays: "35",
          DaysUsed: "5",
        }
    ],
    person: [
        {
            PersonId: "244",
            FirstName: "Bob",
            LastName: "Marley",
            UserName: "BobM1",
            UserType: "1",
            Email: "BobM@example.com",
        }
    ],
    shifts: [
        {
            ShiftId: "233",
            PersonId: "2444",
            ShiftStartDate: "27/03/2020",
            ShiftEndDate: "27/03/2020",
            ShiftType: "1",
            Location: "G336",
        },
    ],
    daysoff: [
        {
            RequestId: "123",
            TypeId: "1",
            PersonId: "2444",
            RequestDate: "13/07/2020",
            StartDate: "20/07/2020",
            EndDate: "24/07/2020",
            Comment: "Approved by team lead"


        }
    ]
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_PERSON":
            return {
                ...state,
                person: [...state.person, action.payload]
            };
        case "ADD_SHIFT":
            if (state.shifts.filter(shift => shift.ShiftId === action.payload.ShiftId)) {
                console.log("error id already exists");
                return state;

            }
            return {
                ...state,
                shifts: [...state, {...action.payload, ShiftId: state.shifts.length}]
            };
        case "DELETE_SHIFT":
            return {
                ...state,
                shifts: state.shifts.filter((shift) => shift.id !== action.payload)
            };
        case "MODIFY_SHIFT":
            const index = state.shifts.findIndex(shift => shift.ShiftId === action.payload.id);
            return {
                ...state,
                shifts: state.shifts[index][action.payload.key] = action.payload.value
            };


        default:
            return state;

    }

}