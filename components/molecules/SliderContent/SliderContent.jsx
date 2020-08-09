import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import Slider from "react-slick"
import { View, Text } from '../../atoms'

const SliderContent = () => {
  const [getTestimonialsData, setTestimonialsData] = useState({
    error: null,
    isLoaded: false,
    items: []
  })

  useEffect(() => {
    const fetchTestimoni = async () => {
      try {
        let response = await axios('https://wknd-take-home-challenge-api.herokuapp.com/testimonial')
        setTestimonialsData({
          error: null,
          isLoaded: false,
          items: response.data
        })
      } catch (err) {
        setTestimonialsData({
          error: err,
          isLoaded: false,
          items: []
        })

        Swal.fire(
          err.response.statusText,
          '',
          'error',
        )
      } 
    }

    fetchTestimoni()
  }, [])

  const settings = {
    speed: 500,
    dots: false,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1
  }

  return (
    <Slider {...settings}>
      {getTestimonialsData.items.map(data => (
        <div className="cardWarp" key={data.id}>
          <View
            margin="10px"
            padding="20px"
            height="140px"
            backgroundColor="#FFF"
          >
            <View
              height="100px"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              <Text
                fontSize="32px"
                margin="0 0 10px 0"
                fontWeight="900"
              >
                {data.by || ''}
              </Text>
              <Text
                margin="0"
                fontSize="12px"
                lineHeight="14px"
                letterSpacing="-0.43px"
              >
                {data.testimony || ''}
              </Text>
            </View>
          </View>
        </div>
      ))}
    </Slider>
  )
}

export default SliderContent
