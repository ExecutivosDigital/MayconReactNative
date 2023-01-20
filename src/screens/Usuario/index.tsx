import React from 'react';
import { Container, Form, FormWZ } from "./styles"
import { Header1 } from '../../components/Header';
import {Buttons} from '../../components/Buttons';
import { ButtonsSM } from "../../components/ButtonsSM";
import { ButtonsLG } from "../../components/ButtonsLG";
import { ButtonsMD } from "../../components/ButtonsMD";
import { ButtonsWZ } from "../../components/ButtonsWZ"
import { Linking, Alert } from 'react-native';
import {ModalExample } from '../../components/Modal'




export function Usuarios(){

    return(
        
            
        <Container>  
 
            <Header1 />
            <ModalExample/>


            <Buttons 
                typeButton = 'ButtonsSM'
                title = 'Localizações Favoritas'
            />


            <ButtonsLG
                title="PREMIUM"
            />


            <Form>
                <ButtonsMD 
                    title = 'Youtube'
                    onPress={() => Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
                />
                <ButtonsMD 
                    title = 'Instagram' 
                    onPress={() => Linking.openURL('https://instagram.com/executivosdigital?igshid=YmMyMTA2M2Y=')}
                 />  
            </Form>                      
            

            <ButtonsSM 
                title = 'Tutorial, Políticas, Termos e FAQ'
                onPress={() => Linking.openURL('https://about.google/intl/ALL_br/supplier-code-of-conduct/#:~:text=O%20Google%20tem%20o%20compromisso,com%20ética%20e%20responsabilidade%20ambiental.')}
            />
            <ButtonsSM 
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

            <ButtonsSM 
                title = 'Deseja Excluir sua Conta?'
                type= 'SECUNDARY'
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
            <ButtonsWZ 
                title = '       Alguma duvida?     Fale com nosso Suporte'
                onPress={() => Linking.openURL('https://wa.me/<66999065603>')}
            />            
            </FormWZ>

        </Container>

    )
    }
