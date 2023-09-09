import { Box, Checkbox, Paper, Stack } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add,deleteHabit,updateStatus , habitSelectors } from '../features/habits/habitSlice';

const WeeklyView = () => {
    const habits = useSelector(habitSelectors);
    const dispatch = useDispatch();
    const handleChange = (event, habitIndex, dayIndex) => {
        const status = event.target.checked ? 'done': 'not done';
        dispatch(updateStatus({habitIndex, dayIndex, status}));
    }

    return (
        // <Box sx={{ p: 2, border: '1px solid grey',mx:40,my:3 }}>
        
        habits.map((habit, id) => (
            <Paper variant="outlined" key={id} style={{marginBottom:10, marginLeft:200,marginRight:200}}>
                <h3>{habit.name}</h3>
                <Stack direction='row' spacing={10} justifyContent={'center'}>
                    {habit.days.map((day, index) => (
                        <Stack key={index}>
                            <p>{day.day}</p>
                            <Checkbox
                                checked={day.status==='done'? true:false}
                                onChange={(e) => handleChange(e, id, index)}
                            />
                        </Stack>
                    ))}
                </Stack>
            </Paper>
        ))
        
        // </Box>
    )
}

export default WeeklyView