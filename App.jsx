import React from "react";
import {Netflix} from "./components/Netflix";
import './components/Netflix.module.css';

export const App = () => {
  return (
    <>
      <section className="container">
        <h1 className="card-heading">List of Best Netflix Series</h1>
        <Netflix />
      </section>
      
    </> // or we can write <React.Fragment> </React.Fragment> or <Fragment></Fragment>
  )
};

export default App;