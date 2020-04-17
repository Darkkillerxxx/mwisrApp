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
    Identify:{
        screen:IdentifyUser
    },
    ContactDetails:{
        screen:ContactDetails
    },
    RegistrationDetails:{
        screen:Registration
    },
    CompanyDetails:{
        screen:CompanyDetails
    },
    Onboarding:{
        screen:Onboarding
    }
},{
    headerMode:'none'
})

export default createAppContainer(MwisrNavigation)