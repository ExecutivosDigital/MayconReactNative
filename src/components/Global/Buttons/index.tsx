import { TouchableOpacityProps,View } from 'react-native';
import {  ButtonTypeStyleProps,Title,TitleBlack,ButtonLG,ButtonMD,ButtonSM,ButtonWZ } from './styles'

type Props = TouchableOpacityProps & {
    title: string;
    typeButton: string;
    type?: ButtonTypeStyleProps ;
}

export function Buttons({ title, type = 'PRIMARY',typeButton, ...rest}: Props){
    return (
        
            <>
                { typeButton === 'ButtonLG'? <ButtonLG
                {...rest}>
                <Title>
                        {title}
                    </Title> 
                </ButtonLG> : 
                typeButton === 'ButtonMD'? <ButtonMD
                {...rest}>
                    <Title>
                        {title}
                    </Title> 
                </ButtonMD> : 
                typeButton === 'ButtonWZ'? <ButtonWZ
                {...rest}>
                    <TitleBlack>
                        {title}
                    </TitleBlack> 
                </ButtonWZ> : 
                <ButtonSM
                type= {type} 
                {...rest}>
                    <Title>
                        {title}
                    </Title>         
                </ButtonSM> 
                
                }
            </>
        
    
        
    )
    
}