import React,{component} from 'react'
import {View,StyleSheet} from 'react-native'
import StepIndicator from 'react-native-step-indicator';
import ContactDetails from './ContactDetails'
import { ScrollView } from 'react-native-gesture-handler';

const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Track"];
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

        }
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
                    
                    <ContactDetails />
                </View>
            </ScrollView>
            
            
        )
    }
}

const styles=StyleSheet.create({
    Container:{
           paddingTop:35,
           backgroundColor:"#ebecf1"
        }
})

export default OnBoarding;