import { TouchableOpacity } from 'react-native';
import styled,{ css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECUNDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
    


    width: 100%;
    height: 30px;

    background-color: ${({ theme,type }) => type === 'PRIMARY' ? theme.COLORS.PURPLE_100: theme.COLORS.PURPLE_200};
    border-radius: 6px;

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

