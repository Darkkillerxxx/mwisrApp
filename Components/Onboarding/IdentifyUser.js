import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

class IdentifyUser extends React.Component{
    constructor()
    {
        super();
        this.state={

        }
    }

    render()
    {
        return(
            <View style={styles.IdentifyContainer}>
                <Text style={styles.IdentifyText}>Identify Yourself</Text>
                <Text style={styles.IdentifyDesc}>Help Us Know Who You Are For Setting Up Your Profile</Text>

                <View style={styles.UserIconContainer}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('ContactDetails')}>
                        <View style={styles.UserIcon}>
                            <Image style={styles.Icon} source={require('../../assets/Images/Broker.png')} />
                            <Text style={styles.IconText}>Broker</Text>  
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.UserIcon}>
                            <Image style={styles.Icon} source={require('../../assets/Images/Analyst.png')} />
                            <Text style={styles.IconText}>Analyst</Text>  
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.UserIconContainer}>
                    <TouchableOpacity>
                        <View style={styles.UserIcon}>
                            <Image style={styles.Icon} source={require('../../assets/Images/Reaserch-House.png')} />
                            <Text style={styles.IconText}>Research House</Text>  
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.UserIcon}>
                            <Image style={styles.Icon} source={require('../../assets/Images/Sub-Broker.png')} />
                            <Text style={styles.IconText}>Sub-Broker</Text>  
                        </View>
                    </TouchableOpacity>
                    
                </View>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    IdentifyContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ebecf1"
    },
    IdentifyText:{
        fontFamily:'open-sans-bold',
        fontSize:18
    },
    IdentifyDesc:{
        fontFamily:'open-sans',
        fontSize:14,
        width:'80%',
        marginVertical:10
    },
    UserIconContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',
        marginVertical:10
    },
    UserIcon:{
       alignItems:'center'
    },
    IconText:{
        fontFamily:'open-sans',
        fontSize:14,
        marginVertical:10
    },
    Icon:{
        height:80,
        width:80
    }
})


export default IdentifyUser;