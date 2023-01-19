import { TouchableOpacityProps } from 'react-native';
import { Container, Title, Whats } from './styles'

type Props = TouchableOpacityProps & {
    title: string;
}

export function ButtonsWZ({ title, ...rest}: Props){
    return (
        <Container {...rest}> 
  
            <Title>
                {title}
            </Title>
        </Container>
    )

}