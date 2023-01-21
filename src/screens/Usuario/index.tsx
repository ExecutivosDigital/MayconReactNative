import React from 'react';
import { Container, Form, FormWZ } from "./styles"
import { Header1 } from '../../components/Global/Header';
import {Buttons} from '../../components/Global/Buttons';
import { Linking, Alert } from 'react-native';
import {ModalExample } from '../../components/screens/Modal'




export function Usuarios(){

    return(
        
            
        <Container>  
 
            <Header1 />
            <ModalExample/>


            <Buttons 
                
                typeButton = 'ButtonSM'
                title = 'Localizações Favoritas'
            />


            <Buttons
                typeButton = 'ButtonLG'
                title="PREMIUM"
            />


            <Form>
                <Buttons
                
                    typeButton = 'ButtonMD' 
                    title = 'Youtube'
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
                />
                <Buttons
                    typeButton = 'ButtonMD' 
                    title = 'Instagram' 
                    onPress={() => Linking.openURL('https://instagram.com/executivosdigital?igshid=YmMyMTA2M2Y=')}
                 />  
            </Form>                      
            

            <Buttons
                typeButton = 'ButtonM' 
                title = 'Tutorial, Políticas, Termos e FAQ'
                onPress={() => Linking.openURL('https://about.google/intl/ALL_br/supplier-code-of-conduct/#:~:text=O%20Google%20tem%20o%20compromisso,com%20ética%20e%20responsabilidade%20ambiental.')}
            />
            <Buttons
                typeButton = 'ButtonSM' 
                title = 'Sair'
                onPress={() => 
                    Alert.alert(
                      'Sair',
                      'Deseja sair do aplicativo ?',
                      [
                        {text: 'Sim', onPress: () => console.log('Sim pressionado')},
                        {text: 'Não', style: 'cancel'},
                      ],                      
                    )
                  }        
            />

            <Buttons
                type = 'SECUNDARY'
                typeButton = 'ButtonSM' 
                title = 'Deseja Excluir sua Conta?'

                onPress={() => 
                    Alert.alert(
                      'Excluir',
                      'Tem certeza que deseja excluir sua conta ?    Essa é uma ação irreversivel.',
                      [
                        {text: 'Sim', onPress: () => console.log('Sim pressionado')},
                        {text: 'Não', style: 'cancel'},
                      ],
                    )
                  } 
            />
            <FormWZ>
            <Buttons
                typeButton = 'ButtonWZ' 
                title = '      Alguma duvida?     Fale com nosso Suporte'
                onPress={() => Linking.openURL('https://wa.me/<66999065603>')}
            />            
            </FormWZ>

        </Container>

    )
    }
