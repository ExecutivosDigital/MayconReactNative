import { TouchableOpacity } from 'react-native';
import styled,{ css } from 'styled-components/native';


export const Container = styled(TouchableOpacity)`
    width: 48%;
    height: 105px;

    background-color: ${({ theme }) => theme.COLORS.PURPLE_100};
    border-radius: 6px;
    border-right: 10px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

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

