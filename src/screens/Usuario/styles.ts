import styled from 'styled-components/native';
import {PremiumImg} from '../../assets/premium.png'
export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_300};

    padding: 24px;
`;


export const Form = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_300};

    flex-direction: row;
    justify-content: space-between;

    border-radius: 6px;

`;
export const Premium = styled.Image`

    width: 100%;
    height: 105px;

    border-radius: 6px;

    flex-direction: row;
    align-items: center;

    padding: 4px;
    margin-bottom: 12px;
`;




export const FormWZ = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_300};
    margin-top: 50px;
    align-items:center;
 
`;