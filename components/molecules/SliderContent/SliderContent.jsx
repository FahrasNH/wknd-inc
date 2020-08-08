import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import Flicking from "@egjs/react-flicking"
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

  return (
    <View
      width="730px"
      top="-100px"
      margin="0 auto"
      position="relative"
      classNames="wrapSliderFlick"
    >
      <View
        width="600px"
        height="140px"
        margin="0 auto"
        overflow="hidden"
        position="relative"
        classNames="sliderFlick"
      >
        <Flicking
          gap={10}
          hanger={"0%"}
          anchor={"0%"}
          zIndex={2000}
          bounce = {100}
          defaultIndex={3}
          collectStatistics={true}
          moveType={{type: "freeScroll", count: 1}}
        >
          {!getTestimonialsData.isLoaded && getTestimonialsData.items.map(item => (
            <div key={item.id}>
              <View
                width="247px"
                height="140px"
                padding="20px"
                backgroundColor="white"
              >
                <Text
                  height="40px"
                  fontSize="32px"
                  fontWeight="900"
                  margin="0 0 10px 0"
                >
                  {item.by}
                </Text>
                <Text
                  color="black"
                  fontSize="12px"
                  position="relative"
                >
                  {item.testimony}
                </Text>
              </View>
            </div>
          ))}
        </Flicking>
      </View>
    </View>
  )
}

export default SliderContent
