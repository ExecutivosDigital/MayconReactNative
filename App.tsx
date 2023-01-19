import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components'
import { useFonts,Roboto_400Regular, Roboto_700Bold, } from '@expo-google-fonts/roboto'
import { Loading } from './src/components/Loading';


import theme from './src/theme'

import { Usuarios } from './src/screens/Usuario';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme ={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor='transparent'
        translucent
      />

    {fontsLoaded ? <Usuarios /> : <Loading />}
    </ThemeProvider>
  );
}

