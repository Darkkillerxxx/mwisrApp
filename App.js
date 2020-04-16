import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as style from './Styles/CommonStyles'
import MwisrNavigation from './Navigator/MwisrNavigator'
import {AppLoading} from 'expo'
import * as Fonts from 'expo-font'

const LoadFonts=()=>{
  return Fonts.loadAsync({
    'open-sans':require('./assets/Fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/Fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const[Loading,setLoading]=useState(false)

  if(!Loading)
  {
    return <AppLoading startAsync={LoadFonts} onFinish={()=>setLoading(true)}/>
  }

  return (
    <MwisrNavigation />
  );
}


