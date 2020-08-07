import React from 'react'
import { string, func, any } from 'prop-types'

const Picture = (props) => {
  const { onClick, children, className, ...styles } = props

  return (
    <>
      <button
        onClick={onClick}
        className={className}
        style={{...styles}}
      >
        {children}
      </button>
    </>
  )
}

Picture.propTypes = {
  children: any,
  styles: string,
  className: string,
  onClick: func.isRequired,
}

export default Picture
