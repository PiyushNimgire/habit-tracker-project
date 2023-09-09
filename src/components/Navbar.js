import React from 'react';
import Button from '@mui/material/Button';
import { Link, Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => {
  return (
    <>
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            paddingX={5}
            paddingY={3}
        >
            <Link to={'/'} style={{textDecoration:'none'}}>
                <h1>Habit Tracker</h1>
            </Link>
            <Link to={'/weekly-view'}>
                <Button variant="contained">Weekly View</Button>
            </Link>
        </Stack> 
        <Outlet />
    </>
  )
}

export default Navbar