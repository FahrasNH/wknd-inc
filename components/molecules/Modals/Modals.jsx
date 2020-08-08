import React from 'react'
import { Modal } from 'react-bootstrap'
import { Text, View } from '../../atoms'

const Modals = ({ show, setShow, item }) => (
  <Modal
    show={show}
    onHide={() => setShow(false)}
    dialogClassName="modal-90w"
    aria-labelledby="example-custom-modal-styling-title"
  >
    <Modal.Body style={{padding: 0}}>
      <View
        backgroundSize="cover"
        backgroundImage={`url(${item.image})`}
      >
        <View position="relative" backgroundColor="rgba(0, 0, 0, .35)" height="100%" width="100%" top="0" position="relative">
          <Text
            color="white"
            padding="20px"
            fontSize="36px"
            fontWeight="900"
          >{item.title}</Text>
          <Text
            color="white"
            padding="20px"
            fontWeight="600"
          >
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </Text>
        </View>
      </View>
    </Modal.Body>
  </Modal>
)

export default Modals
