import React,{component} from 'react'
import {View,StyleSheet} from 'react-native'
import StepIndicator from 'react-native-step-indicator';
import ContactDetails from './ContactDetails'
import { ScrollView } from 'react-native-gesture-handler'
import {login_call, GetAuthHeader,CheckWhereToGo} from '../../Utils/api.js'
import {setLogin} from '../../store/Actions/ActionLogin'
import { connect }from 'react-redux'
import IdentifyUser from './IdentifyUser'
import Registration from './Registration'
import CompanyDetails from './CompanyDetails'
import QuestionSet1 from './QuestionSet1'
import QuestionSet2 from './QuestionSet2'
import QuestionSet3 from './QuestionSet3'
import Credit from './Credit'


const labels = ["Identify YourSelf","Contact Details","Registration Details","Company Details","Choose Credit"];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
  }
  
class OnBoarding extends React.Component{
    constructor()
    {
        super();
        this.state={
            OnboardingState:"",
            Labels:[]
        }
    }

    componentDidMount()
    {
        console.log("REDUX",this.props.loginState)
        this.setState({OnboardingState:this.props.loginState.WhereToGo},()=>{
            console.log(this.state.OnboardingState)
        })
    }

    CommonLoginCall=()=>{
        let payload={
            EMailId:this.props.loginState.EMailId,
            Password:this.props.loginState.Password,
            Phone:this.props.loginState.MobileNo
          }
          
            login_call(payload).then(result=>{
              if(result.IsSuccess)
              {
                let authHeader = GetAuthHeader(this.props.loginState.EMailId,this.props.loginState.Password,this.props.loginState.MobileNo,result.Data.AccessToken);
                let ReduxLoginPayload=result.Data
                ReduxLoginPayload.AuthHeader=authHeader
                ReduxLoginPayload.Password=this.props.loginState.Password
                this.props.onSetLogin(ReduxLoginPayload)
                if(result.Data.WhereToGo !== "DB")
                {
                    this.setState({OnboardingState:result.Data.WhereToGo})
                }
                else if(result.Data.WhereToGo === "DB")
                {
                    this.props.navigation.navigate(CheckWhereToGo(result.Data.WhereToGo))
                }
                
              }
            })
    }

    render()
    {
        return(
            <ScrollView>
                <View style={styles.Container}>
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={1}
                        labels={labels}
                    />
                    {console.log("In Render",this.state.OnboardingState)}
                    {this.state.OnboardingState === "IU" ? <IdentifyUser UserTypeId={this.props.loginState.UserTypeId} authHeader={this.props.loginState.AuthHeader} UserId={this.props.loginState.UserId} LoginCall={this.CommonLoginCall}/>:
                    this.state.OnboardingState === "CD" ?  <ContactDetails authHeader={this.props.loginState.AuthHeader} Contact={this.props.loginState.MobileNo} Name={this.props.loginState.UserName} UserType={this.props.loginState.UserTypeId} LoginCall={this.CommonLoginCall} />:
                    this.state.OnboardingState === "RD" ? <Registration authHeader={this.props.loginState.AuthHeader} Contact={this.props.loginState.MobileNo} LoginCall={this.CommonLoginCall}/>:
                    this.state.OnboardingState === "CO" ? <CompanyDetails  authHeader={this.props.loginState.AuthHeader} Contact={this.props.loginState.MobileNo} LoginCall={this.CommonLoginCall}/> :
                    this.state.OnboardingState === "CC" ? <Credit authHeader={this.props.loginState.AuthHeader} LoginCall={this.CommonLoginCall} UserId={this.props.loginState.UserId}/>:
                    this.state.OnboardingState === "Q1" ? <QuestionSet1 authHeader={this.props.loginState.AuthHeader} LoginCall={this.CommonLoginCall} userId={this.props.loginState.UserId} />:
                    this.state.OnboardingState === "Q2" ? <QuestionSet2 authHeader={this.props.loginState.AuthHeader} LoginCall={this.CommonLoginCall} userId={this.props.loginState.UserId}/>:
                    this.state.OnboardingState === "Q3" ? <QuestionSet3 authHeader={this.props.loginState.AuthHeader} LoginCall={this.CommonLoginCall} userId={this.props.loginState.UserId}/>:null}
                   
                </View>
            </ScrollView>
            
            
        )
    }
}

const styles=StyleSheet.create({
    Container:{
           flex:1,
           paddingTop:35,
           backgroundColor:"#ebecf1"
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

export default connect(mapStateToProps,mapDispatchToProps)(OnBoarding);