import { useState } from 'react'
import reactLogo from './assets/react.svg'
import classes from "./app.module.scss";
import "./index.css";

import Header from './componentes/Header/Header.component';

function App() {

  return (
    <div className={classes["app"]}>
      <Header />

    </div>
  )
}

export default App
