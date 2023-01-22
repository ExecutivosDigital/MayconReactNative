import { TouchableOpacity } from 'react-native';
import styled,{ css } from 'styled-components/native';
import Image1 from '../../../assets/premium.png';
import { MaterialIcons} from '@expo/vector-icons';


export type ButtonTypeStyleProps = 'PRIMARY' | 'SECUNDARY';
export type ButtonTypeSizeProps = 'LARGE' | 'MEDIUM' | 'SMALL';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) `
    
    `;

export const Title = styled.Text`
    ${({ theme }) => css`
    margin-left: 10px;
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;

export const TitleBlack = styled.Text`
    ${({ theme }) => css`
    margin-left: 10px;
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;

    export const ButtonSM = styled(TouchableOpacity)<Props>`
        
        width: 100%;
        height: 35px;
        background-color: ${({ theme,type }) => type === 'PRIMARY' ? theme.COLORS.PURPLE_100: theme.COLORS.PURPLE_200};
        border-radius: 6px;

        flex-direction: row;
        align-items: center;

        padding: 4px;
        margin-bottom: 12px;

`;

    export const ButtonMD = styled(TouchableOpacity) `
        width: 48%;
        height: 130px;
        
        border-radius: 6px;
        border-right: 10px;

        flex-direction: row;
        align-items: center;

        
        margin-bottom: 12px;
`;
    export const ButtonLG = styled(TouchableOpacity).attrs({
        onPress: (props: any) => props.onPress })`
        width: 100%;
        height: 130px;
        color: 'black';
        border-radius: 6px;
        flex-direction: row;
        align-items: center;

        
        margin-bottom: 12px;
`;

    export const ButtonWZ = styled(TouchableOpacity) `
    width: 65%;
    height: 60px;

    background-color: ${({ theme }) => theme.COLORS.GREEN_100};
    border-radius: 6px;
    border-right: 10px;

    flex-direction: row;
    align-items: center;


    padding: 4px;
    margin-bottom: 12px;
`;
export const LogoSmall = styled.Image`
    width: 20%;
    height: 50px;
`;
export const LogoLarge = styled.Image`
    border-radius: 6px;
    width: 100%;
    height: 100%;
`;
export const LogoMedium = styled.Image`
    border-radius: 6px;
    width: 100%;
    height: 100%;
`;

