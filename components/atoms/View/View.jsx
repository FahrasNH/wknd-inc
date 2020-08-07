import React from 'react'
import { string, any } from 'prop-types'

const View = (props) => {
  const { classNames, children, ...styles } = props

  return (
    <div className={classNames} style={{...styles}}>
      {children}
    </div>
  )
}

View.propTypes = {
  children: any,
  styles: string,
  classNames: string,
}

export default View
