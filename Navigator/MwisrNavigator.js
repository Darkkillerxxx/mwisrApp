import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../Components/Login/Login'
import Register from '../Components/Register/Register'
import OTP from '../Components/OTP/OTP'
import IdentifyUser from '../Components/Onboarding/IdentifyUser'
import ContactDetails from '../Components/Onboarding/ContactDetails'
import Registration from '../Components/Onboarding/Registration'
import CompanyDetails from '../Components/Onboarding/CompanyDetails'
import Onboarding from '../Components/Onboarding/Onboarding'
import QuestionSet1 from '../Components/Onboarding/QuestionSet1'
import QuestionSet2 from '../Components/Onboarding/QuestionSet2'
import QuestionSet3 from '../Components/Onboarding/QuestionSet3'
import Credit from '../Components/Onboarding/Credit'
import Home from '../Components/Home/Home'

const MwisrNavigation=createStackNavigator({
    Login:{
        screen:Login
    },
    Register:{
        screen:Register
    },
    OTP:{
        screen:OTP
    },
    Onboarding:{
        screen:Onboarding
    },
    Home:{
        screen:Home
    }
},{
    headerMode:'none'
})

export default createAppContainer(MwisrNavigation)