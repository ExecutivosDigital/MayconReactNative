import { TouchableOpacityProps } from 'react-native';
import { Container, Title, ButtonTypeStyleProps,ButtonLG,ButtonMD,ButtonSM,ButtonWZ } from './styles'

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
    typeButton: string;
}

export function Buttons({ title, type = 'PRIMARY', typeButton, ...rest}: Props){
    return (
        
        
        <Container              
         type= {type}      
         {...rest}>
            { typeButton === 'botaoLG'? <ButtonLG/> : 
              typeButton === 'botaoMD'? <ButtonMD/> : 
              typeButton === 'botaoWZ'? <ButtonWZ/> :          
              <ButtonSM> <Title> {title} </Title>  </ButtonSM>}
        </Container>
    
        
    )
    
}