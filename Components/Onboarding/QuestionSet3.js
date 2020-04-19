import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,TextInput, Button,TouchableWithoutFeedback,findNodeHandle } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Container from '../MiniComponent/Container'
import Card from '../MiniComponent/Card'
import BoldText from '../MiniComponent/BoldText'
import NormalText from '../MiniComponent/NormalText'
import InputContainer from '../MiniComponent/InputContainer'
import RBContainer from '../MiniComponent/RBContainer'


class QuestionSet3 extends React.Component{
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
                        <BoldText>Question Set 3</BoldText>
                        <NormalText>Fields Marked With (*) Are Mandatory</NormalText>

                        
                        <InputContainer>
                            <NormalText style={style.OverideNormalText}>(*) When Do You Want Your Money Back ?</NormalText>
                            <RadioButton.Group
                                onValueChange={(v) => {}}>
                                <RBContainer >
                                    <RadioButton value="first" status={'checked'}/>
                                    <NormalText style={style.OverideNormalText}>Short Term(Within a Year)</NormalText>
                                </RBContainer>

                                <RBContainer >
                                    <RadioButton value="first" status={'unchecked'}/>
                                    <NormalText style={style.OverideNormalText}>Medium Term (Between 1-3 Years)</NormalText>
                                </RBContainer>
                            
                                <RBContainer >
                                    <RadioButton value="first" status={'unchecked'}/>
                                    <NormalText style={style.OverideNormalText}>Long Term(After 3 Years)</NormalText>
                                </RBContainer>

                            </RadioButton.Group>

                            <NormalText style={style.OverideNormalText}>(*) Which of these below statements describes your attitude towards the performance of your investment over next three months?</NormalText>
                            <RadioButton.Group
                                onValueChange={(v) => {}}>
                                <RBContainer >
                                    <RadioButton value="first" status={'checked'}/>
                                    <NormalText style={style.OverideNormalText}>Would have hard time accepting my declines</NormalText>
                                </RBContainer>

                                <RBContainer >
                                    <RadioButton value="first" status={'unchecked'}/>
                                    <NormalText style={style.OverideNormalText}>Can only tolerate short term fluctuations.</NormalText>
                                </RBContainer>
                            

                                <RBContainer >
                                    <RadioButton value="first" status={'unchecked'}/>
                                    <NormalText style={style.OverideNormalText}>If my investment declined over 20%,then i would be concerned.</NormalText>
                                </RBContainer>
                            
                                <RBContainer >
                                    <RadioButton value="first" status={'unchecked'}/>
                                    <NormalText style={style.OverideNormalText}>I would not worry about market fluctuations.</NormalText>
                                </RBContainer>

                            </RadioButton.Group>

                            
                            <NormalText style={style.OverideNormalText}>(*) Which are the following Portfolio You are likely to Invest in?</NormalText>
                            <RadioButton.Group
                                onValueChange={(v) => {}}>
                                <RBContainer >
                                    <RadioButton value="first" status={'checked'}/>
                                    <NormalText style={style.OverideNormalText}>Portfolio A : With a Gauranted return of 7.5 p.a,with no probability of loss.</NormalText>
                                </RBContainer>

                                <RBContainer >
                                    <RadioButton value="first" status={'unchecked'}/>
                                    <NormalText style={style.OverideNormalText}>Portfolio B:With a likely return of 15% with aprobability of 5% loss.</NormalText>
                                </RBContainer>
                            

                                <RBContainer >
                                    <RadioButton value="first" status={'unchecked'}/>
                                    <NormalText style={style.OverideNormalText}>Portfolio C:With a likely return of 25% with probability of 12% loss.</NormalText>
                                </RBContainer>
                            
                                <RBContainer >
                                    <RadioButton value="first" status={'unchecked'}/>
                                    <NormalText style={style.OverideNormalText}>Portfolio D:With a likely return of 50% with a propbablity of 25% loss.</NormalText>
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
    }
})

export default QuestionSet3;