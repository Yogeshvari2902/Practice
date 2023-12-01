import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import { Button, styled } from '@mui/material';
import { Add,Settings } from '@mui/icons-material';
import { Typography } from '@mui/material';

function App() {
  const BlueButton = styled(Button) ({
    backgroundColor:"skyblue",
          color:"#888",
          margin:3,
          "&:hover":{
            backgroundColor:"black"
          },
          "&:disabled":{
            backgroundColor:"gray",
            color:"white"
          }
  })
return (
  <Router>
  <div>
    <div>
      <h1>Welcome to my React App</h1> 
      <Button 
        variant="text" 
        color="secondary" 
      >
        Text
      </Button>

      <Button 
        startIcon={<Settings/>} 
        variant="contained" 
        color="secondary"

      >
        Contained
      </Button>

      <Button 
        startIcon={<Add/>} 
        variant="contained" 
        color="success"

      >
        Add new post
      </Button>


      <Button 
        variant="outlined" 
        color="error"
      >
        Outlined
      </Button>
      <Typography variant="h3" component="h2">
        It uses h3. Heading tag but it is p tag
      </Typography>
      <BlueButton>My Button</BlueButton>
      <BlueButton>Another Button</BlueButton>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
</Router>
  );
}

export default App;
