import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,TextInput, Button,TouchableWithoutFeedback,findNodeHandle,Slider } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Container from '../MiniComponent/Container'
import Card from '../MiniComponent/Card'
import BoldText from '../MiniComponent/BoldText'
import NormalText from '../MiniComponent/NormalText'
import InputContainer from '../MiniComponent/InputContainer'
import RBContainer from '../MiniComponent/RBContainer'

class QuestionSet1 extends React.Component{
    constructor()
    {
        super();
        this.state={

        }
    }

    render()
    {
        return(
            <Container>
                <Card>
                    <BoldText>Question Set 1</BoldText>
                    <NormalText>Fields Marked With (*) Are Mandatory</NormalText>

                    <InputContainer>
                        <NormalText style={style.OverideNormalText}>(*) Customer Age</NormalText>
                        <TextInput placeholder="Enter Age" style={style.TextInput}></TextInput>

                        <NormalText style={style.OverideNormalText}>(*) Select Percentage for Monthly Income Expenses</NormalText>
                        <Slider style={style.SliderStyle} maximumValue={100} minimumValue={0}/>

                        
                        <NormalText style={style.OverideNormalText}>(*) How Much Would You Like To Invest ?</NormalText>
                        <RadioButton.Group
                             onValueChange={(v) => {}}>
                            <RBContainer >
                                <RadioButton value="first" status={'checked'}/>
                                <NormalText style={style.OverideNormalText}>Conservative(Steady Returns With Low Ups and Downs)</NormalText>
                            </RBContainer>

                            <RBContainer >
                                <RadioButton value="first" status={'unchecked'}/>
                                <NormalText style={style.OverideNormalText}>Balanced(Good Returns with Minor Ups and Downs)</NormalText>
                            </RBContainer>
                           
                            <RBContainer >
                                <RadioButton value="first" status={'unchecked'}/>
                                <NormalText style={style.OverideNormalText}>Aggerssive(High Returns With Expected Ups and Downs)</NormalText>
                            </RBContainer>

                         </RadioButton.Group>

                         <View style={style.ButtonContainer}>
                            <Button title="Proceed" onPress={()=>this.props.navigation.navigate('RegistrationDetails')} color="#f5bb18" />
                        </View>
                        
                    </InputContainer>
                   
                </Card>
            </Container>
        )
    }
}

const style=StyleSheet.create({
    OverideNormalText:{
        marginBottom:5,
        marginTop:10,
        opacity:0.6
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
    SliderStyle:{
        width:'90%',
        marginVertical:10
    },
    ButtonContainer:{
        width:"90%",
        marginVertical:15,
        borderRadius:30,
        overflow:'hidden'
    }
})

export default QuestionSet1;