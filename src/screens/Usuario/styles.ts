import styled from 'styled-components/native';
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





export const FormWZ = styled.View`
    
    background-color: ${({ theme }) => theme.COLORS.PURPLE_300};
    margin-top: 50px;
    align-items:center;
 
`;