import React, {useState} from 'react';
import {work, link} from '../constants';
import styles, {layout} from '../style';
import Flip from 'react-reveal/Flip';
import Button from './Button';
// import VisibilitySensor from 'react-visibility-sensor';

const Work = () => { 
  
  // const [showAbout, setShowAbout] = useState(false);

  // const handleReveal = (isVisible) => {
  //   setShowAbout(isVisible);
  // };

  return(
  <section id="work" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      
      <div className={`${styles.paddingY}`}>
        <h2 className={`sm:pb-12 pb-10 mt-5 ${styles.heading2}`}>My Work</h2>
          <div className={`work-holder flex lg:flex-row flex-col`}>
          <ul className="cards flex lg:flex-row flex-col">
          {/* <VisibilitySensor onChange={handleReveal} partialVisibility offset={{ top: 200, bottom: 200 }}> */}
            <Flip left cascade>
              {work.map((work, index) => (
                <div
                key={work.id}
                className="">
                  <h3 className={`sm:pb-4 pb-2 ${styles.flexStart} ${styles.heading3}`}>
                    {work.title}
                  </h3>  
                  <li>
                    <div className="card">
                      <img src={`${link}${work.image}`} className="card__image object-fit" alt="" />
                      <div className="card__overlay">
                        <div className="card__header">
                          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                          <div className="card__header-text">
                          <div class="w-6 h-6 border-b-2 border-r-2 transform rotate-45 border-secondary"></div>
                          </div>
                        </div>
                        <div className={`${styles.flexCenter} flex-col`}>
                          <a href={work.link}>
                          <div className='mb-5'>
                          <Button text="GitHub Repository"/>   
                          </div>              
                        </a>
                        <p className="card__description ss:text-[16px] text-[10px]">{work.description}</p>
                        </div>
                      </div>
                    </div>      
                  </li>  
                </div>
                    
              ))}
          </Flip>
          {/* </VisibilitySensor> */}
          </ul>
          </div>
      </div>
      
    </section>
  )
}

export default Work