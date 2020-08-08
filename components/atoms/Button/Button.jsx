import React from 'react'
import { string, func, any } from 'prop-types'

const Button = (props) => {
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

Button.propTypes = {
  href: string,
  onClick: func,
  children: any,
  styles: string,
  className: string,
}

export default Button
