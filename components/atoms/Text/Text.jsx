import React from 'react'
import { string, any } from 'prop-types'

const Text = (props) => {
  const { classNames, children, ...styles } = props

  return (
    <div
      className={classNames}
      style={{...styles}}
    >
      {children}
    </div>
  )
}

Text.propTypes = {
  children: any,
  styles: string,
  classNames: string,
}

export default Text
