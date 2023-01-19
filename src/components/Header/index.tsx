import { Container, Logo, Foto, Title, Form } from "./styles";

import LogoImg from '../../assets/logo.png'
import FotoImg from '../../assets/foto.png'

type Props = {
    title: string;
    onPress: () => void;
}

export function Header1(){
    return(
        <Container>
            <Form>
            <Foto source = {FotoImg} />
            <Title>
             João Stel 
            </Title>
            </Form>
            <Logo source = {LogoImg} />
            
             
          
        </Container>
       
    )

}

