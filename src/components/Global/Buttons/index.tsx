import { TouchableOpacityProps,View } from 'react-native';
import {  ButtonTypeStyleProps,Title,TitleBlack,ButtonLG,ButtonMD,ButtonSM,ButtonWZ, LogoSmall, LogoLarge, LogoMedium} from './styles'




type Props = TouchableOpacityProps & {
    logo: any;
    title: string;
    typeButton: string;
    type?: ButtonTypeStyleProps ;
}

export function Buttons({title, logo,type = 'PRIMARY',typeButton, ...rest}: Props){
    return (
        
            <>
                { typeButton === 'ButtonLG'? <ButtonLG
                {...rest}>
                    <LogoLarge source = {logo} />
                <Title>
                        {title}
                    </Title> 
                </ButtonLG> : 
                typeButton === 'ButtonMD'? <ButtonMD
                {...rest}>
                    <LogoMedium source = {logo} />
                    <Title>
                        {title}
                    </Title> 
                </ButtonMD> : 
                typeButton === 'ButtonWZ'? <ButtonWZ
                {...rest}>
                    <LogoSmall source = {logo} />
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