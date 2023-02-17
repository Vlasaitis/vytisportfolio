import React from 'react'
import styles from './style';
import {Navbar, About, Main, Work, Contact, Skills} from './components';
import Flip from 'react-reveal/Flip';


const App = () =>  (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
          <Main/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Skills/>
        <About/>
        <Work/>
        <Contact/>
      </div>
    </div>


  </div>
);


export default App