import React,{component} from 'react';
import { StyleSheet,TextInput,Button,View,ScrollView } from 'react-native';
import Card from '../MiniComponent/Card'
import BoldText from '../MiniComponent/BoldText'
import NormalText from '../MiniComponent/NormalText'


class Registration extends React.Component{
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
            <View style={styles.RegistrationContainer}>
                <Card>
                    <BoldText>Registration Details</BoldText>
                    <NormalText>Fields Marked with (*) are Mandatory</NormalText>

                    <View style={styles.TextInputContainer}>
                        <NormalText style={styles.OverideNormalText}>NSE Member Id</NormalText>
                        <TextInput placeholder="Enter NSE Member ID" style={styles.TextInput}></TextInput>
                    </View>

                    <View style={styles.TextInputContainer}>
                        <NormalText style={styles.OverideNormalText}>BSE Member Id</NormalText>
                        <TextInput placeholder="Enter BSE Member ID" style={styles.TextInput}></TextInput>
                    </View>
                    
                    <View style={styles.TextInputContainer}>
                        <NormalText style={styles.OverideNormalText}>NCDEX Member Id</NormalText>
                        <TextInput placeholder="Enter NCDEX Member ID" style={styles.TextInput}></TextInput>
                    </View>
                    
                    <View style={styles.TextInputContainer}>
                        <NormalText style={styles.OverideNormalText}>CSDL No.</NormalText>
                        <TextInput placeholder="Enter CSDL No." style={styles.TextInput}></TextInput>
                    </View>
                    
                    <View style={styles.TextInputContainer}>
                        <NormalText style={styles.OverideNormalText}>NSDL NO.</NormalText>
                        <TextInput placeholder="Enter NSDL No." style={styles.TextInput}></TextInput>
                    </View>

                    <View style={styles.TextInputContainer}>
                        <NormalText style={styles.OverideNormalText}>MSEI No.</NormalText>
                        <TextInput placeholder="Enter MSEI No." style={styles.TextInput}></TextInput>
                    </View>

                    <View style={styles.TextInputContainer}>
                        <NormalText style={styles.OverideNormalText}>(*)SEBI Registration No.</NormalText>
                        <TextInput placeholder="Enter SEBI No." style={styles.TextInput}></TextInput>
                    </View>

                    <View style={styles.TextInputContainer}>
                        <NormalText style={styles.OverideNormalText}>Research Analyst No.</NormalText>
                        <TextInput placeholder="Enter Research Analyst No." style={styles.TextInput}></TextInput>
                    </View>

                    <View style={styles.TextInputContainer}>
                        <NormalText style={styles.OverideNormalText}>ARN No.</NormalText>
                        <TextInput placeholder="Enter ARN No." style={styles.TextInput}></TextInput>
                    </View>

                    <View style={styles.TextInputContainer}>
                        <NormalText style={styles.OverideNormalText}>Investment Advisory No.</NormalText>
                        <TextInput placeholder="Enter Investment Advisory No." style={styles.TextInput}></TextInput>
                    </View>

                    <View style={styles.TextInputContainer}>
                        <NormalText style={styles.OverideNormalText}>IRDAC Corporate Agency No.</NormalText>
                        <TextInput placeholder="Enter IRDAC Corporate Agency No." style={styles.TextInput}></TextInput>
                    </View>

                    <View style={styles.TextInputContainer}>
                        <NormalText style={styles.OverideNormalText}>PMS No.</NormalText>
                        <TextInput placeholder="Enter PMS No." style={styles.TextInput}></TextInput>
                    </View>

                    <View style={styles.TextInputContainer}>
                        <NormalText style={styles.OverideNormalText}>(*) CIN No.</NormalText>
                        <TextInput placeholder="Enter PMS No." style={styles.TextInput}></TextInput>
                    </View>

                    <View style={styles.TextInputContainer}>
                        <NormalText style={styles.OverideNormalText}>Asset Management Company Number</NormalText>
                        <TextInput placeholder="Enter Asset Management Company Number" style={styles.TextInput}></TextInput>
                    </View>

                    <View style={styles.ButtonContainer}>
                        <Button title="Proceed" onPress={()=>this.props.navigation.navigate('CompanyDetails')} color="#f5bb18" />
                    </View>
                </Card>

            </View>
        </ScrollView>
        )
    }
}


const styles=StyleSheet.create({
    RegistrationContainer:{
        flex:1,
        backgroundColor:"#ebecf1",
        justifyContent:'center',
        alignItems:'center',
        paddingTop:40
    },
    TextInputContainer:{
        marginVertical:0,
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
        width:"80%",
        marginVertical:15,
        borderRadius:30,
        overflow:'hidden'
    }
})

export default Registration;
