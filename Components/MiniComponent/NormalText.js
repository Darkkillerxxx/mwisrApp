import React,{component} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';


const NormalText = (props) => {

    return(
        <Text style={{...styles.NormalText,...props.style}}>
            {props.children}
        </Text>
    )
} 


const styles=StyleSheet.create({
    NormalText:{
        marginBottom:10,
        fontFamily:'open-sans',
        fontSize:12
    }
})


export default NormalText;

