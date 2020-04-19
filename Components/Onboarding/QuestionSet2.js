import React,{Component} from 'react';
import { StyleSheet,View,TextInput,Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Container from '../MiniComponent/Container'
import Card from '../MiniComponent/Card'
import BoldText from '../MiniComponent/BoldText'
import NormalText from '../MiniComponent/NormalText'
import InputContainer from '../MiniComponent/InputContainer'
import RBContainer from '../MiniComponent/RBContainer'

class QuestionSet2 extends React.Component{
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
                    <BoldText>Question Set 2</BoldText>
                    <NormalText>Fields Marked With (*) Are Mandatory</NormalText>

                    <InputContainer>
                        <NormalText style={style.OverideNormalText}>(*) How much would you like to invest ?</NormalText>
                        <TextInput placeholder="Enter Investment Amount" style={style.TextInput}></TextInput>

                        <NormalText style={style.OverideNormalText}>(*) Please Select the Riskiest Investment that You have Owned,or have Owned in the Past</NormalText>
                        <RadioButton.Group
                             onValueChange={(v) => {}}>
                            <RBContainer >
                                <RadioButton value="first" status={'checked'}/>
                                <NormalText style={style.OverideNormalText}>Saving Account</NormalText>
                            </RBContainer>

                            <RBContainer >
                                <RadioButton value="first" status={'unchecked'}/>
                                <NormalText style={style.OverideNormalText}>FDs,Real Estate</NormalText>
                            </RBContainer>
                           
                            <RBContainer >
                                <RadioButton value="first" status={'unchecked'}/>
                                <NormalText style={style.OverideNormalText}>Stock,Bonds</NormalText>
                            </RBContainer>

                            <RBContainer >
                                <RadioButton value="first" status={'unchecked'}/>
                                <NormalText style={style.OverideNormalText}>Future,Options</NormalText>
                            </RBContainer>
                         </RadioButton.Group>

                         <NormalText style={style.OverideNormalText}>(*) How Would You Describe Your Knowledge about Investments and Financial Markets</NormalText>
                         <RadioButton.Group
                             onValueChange={(v) => {}}>
                            <RBContainer >
                                <RadioButton value="first" status={'checked'}/>
                                <NormalText style={style.OverideNormalText}>None</NormalText>
                            </RBContainer>

                            <RBContainer >
                                <RadioButton value="first" status={'unchecked'}/>
                                <NormalText style={style.OverideNormalText}>Limited</NormalText>
                            </RBContainer>
                           
                            <RBContainer >
                                <RadioButton value="first" status={'unchecked'}/>
                                <NormalText style={style.OverideNormalText}>Good</NormalText>
                            </RBContainer>

                            <RBContainer >
                                <RadioButton value="first" status={'unchecked'}/>
                                <NormalText style={style.OverideNormalText}>Extensive</NormalText>
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

export default QuestionSet2;