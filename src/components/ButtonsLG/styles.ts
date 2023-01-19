import { TouchableOpacity } from 'react-native';
import styled,{ css } from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 105px;

    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_100};
    flex-direction: row;
    align-items: center;

    padding: 4px;
    margin-bottom: 12px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
    margin-left: 10px;
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`;

