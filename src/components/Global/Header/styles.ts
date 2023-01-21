import styled, { css } from "styled-components/native";

export const Container = styled.View`
    width: 75%;

    flex-direction: row;

    margin-bottom: 30px;
    margin-top: 20px;

`;

export const Logo = styled.Image`

    width: 70px;
    height: 70px;
`;

export const Foto = styled.Image`

    width: 70px;
    height: 70px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
    
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`;

export const Form = styled.View`
     margin-left: 15px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_300};

 
 
`;


