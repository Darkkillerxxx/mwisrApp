import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../Components/Login/Login'
import Register from '../Components/Register/Register'
import OTP from '../Components/OTP/OTP'
const MwisrNavigation=createStackNavigator({
    Login:{
        screen:Login
    },
    Register:{
        screen:Register
    },
    OTP:{
        screen:OTP
    }
},{
    headerMode:'none'
})

export default createAppContainer(MwisrNavigation)