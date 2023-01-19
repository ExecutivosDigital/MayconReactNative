import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { Container, ModalButton, ModalCloseText ,ModalContainer,ModalCloseButton} from './styles'


export const ModalExample = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container >
      <ModalButton 
        onPress={() => setModalVisible(true)}
      >
        <ModalCloseText>
          Seus Pagamentos
        </ModalCloseText>

      </ModalButton>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
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

