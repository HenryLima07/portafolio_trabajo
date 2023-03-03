import { Route, Routes} from "react-router-dom";

import classes from "./app.module.scss";
import "./index.css";

import Header from './componentes/Header/Header.component';


//importing views
import LandingView from './views/Landing-view/Landing.view';

function App() {

  return (
    <div className={classes["app"]}>
      <Header />

      <Routes>
        <Route path={"/"} element={<LandingView />} />
      </Routes>
    </div>
  )
}

export default App;
