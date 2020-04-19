import React,{Component} from 'react';
import { StyleSheet,View,TextInput,Button,ScrollView } from 'react-native';
import Container from '../MiniComponent/Container'
import Card from '../MiniComponent/Card'
import NormalText from '../MiniComponent/NormalText';
import BoldText from '../MiniComponent/BoldText'
class Credit extends React.Component{
    constructor()
    {
        super();
        this.state={
            AllCreditPackages:[
                {
                  Color:"#f49d34",
                  PackageName:"Free",
                  StrikedOffPrice:"-",
                  ActualPrice:"-",
                  Customers:"-",
                  SubBrokers:"-",
                  Analyst:"-",
                  Report:"-",
                  Telegram:"-",
                  Calls:"150",
                  TelegramSupport:"No"
                },
                {
                  MainIcon:"fas fa-broadcast-tower fa-3x",
                  SubIcon:"fas fa-rupee-sign fa-3x mt-2",
                  Color:"#1890ff",
                  PackageName:"Basic",
                  StrikedOffPrice:"25000",
                  ActualPrice:"19999",
                  Customers:"0-1",
                  SubBrokers:"0-1",
                  Analyst:"0-1",
                  Report:"Unlimited",
                  Telegram:"3",
                  Calls:"300",
                  TelegramSupport:"Yes"
                },
                { 
                  MainIcon:"fab fa-keycdn fa-3x",
                  SubIcon:"fas fa-rupee-sign fa-3x mt-2",
                  Color:"#ff6961",
                  PackageName:"Silver",
                  StrikedOffPrice:"50000",
                  ActualPrice:"35000",
                  Customers:"0-3",
                  SubBrokers:"0-3",
                  Analyst:"0-3",
                  Report:"Unlimited",
                  Telegram:"3",
                  Calls:"450",
                  TelegramSupport:"Yes"
                },
                {
                  MainIcon:"fas fa-rocket fa-3x",
                  SubIcon:"fas fa-rupee-sign fa-3x mt-2",
                  Color:"#00b5b8",
                  PackageName:"Gold",
                  StrikedOffPrice:"95000",
                  ActualPrice:"60000",
                  Customers:"0-5",
                  SubBrokers:"0-5",
                  Analyst:"0-5",
                  Report:"Unlimited",
                  Telegram:"5",
                  Calls:"750",
                  TelegramSupport:"Yes"
                },
                {
                  MainIcon:"fas fa-pizza-slice fa-3x",
                  SubIcon:"fas fa-rupee-sign fa-3x mt-2",
                  Color:"#b48fd9",
                  PackageName:"Platinum",
                  StrikedOffPrice:"120000",
                  ActualPrice:"95000",
                  Customers:"0-3",
                  SubBrokers:"0-3",
                  Analyst:"0-3",
                  Report:"Unlimited",
                  Telegram:"3",
                  Calls:"10000",
                  TelegramSupport:"Yes"
                },
                {
                  MainIcon:"fas fa-globe fa-3x",
                  SubIcon:"fas fa-rupee-sign fa-3x mt-2",
                  Color:"#01579b",
                  PackageName:"Broker",
                  StrikedOffPrice:"1500000",
                  ActualPrice:"1000000",
                  Customers:"Unlimited",
                  SubBrokers:"Unlimited",
                  Analyst:"Unlimited",
                  Report:"Unlimited",
                  Telegram:"Unlimited",
                  Calls:"Unlimited",
                  TelegramSupport:"Yes"
                }
              ]
        }
    }
    
    render()
    {
    let ShowPackages=this.state.AllCreditPackages.map(result=>{
        return(
            <Card style={style.CardStyle}>
                    <View style={{width:'100%',height:100,backgroundColor:`${result.Color}`,alignItems:'center',paddingTop:10}}>
                        <BoldText style={style.OverrideBoldText}>- {result.PackageName} -</BoldText>
                        <BoldText style={style.OverrideBoldPrice}>{result.ActualPrice}</BoldText>
                        <BoldText style={style.OverrideBoldText}>Per Year</BoldText>
                    </View>

                   
                        <View style={style.PricingDescriptionContainer}>
                            <View style={style.PricingDescription}>
                                <NormalText style={style.OverrideNormalText}>Customers</NormalText>
                                <NormalText  style={{ opacity:0.6,fontSize:14,color:`${result.Color}`}}>{result.Customers}</NormalText>
                            </View>
                            <View style={style.PricingDescription}>
                                <NormalText style={style.OverrideNormalText}>Sub-Brokers</NormalText>
                                <NormalText  style={{ opacity:0.6,fontSize:14,color:`${result.Color}`}}>{result.SubBrokers}</NormalText>
                            </View>
                        </View>

                        <View style={style.PricingDescriptionContainer}>
                            <View style={style.PricingDescription}>
                                <NormalText style={style.OverrideNormalText}>Analyst</NormalText>
                                <NormalText  style={{ opacity:0.6,fontSize:14,color:`${result.Color}`}}>{result.Analyst}</NormalText>
                            </View>
                            <View style={style.PricingDescription}>
                                <NormalText style={style.OverrideNormalText}>Calls</NormalText>
                                <NormalText  style={{ opacity:0.6,fontSize:14,color:`${result.Color}`}}>{result.Calls}</NormalText>
                            </View>
                        </View>

                        <View style={style.PricingDescriptionContainer}>
                            <View style={style.PricingDescription}>
                                <NormalText style={style.OverrideNormalText}>Telegram</NormalText>
                                <NormalText  style={{ opacity:0.6,fontSize:14,color:`${result.Color}`}}>{result.Telegram}</NormalText>
                            </View>
                            <View style={style.PricingDescription}>
                                <NormalText style={style.OverrideNormalText}>Telegram Support</NormalText>
                                <NormalText  style={{ opacity:0.6,fontSize:14,color:`${result.Color}`}}>{result.TelegramSupport}</NormalText>
                            </View>
                        </View>
           

                    <View style={style.ButtonContainer}>
                        <Button title="Apply" color={`${result.Color}`}/>
                    </View>
                </Card>
        )
    })
        return(
            <ScrollView>
                <Container>
                    {ShowPackages}
                </Container>
            </ScrollView>
        )
    }
}

const style=StyleSheet.create({
    CardStyle:{
      marginVertical:10  
    },
    PricingContainer:{
        width:'100%',
        height:100,
        backgroundColor:'#f49d34',
        alignItems:'center',
        paddingTop:10
    },
    OverrideBoldText:{
        color:'white',
        fontSize:18,
        marginVertical:0
    },
     OverrideBoldPrice:{
        color:'white',
        fontSize:24,
        marginVertical:0
    },
    OverrideNormalText:{
        opacity:0.6,
        fontSize:14,
        marginBottom:5
    },
    OverrideNormalTextPrice:{
        opacity:0.6,
        fontSize:14,
        color:'#f49d34'
    },
    PricingDescriptionContainer:{
        flexDirection:'row',
        padding:5,
        justifyContent:'center',
        marginTop:5
    },
    PricingDescription:{
        justifyContent:'center',
        alignItems:'center',
        width:'50%'
    },
    ButtonContainer:{
        width:'50%',
        borderRadius:30,
        overflow:'hidden',
        marginVertical:10
    }

})

export default Credit