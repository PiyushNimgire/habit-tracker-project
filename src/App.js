import React from 'react';
import { Counter } from './features/counter/Counter';
import Home from './components/Home';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WeeklyView from './components/WeeklyView';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Navbar />,
    children: [
      {path:'', element: <Home />},
      {path:'weekly-view', element: <WeeklyView />}
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
