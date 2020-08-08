import React, { useEffect, useState } from 'react'
import { Text, Picture, View, Button } from '../../atoms'
import { Modals } from '../Modals'
import axios from 'axios'
import Swal from 'sweetalert2'

const TipsSection = () => {
  const [getTipssData, setTipsData] = useState({
    error: null,
    isLoaded: false,
    items: []
  })
  const [getTipssDetail, setTipsDetail] = useState({
    title: '',
    image: ''
  })
  const [show, setShow] = useState(false)

  useEffect(() => {
    const fetchTips = async () => {
      try {
        let response = await axios('https://wknd-take-home-challenge-api.herokuapp.com/help-tips')
        setTipsData({
          error: null,
          isLoaded: false,
          items: response.data
        })
      } catch (err) {
        setTipsData({
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

    fetchTips()
  }, [])

  return (
    <View
      classNames="tipsSection"
      backgroundColor="black"
      padding="33px 0 127px 0"
    >
      <Text classNames="title">Help & Tips</Text>
      <View
        width="958px"
        display="flex"
        margin="0 auto"
        overflow="hidden"
        classNames="desc"
        justifyContent="space-between"
      >
        {!getTipssData.isLoaded && getTipssData.items.map(item => (
          <div key={item.id}>
            <View
              width="311px"
              height="176px"
              position="relative"
              classNames="wrapHelp"
              backgroundSize="cover"
              backgroundImage={`url(${item.image})`}
            >
              <View
                width="100%"
                bottom="0px"
                display="flex"
                padding="17px 25px"
                position="absolute"
                alignItems="center"
                classNames="warpTextTips"
                justifyContent="space-between"
                backgroundColor="rgba(0, 0, 0, 0)"
              >
                <Text
                  color="white"
                  width="70.1%"
                  fontWeight="600"
                  fontSize="16px"
                  letterSpacing="-0.57px"
                >
                  {item.title}
                </Text>
                <Button
                  padding="0"
                  width="32px"
                  border="none"
                  height="32px"
                  borderRadius="50%"
                  onClick={() => {
                    setShow(true)
                    setTipsDetail({
                      title: item.title,
                      image: item.image
                    })
                  }}
                >
                  <Picture source={require('../../../assets/icons/ic-next.svg')} imageName="ic-next" width="32px" height="32px" cursor="pointer" imageName="ic-button"/>
                </Button>
                <Modals
                  item={getTipssDetail}
                  show={show}
                  setShow={setShow}
                />
              </View>
            </View>
          </div>
        ))}
      </View>
    </View>
  )
}

export default TipsSection
