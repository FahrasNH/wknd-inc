import React from 'react'
import { string, func, any } from 'prop-types'

const Picture = (props) => {
  const { onClick, children, href, className, ...styles } = props

  return (
    <a href={href}>
      <button
        onClick={onClick}
        className={className}
        style={{...styles}}
      >
          {children}
      </button>
    </a>
  )
}

Picture.propTypes = {
  href: string,
  children: any,
  styles: string,
  className: string,
  onClick: func.isRequired,
}

export default Picture
