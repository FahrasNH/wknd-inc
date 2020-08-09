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
            <View
              height="52px"
              overflow="hidden"
            >
              <Text
                color="black"
                fontSize="12px"
                position="relative"
              >
                {item.testimony}
              </Text>
            </View>
          </View>
        </div>
      ))}
    </Flicking>
  </View>
</View>