import React from 'react'
import {contactInfo, socialMedia} from '../constants';
import styles, {layout} from '../style';

const Contact = () => (
  <section id="contact" className={`flex md:flex-row flex-col ${styles.paddingY}`}> 
    <div className={layout.sectionInfo}>
      <h2 className={`sm:pb-8 pb-6 mt-5 ${styles.heading2}`}>Contact</h2>

        <div className={`info-holder flex flex-col`}>
        {contactInfo.map((info, index) => (
          <div
          key={info.id}
          className={`flex-col ${styles.flexStart}`}>  
            <div className={`info-container`}>
                <div className={`flex flex-1 flex-row sm:pt-6 pt-2 sm:pb-4 pb-2`}>
                  <div className='w-[150px]'>
                  <img
                    className='mr-8 object-contain'
                    src={info.icon}
                    onMouseOver={(e) => (e.currentTarget.src = info.icon2)}
                    onMouseOut={(e) => (e.currentTarget.src = info.icon)}
                  />
                  </div>
                  <h3
                    className={`${styles.heading4}`}
                    onMouseOver={(e) =>
                      (e.target.previousElementSibling.firstElementChild.src = info.icon2)
                    }
                    onMouseOut={(e) =>
                      (e.target.previousElementSibling.firstElementChild.src = info.icon)
                    }
                  >
          {info.value}
        </h3>
                </div>    
            </div>
          </div>
        ))}
        
        </div>

        <div className='socials-holder flex flex-row justify-center items-center'>
        <h3 className='font-poppins font-semibold text-dimWhite ml-3 text-[30px]'>Socials: </h3>
        {socialMedia.map((media, index) => (
          <div
          key={media.id}
          className='p-3'
          >
            <a href={media.link}>
              <img src={media.icon}/>
            </a>
          </div>
        ))}
        </div>
        <div className={`${styles.paddingY}`}></div>
    </div>
    
  </section>
)

export default Contact