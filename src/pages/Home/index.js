import React, { useState, useEffect} from 'react';
import { Alert } from 'react-native'
import { Container, Text } from './styles';

const Home = ({ route, navigation }) => {

  const [namelogin, setName] = useState('')
  const [pesologin, setPeso] = useState('')
  const [userlogin, setUser] = useState({ name: namelogin, peso: pesologin})

  useEffect(() => {

    const { user } = route.params;
    setUser(JSON.parse(user))
    setName(userlogin.name)
    setPeso(userlogin.peso)



  },[]);
  return <Container>
          
          
          <Text> Olá {namelogin} seu peso é { pesologin } </Text>
          

  </Container>;
}

export default Home;