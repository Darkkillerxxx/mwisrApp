import React,{component} from 'react';
import { StyleSheet, Text,Button,View,Image,TouchableOpacity,ScrollView } from 'react-native';
import Card from '../MiniComponent/Card'
import BoldText from '../MiniComponent/BoldText'
import NormalText from '../MiniComponent/NormalText'
import { TextInput } from 'react-native-gesture-handler';
class ContactDetails extends React.Component{
    constructor()
    {
        super();
        this.state={

        }
    }

    render()
    {
        return(
            
            <View style={styles.ContactContainer}>
                <Card>
                    <BoldText>Contact Details</BoldText>
                    <NormalText>Fields Marked with (*) are Mandatory</NormalText>

                    <View style={styles.TextInputContainer}>
                        <NormalText style={styles.OverideNormalText}>(*) Company</NormalText>
                        <TextInput placeholder="Enter Company Name" style={styles.TextInput}></TextInput>

                        <NormalText style={styles.OverideNormalText}>(*) Support Email</NormalText>
                        <TextInput placeholder="Enter Support Email" style={styles.TextInput}></TextInput>

                        <NormalText style={styles.OverideNormalText}>(*) Address</NormalText>
                        <TextInput placeholder="Enter Address" style={styles.TextInput}></TextInput>
                        
                        <NormalText style={styles.OverideNormalText}>(*) Support Contact 1</NormalText>
                        <TextInput placeholder="Enter Support Contact 1" keyboardType='number-pad' style={styles.TextInput}></TextInput>
                        
                        <NormalText style={styles.OverideNormalText}>Support Contact 2</NormalText>
                        <TextInput placeholder="Enter Support Contact 2" keyboardType='number-pad' style={styles.TextInput}></TextInput>
                        
                        <NormalText style={styles.OverideNormalText}>Website</NormalText>
                        <TextInput placeholder="Enter Website" style={styles.TextInput}></TextInput>

                        <NormalText style={styles.OverideNormalText}>Main Broker Name</NormalText>
                        <TextInput placeholder="Enter Broker Name" style={styles.TextInput}></TextInput>

                        <NormalText style={styles.OverideNormalText}>Main Broker Contact</NormalText>
                        <TextInput placeholder="Enter Broker Contact" keyboardType='number-pad' style={styles.TextInput}></TextInput>

                        <NormalText style={styles.OverideNormalText}>Main Broker Email ID</NormalText>
                        <TextInput placeholder="Enter Broker Website" style={styles.TextInput}></TextInput>

                        <NormalText style={styles.OverideNormalText}>Main Broker Website</NormalText>
                        <TextInput placeholder="Enter Broker Website" style={styles.TextInput}></TextInput>
                    </View>

                    <View style={styles.ButtonContainer}>
                        <Button title="Proceed" onPress={()=>this.props.navigation.navigate('RegistrationDetails')} color="#f5bb18" />
                    </View>
                </Card>    
            </View>
           
        )
    }
}


const styles=StyleSheet.create({
    ContactContainer:{
        flex:1,
        backgroundColor:"#ebecf1",
        justifyContent:'center',
        alignItems:'center',
        paddingTop:40
    },
    OverrideCard:{
        marginTop:"20%"
    },
    TextInputContainer:{
        marginVertical:5,
        width:'100%',
        paddingLeft:'12%',
        alignItems:'flex-start'
    },
    TextInput:{
        borderRadius:20,
        borderColor:'#d3d7dc',
        borderWidth:1,
        width:'90%',
        paddingVertical:5,
        paddingHorizontal:15,
        marginVertical:2
    },
    OverideNormalText:{
        marginBottom:5,
        marginTop:10,
        opacity:0.6
    },
    ButtonContainer:{
        width:"90%",
        marginVertical:15,
        borderRadius:30,
        overflow:'hidden'
    },
})

export default ContactDetails;