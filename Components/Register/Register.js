import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,TextInput, Button,TouchableWithoutFeedback } from 'react-native';


class Register extends React.Component{
    constructor()
    {
        super();
        this.state={

        }
    }

    onProceedToOTP=()=>{
        this.props.navigation.navigate('OTP')
    }

    render()
    {
        return(
            <View style={style.RegisterContainer}>
                <View style={style.RegisterBox}>
                    <Image style={style.Logo} source={require('../../assets/Images/logo.png')}/>
                    <Text style={style.RegisterText}>Sign Up</Text>
                    <Text style={style.RegisterTextDesc}>Welcome To WealthyFox,Stay Updated with Daily Tips</Text>
                    <TextInput placeholder="First Name" style={style.RegisterInputs}/>
                    <TextInput placeholder="Last Name" style={style.RegisterInputs}/>
                    <TextInput placeholder="Enter Email" style={style.RegisterInputs}/>
                    <TextInput placeholder="Enter Mobile" style={style.RegisterInputs}/>
                    <TextInput placeholder="Enter Password" secureTextEntry={true} style={style.RegisterInputs}/>
                    <TextInput placeholder="Confirm Password" secureTextEntry={true} style={style.RegisterInputs}/>

                    <View style={style.ButtonContainer}>
                        <Button title="Create Account" onPress={()=>this.onProceedToOTP()} color="#f5bb18" />
                    </View>
                </View>
            </View>
        )
    }
}

const style=StyleSheet.create({
    RegisterContainer:{
        flex:1,
        backgroundColor:"#ebecf1",
        justifyContent:'center',
        alignItems:'center'
    },
    RegisterBox:{
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
    Logo:{
        height:40,
        width:40,
        marginTop:20,
        marginBottom:10
    },
    RegisterInputs:{
        borderRadius:20,
        borderColor:'#d3d7dc',
        borderWidth:1,
        width:'90%',
        paddingVertical:5,
        paddingHorizontal:15,
        marginVertical:7
    },
    RegisterText:{
        marginVertical:10,
        fontFamily:'open-sans-bold',
        fontSize:18
    },
    RegisterTextDesc:{
        width:'75%',
        marginBottom:10,
        fontFamily:'open-sans',
        fontSize:12
    },
    ButtonContainer:{
        width:"90%",
        marginVertical:15,
        borderRadius:30,
        overflow:'hidden'
    }
})

export default Register;
