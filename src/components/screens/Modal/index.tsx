import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import { Container, ModalButton, ModalCloseText ,ModalContainer,ModalCloseButton} from './styles'


export const ModalExample = () => {
  const [modalVisible, setModalVisible] = useState(false);

  

  return (
    <Container  >
      <ModalButton 
        onPress={() => setModalVisible(true)}
      >
        <ModalCloseText>
          Seus Pagamentos
        </ModalCloseText>

      </ModalButton>
      <Modal
        animationIn = "slideInUp"
        animationOut = "slideOutDown"
        isVisible={modalVisible}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}

      >
        <ModalContainer>
        <Text 
          style={{ 
          color: "Black",
          fontSize: 16 ,
          marginLeft: 10,
          fontWeight: "bold"
        }}>Modal aberta 
        </Text>

        

  <ModalCloseButton
    
    onPress={() => {
      setModalVisible(false);
    }}
  >
    <Text style={{
      color: "white" 
      }}>Fechar
    </Text>
    
  </ModalCloseButton>
</ModalContainer>
      </Modal>
    </Container>
  );
    };

