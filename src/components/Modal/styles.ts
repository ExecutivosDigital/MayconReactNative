import styled, {css} from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';

export const Container = styled.View`



`;



export const ModalButton = styled.TouchableOpacity`
  margin-bottom: 12px;
  width: 100%;
  height: 30px;
  padding: 4px;

  background-color: ${({ theme, }) =>  theme.COLORS.PURPLE_100};
  border-radius: 6px;

`;

export const ModalCloseText = styled.Text`
  ${({ theme }) => css`
  margin-left: 10px;
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.GRAY_200};
  font-family: ${theme.FONT_FAMILY.REGULAR};
        
  `};
`;

export const ModalContainer = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  align-items: center;
`;

export const ModalCloseButton = styled.TouchableOpacity`
  background-color: #6b1da7;
  padding: 10px;
  border-radius: 5px;
  align-self: center;
  bottom: 10px;
  z-index: 1;
  margin-top: 150%;
`;