import React from 'react'
import styles from '../style'
import {mayhem2, logo} from '../../public/assets/index';
import {link} from '../constants';
import Zoom from 'react-reveal/Zoom';

const Main = () => (
    <section id = "home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex text-[20px]  flex-col justify-between items-center w-full relative">
          <img src={`${link}${logo}`} alt="" className="ss:flex hidden spinningLogo  flex-col justify-between 
          items-center w-1/5 "/>
            
              <h1 className="font-poppins text-gradient flex-1 
              font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
                Vytis Lasaitis
              </h1>
            
            
            <Zoom right cascade>
            <h1 className="font-poppins text-dimWhite flex-1 
            font-semibold ss:text-[32px] text-[20px] ss:leading-[100px] leading-[75px]">
              A Junior Software Developer
            </h1>
            </Zoom>
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
          <div className="absolute z-[1] w-[50%] h-[50%] rounded-full right-20 bottom-20 blue__gradient"/>
        </div>
      </div>
      
      
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
        <img src={`${link}${mayhem2}`} alt=""  className="rounded-full w-[50%] relative 
        border-4 border-secondary shadow-2xl shadow-secondary"/>
        
      </div>
    </section>
  )


export default Main