import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,Button } from 'react-native';
import { connect }from 'react-redux'
import {login_call, GetAuthHeader,CheckWhereToGo} from '../../Utils/api.js'
import Spinner from 'react-native-loading-spinner-overlay';
import {setLogin} from '../../store/Actions/ActionLogin'
import Container from '../MiniComponent/Container'
import Card from '../MiniComponent/Card'
import BoldText from '../MiniComponent/BoldText'
import NormalText from '../MiniComponent/NormalText'

class Login extends React.Component{
    constructor()
    {
        super();
        this.state={
            Email:"",
            Password:"",
            Phone:"",
            ErrCode:0,
            isLoading:false
        }
    }

    SwitchToRegister=()=>{
        this.props.navigation.navigate('Register')
    }

    Validation=()=>{
        if(this.state.Email === "")
        {
            this.setState({ErrCode:1})
            this.setState({isLoading:false})
            return false;
        }
        else if(this.state.Password === "")
        {
            this.setState({ErrCode:2})
            this.setState({isLoading:false})
            return false;
        }
        else
        {
            return true;
        }
    }

    Login=()=>{
        this.setState({isLoading:true})
        if(this.Validation())
        {
            let payload={
                EMailId:this.state.Email,
                Password:this.state.Password,
                Phone:""
            }
            login_call(payload).then(result=>{
                if(result.IsSuccess && result.Data.UserId !== 0)
                {
                    let authHeader;
                    let login_payload2={
                      "EMailId":this.state.Email,
                      "Password":this.state.Password,
                      "Phone":result.Data["MobileNo"]
                    }

                    login_call(login_payload2).then(result => {
                        if(result.IsSuccess)
                        {
                            authHeader=GetAuthHeader(
                                this.state.Email,
                                this.state.Password,
                                result.Data.MobileNo,
                                result.Data.AccessToken
                            )

                            let ReduxLoginPayload=result.Data
                            ReduxLoginPayload.AuthHeader=authHeader
                            ReduxLoginPayload.Password=this.state.Password
                            this.props.onSetLogin(ReduxLoginPayload)
                            console.log("81",this.props.loginState)
                            this.setState({isLoading:false})
                            this.props.navigation.navigate(CheckWhereToGo(result.Data.WhereToGo))
                        }
                    })
                }
                else
                {
                    this.setState({isLoading:false})
                    this.SwitchToRegister();
                }
            })
        }
       
    }

    render()
    {
        return(
            <Container>
                <Card>
                <Spinner
                    visible={this.state.isLoading}
                    textContent={'Loading...'}
                    textStyle={{color:'white'}}
                    />
                    <Image style={style.Logo} source={require('../../assets/Images/logo.png')}/>
                    <BoldText style={style.LoginText}>Login</BoldText>
                    <NormalText style={style.LoginTextDesc}>Welcome Back,You Missed on Good Tips This Is What Happens!</NormalText>

                    {this.state.ErrCode === 1 ? <NormalText style={style.ErrorText}>Email Cannot Be Left Empty</NormalText>:null}
                    <TextInput placeholder="Enter Email or Mobile.No" onChangeText={(e)=>this.setState({Email:e})} style={style.LoginTextInputs}/>
                    {this.state.ErrCode === 2 ? <NormalText style={style.ErrorText}>Password Cannot Be Left Empty</NormalText>:null}
                    <TextInput placeholder="Enter Password" onChangeText={(e)=>this.setState({Password:e})} secureTextEntry={true} style={style.LoginTextInputs}/>

                    <View style={style.ButtonContainer}>
                        <Button title="Login" onPress={()=>this.Login()} color="#f5bb18" />
                    </View>

                    <NormalText style={style.FPText}>Dont Have an Account? </NormalText>
                    <TouchableOpacity onPress={()=>this.SwitchToRegister()}>
                        <Text style={style.SignUpText}>Sign up</Text>
                    </TouchableOpacity>

                </Card>
            </Container>
        )
    }
}

const style=StyleSheet.create({
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
    },
    ErrorText:{
        color:'red',
        marginBottom:0
    }
})

const mapStateToProps= state =>{
    return{
        loginState:state.login.login
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onSetLogin:(response)=>dispatch(setLogin(response))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);