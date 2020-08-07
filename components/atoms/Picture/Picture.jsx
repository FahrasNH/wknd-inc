import React from 'react'
import { string } from 'prop-types'

const Picture = (props) => {
  const { imageName, source, classNames, ...styles } = props

  return (
    <>
      <img
        src={source}
        alt={imageName}
        style={{...styles}}
        className={classNames}
      />
    </>
  )
}

Picture.propTypes = {
  styles: string,
  classNames: string,
  source: string.isRequired,
  imageName: string.isRequired,
}

export default Picture
