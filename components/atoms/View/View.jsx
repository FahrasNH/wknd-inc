import React from 'react'
import { string, any } from 'prop-types'

const View = (props) => {
  const { classNames, id, children, ...styles } = props

  return (
    <div className={classNames} id={id} style={{...styles}}>
      {children}
    </div>
  )
}

View.propTypes = {
  id: string,
  children: any,
  styles: string,
  classNames: string,
}

export default View
