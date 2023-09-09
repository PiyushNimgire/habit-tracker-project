import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    habits: []
}

const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const habitSlice = createSlice({
    name: 'habits',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            const { name, createdDate, createdMonth} = action.payload;
            const days = [
                { day: `${createdDate} ${months[createdMonth]}`, status: 'none'},
                { day: `${createdDate+1} ${months[createdMonth]}`, status: 'none'},
                { day: `${createdDate+2} ${months[createdMonth]}`, status: 'none'},
                { day: `${createdDate+3} ${months[createdMonth]}`, status: 'none'},
                { day: `${createdDate+4} ${months[createdMonth]}`, status: 'none'},
                { day: `${createdDate+5} ${months[createdMonth]}`, status: 'none'},
                { day: `${createdDate+6} ${months[createdMonth]}`, status: 'none'},
            ]
            const habit = {
                name: name,
                days: days
            }
            state.habits.push(habit);
        },
        deleteHabit: (state, action) => {
            state.habits.splice(action.payload, 1);
        },
        updateStatus: (state, action) => {
            const {habitIndex, dayIndex, status} = action.payload;
            const parts = state.habits[habitIndex].days[dayIndex].day.split(' ');
            const number = parseInt(parts[0], 10);
            if(number<=new Date().getDate()){
                state.habits[habitIndex].days[dayIndex].status = status;
            }
        }
    }
})

//action
export const {add, deleteHabit, updateStatus} = habitSlice.actions;

//selector
export const habitSelectors = (state) => state.habitReducer.habits;

//exporting reducer to store
export default habitSlice.reducer;