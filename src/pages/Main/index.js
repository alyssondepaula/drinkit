import React, { useState, useEffect, async} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert  } from 'react-native';
import { Container,BoxCreate, ButtonCreate,TextButtonCreate,Inputs, TextCreate } from './styles';

const Main = ({ navigation }) => {

  const [name, setName] = useState('')
  const [peso, setPeso] = useState('')
  const [user, setUser] = useState({ name: name, peso: peso})

  useEffect(() => {

    async function getUser(){

      try {
        const jsonValue = await AsyncStorage.getItem('@drinkituser')
        jsonValue != null 
        ?  navigation.navigate('Home')
        :  null
        
      } catch(e) {
         console.log(e)
      }
    }

    getUser()
  },[]);

  function handleName(event){ 
     setName(event)
     setUser({ name: event, peso: peso})}
  function handlePeso(event){ 
    setPeso(event.replace(",","."))
    setUser({ name: name, peso: event}) }
  function createUser(){ 
    if(3 > name.length ) {
    Alert.alert('Nome Invalido')
     return}
    
    }

  return <Container>
            <BoxCreate>
            <TextCreate style={{fontSize: 22}}>Ei, Vamos Criar sua conta</TextCreate>
<TextCreate style={{ marginTop: 18, alignSelf: "flex-start", marginLeft: 32}}>Nome {name}</TextCreate>
            <Inputs maxLength={23} onChangeText={handleName} value={name}/>
<TextCreate style={{ marginTop: 6, alignSelf: "flex-start", marginLeft: 32}}>Peso Corporal: {peso ? peso+" "+ "KG" : null}</TextCreate>
            <Inputs maxLength={5} keyboardType={'number-pad'} onChangeText={handlePeso} value={peso}/>
            </BoxCreate>
            <ButtonCreate onPress={createUser}>
            <TextButtonCreate >Criar Conta</TextButtonCreate>
            </ButtonCreate>
         </Container>
}

export default Main;