import React, { useState } from 'react';
import { aboutSections } from '../constants';
import styles, { layout } from '../style';
import { office } from '../../public/assets/index';
import Flip from 'react-reveal/Flip';
import VisibilitySensor from 'react-visibility-sensor';

const About = () => {

  const [showAbout, setShowAbout] = useState(false);

  const handleReveal = (isVisible) => {
    setShowAbout(isVisible);
  };

  return (
    <section id="about" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      <div className={layout.sectionInfo}>
        <h2 className={`sm:pb-8 pb-6 mt-5 ${styles.heading2}`}>About Me</h2>
        <img src={office} className={`rounded-lg sm:w-[40%] w-[80%] border-4 border-secondary shadow-2xl shadow-secondary`} />
        <div className={`info-holder flex lg:flex-row flex-col`}>
          <VisibilitySensor onChange={handleReveal} partialVisibility offset={{ top: 200, bottom: 200 }}>
            <Flip when={showAbout} left cascade>
              {aboutSections.map((about, index) => (
                <div
                  key={about.id}
                  className={`flex-col ${styles.flexStart}`}>

                  <div className={`about-container ${index === aboutSections.length - 1 ? 'mr-0' : 'mr-10'}`}>
                    <div className={`about-header flex flex-1 flex-row sm:pt-16 pt-6 sm:pb-8 pb-4`}>
                      <img src={about.logo} />
                      <div className={`flex flex-col`}>
                        <h2 className='font-poppins font-semibold text-[20px] text-secondary xs:leading-[76.8px] leading-[66.8px] w-full ml-3'>
                          {about.title}</h2>
                        <h3 className='font-poppins font-semibold text-dimWhite ml-3'>
                          Years: {about.years}</h3>
                      </div>
                    </div>
                    <div className='text-container w-[340px] border-4 border-secondary rounded-md'>
                      <p className='font-poppins font-semibold text-dimWhite sm:p-5 p-2'>{about.description}</p>
                    </div>

                  </div>
                </div>

              ))}
            </Flip>
          </VisibilitySensor>
        </div>
      </div>

    </section>
  )
}

export default About;
