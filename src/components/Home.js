import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add,deleteHabit, habitSelectors } from '../features/habits/habitSlice';
import { Box, Button, IconButton, Input, InputAdornment, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';


const Home = () => {
    const [name, setName] = useState('');
    const habits = useSelector(habitSelectors);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const habit = {
            name: name,
            createdDate: new Date().getDate(),
            createdMonth: new Date().getMonth()
        }
        dispatch(add(habit));
        setName('');
    }

    return (
        <div>
            <form style={{marginBottom:20}}>
                <Input 
                    type="text" 
                    name='name' 
                    id='name'
                    value={name}
                    placeholder='Enter habit...'
                    onChange={(e) => setName(e.target.value)}
                />
                <Button variant="text" onClick={handleSubmit}>
                    <AddIcon />
                </Button>
            </form>
            {habits.map((habit, index) => (
                <Box sx={{ p: 2, border: '1px solid grey',mx:40,my:3 }} key={index}>
                    <Stack direction="row" spacing={2} justifyContent={'space-between'}>
                        <div>
                            <h3>{habit.name}</h3>
                            <p>{habit.days[0].day}</p>
                        </div>
                        <IconButton aria-label="delete" onClick={() => dispatch(deleteHabit(index))}>
                            <DeleteIcon />
                        </IconButton>
                    </Stack>
                    
                    
                </Box>
                /*{ <div key={index} style={{display:'flex', justifyContent:'center', gap:50, margin:100}}>
                    <h3>{habit.name}</h3>
                    <p>{habit.createdOn}</p>
                    <IconButton aria-label="delete" onClick={() => dispatch(deleteHabit(index))}>
                        <DeleteIcon />
                    </IconButton>
                </div> }*/
            ))}
        </div>
    )
}

export default Home