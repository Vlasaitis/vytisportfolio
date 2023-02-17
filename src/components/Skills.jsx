import React from 'react'
import {skills, link} from '../constants';
import styles from '../style';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';

const Skills = () => (
    
    <section className={`${styles.paddingY}`}>
      <Zoom right cascade>
      <h2 className={`sm:pb-16 pb-6 ${styles.flexStart} ${styles.heading3}`}>My skills:</h2>
      </Zoom>
      
      <RubberBand>
      <div className='slider rounded-full'>
        <div className='slide-track'>
          {skills.map((skill, index) => (
            <div className="slide">
              <div className={`flex flex-col justify-center items-center`}>
                <img src={`${link}${skill.image}`} className='w-[20%] pt-2'/>
                <h2 className='font-poppins font-semibold text-dimWhite'>
                  {skill.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      </RubberBand>
      
    </section>
  )


export default Skills

