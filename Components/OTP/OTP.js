import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,TextInput, Button,TouchableWithoutFeedback,findNodeHandle } from 'react-native';


class OTP extends React.Component{
    constructor()
    {
        super();
        this.state={

        }
    }

    render()
    {
        return(
            <View style={style.OTPContainer}>
                <View style={style.OTPBox}>
                    <Image style={style.OTPLogo} source={require('../../assets/Images/otp.png')}/>
                    <Text style={style.OTPText}>Enter OTP</Text>
                    <Text style={style.OTPTextDesc}>We have Sent You a 4 digit OTP Number</Text>
                        
                    <View style={style.OtpInputContainer}>
                        <TextInput placeholder="Enter OTP" maxLength={4} keyboardType="number-pad" style={style.OTPInput}/>
                    </View>

                    <View style={style.OTPButtonContainer}>
                        <Button title="Submit OTP" color="#f5bb18" />
                    </View>

                </View>
            </View>
        )
    }
}

const style=StyleSheet.create({
    OTPContainer:{
        flex:1,
        backgroundColor:"#ebecf1",
        justifyContent:'center',
        alignItems:'center'
    },
    OTPLogo:{
        height:80,
        width:'80%',
        marginTop:20,
        marginBottom:10,
        
    },
    OTPBox:{
        backgroundColor:'white',
        width:300,
        maxWidth:'85%',
        borderColor:'black',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
        justifyContent:'center',
        alignItems:'center',
    },
    OTPText:{
        marginVertical:10,
        fontFamily:'open-sans-bold',
        fontSize:18
    },
    OTPTextDesc:{
        width:'75%',
        marginBottom:10,
        fontFamily:'open-sans',
        fontSize:12
    },
    OtpInputContainer:{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    OTPInput:{
        borderRadius:20,
        borderColor:'#d3d7dc',
        borderWidth:1,
        width:'80%',
        paddingVertical:5,
        paddingHorizontal:15,
        marginVertical:7
    },
    OTPButtonContainer:{
        width:"80%",
        marginVertical:15,
        borderRadius:30,
        overflow:'hidden'
    }
})

export default OTP;