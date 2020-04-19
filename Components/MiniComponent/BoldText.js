import React,{component} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';


const BoldText = (props) => {

    return(
        <Text style={{...styles.BoldText,...props.style}}>
            {props.children}
        </Text>
    )
} 


const styles=StyleSheet.create({
    BoldText:{
        marginVertical:10,
        fontFamily:'open-sans-bold',
        fontSize:18
    },
})


export default BoldText;

