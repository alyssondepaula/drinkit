import React, { useState, useEffect} from 'react';
import { Alert } from 'react-native'
import { Container, Text } from './styles';

const Home = ({ route, navigation }) => {

  const [userlogin, setUser] = useState({ name: 'namelogin', peso: 'pesologin'})

  useEffect(() => {
    const { user } = route.params;
    setUser(JSON.parse(user))
  },[]);
  
  return <Container>
          
          
          <Text> Olá {userlogin.name} seu peso é { userlogin.peso } </Text>
          

  </Container>;
}

export default Home;