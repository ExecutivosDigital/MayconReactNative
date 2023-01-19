import { TouchableOpacityProps,Image } from 'react-native';
import { Container, Title } from './styles'
import  styled from 'styled-components/native';


const FormImage = styled.View`

`
type Props = TouchableOpacityProps & {
    title: string;
}

export function ButtonsLG({ title, ...rest}: Props){
    return (
        <Container {...rest}> 
        
        <FormImage/>
            <Title>
                {title}
            </Title>
        </Container>
    )

}