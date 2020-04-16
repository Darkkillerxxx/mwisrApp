import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,TextInput, Button,TouchableWithoutFeedback } from 'react-native';

class Login extends React.Component{
    constructor()
    {
        super();
        this.state={

        }
    }

    SwitchToRegister=()=>{
        this.props.navigation.navigate('Register')
    }

    render()
    {
        return(
            <View style={style.LoginContainer}>
                <View style={style.LoginBox}>
                    <Image style={style.Logo} source={require('../../assets/Images/logo.png')}/>
                    <Text style={style.LoginText}>Login</Text>
                    <Text style={style.LoginTextDesc}>Welcome Back,You Missed on good tips this is what happens!</Text>
                    <TextInput placeholder="Enter Email or Mobile.No" style={style.LoginTextInputs}/>
                    <TextInput placeholder="Enter Password" secureTextEntry={true} style={style.LoginTextInputs}/>

                    <View style={style.ButtonContainer}>
                        <Button title="Login" color="#f5bb18" />
                    </View>

                    <Text style={style.FPText}>Dont Have an Account? </Text>
                    <TouchableWithoutFeedback onPress={()=>this.SwitchToRegister()}>
                        <Text style={style.SignUpText}>Sign up</Text>
                    </TouchableWithoutFeedback>

                </View>
            </View>
        )
    }
}

const style=StyleSheet.create({
    LoginContainer:{
        flex:1,
        backgroundColor:"#ebecf1",
        justifyContent:'center',
        alignItems:'center'
    },
    LoginBox:{
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
    LoginTextInputs:{
        borderRadius:20,
        borderColor:'#d3d7dc',
        borderWidth:1,
        width:'90%',
        paddingVertical:5,
        paddingHorizontal:15,
        marginVertical:7
    },
    ButtonContainer:{
        width:"90%",
        marginVertical:15,
        borderRadius:30,
        overflow:'hidden'
    },
    LoginText:{
        marginVertical:10,
        fontFamily:'open-sans-bold',
        fontSize:18
    },
    LoginTextDesc:{
        width:'70%',
        marginBottom:10,
        fontFamily:'open-sans',
        fontSize:12
    },
    FPText:{
        opacity:0.5,
        marginTop:15,
        fontFamily:'open-sans',
        fontSize:12
    },
    SignUpText:{
        fontFamily:'open-sans-bold',
        fontSize:12,
        color:'#f5bb18',
        marginBottom:10
    }
})

export default Login;