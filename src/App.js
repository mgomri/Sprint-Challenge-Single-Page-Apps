import React, {useState} from "react";
import {Route, Link} from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/'>
        <WelcomePage/>
      </Route>
      <Route path='/char'>
      <CharacterList/>
      </Route>
    </main>
  );
}
