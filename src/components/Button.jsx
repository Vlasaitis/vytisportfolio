import React from 'react'

const Button = (props) => {
  return (
    <button
    class="middle none center rounded-lg bg-secondary py-3 px-6 font-sans text-xs font-bold uppercase text-primary shadow-md
     shadow-yellow-400/20 transition-all hover:shadow-lg hover:shadow-yellow-400/20 focus:opacity-[0.85] focus:shadow-none
      active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true"
  >
  {props.text}
  </button> 
  )
}

export default Button