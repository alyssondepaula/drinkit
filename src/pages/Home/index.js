import React, { useState, useEffect} from 'react';
import { Alert } from 'react-native'
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Container, Text } from './styles';

const Home = ({ route, navigation }) => {

  const [userlogin, setUser] = useState({ name: null, peso: null});
  const [water, setWater] = useState(35);

  const [date, setDate] = useState(new Date());
  const [timewake, setTimewake] = useState(new Date());
  const [timesleep, setTimesleep] = useState(new Date());
  const [timeon, setTimeon] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [modetime, setModetime] = useState('');


   

  useEffect(() => {     

    var auxhours;
    timesleep.getHours() > timewake.getHours() ?  
    auxhours = timesleep.getHours() - timewake.getHours()
    : auxhours = timewake.getHours() - timesleep.getHours()

    var auxminutes;
    timesleep.getMinutes() > timewake.getMinutes() ?  
    auxminutes = timesleep.getMinutes() - timewake.getMinutes()
    : auxminutes = timewake.getMinutes() - timesleep.getMinutes()
 

    var dte = new Date();
     dte.setHours(auxhours);
     dte.setMinutes(auxminutes);

     setTimeon(dte);
  
   },[timewake,timesleep]);

  const onChange = (event, selectedDate) => {
    const current = selectedDate || date;
    setShow(Platform.OS === 'ios');
    modetime==='sleep' ? setTimesleep(current) : setTimewake(current) ;
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepickerSleep = () => {
    showMode('time');
    setModetime('sleep')
  };

  const showTimepickerWakeup = () => {
    showMode('time');
    setModetime('wakeup')
  };

  useEffect(() => {

    const { user } = route.params;
    setWater(35*userlogin.peso);
    setUser(JSON.parse(user));
    
   
  },[]);

  return <Container>
                
         <Text> Olá {userlogin.name} </Text>
         <Text> seu peso é: { userlogin.peso } KG </Text>
         <Text> Você deve beber:  { water } ml por dia </Text>
         <Button onPress={showTimepickerWakeup} title="Show time picker!" />
        <Text> Você acorda às: {timewake.getHours().toString()+":"+timewake.getMinutes().toString()} </Text>
         <Button onPress={showTimepickerSleep} title="Show time picker!" />
        <Text> Você dorme às:  {timesleep.getHours().toString()+":"+timesleep.getMinutes().toString()} </Text>
        <Text> Você passa {timeon.getHours().toString()+":"+timeon.getMinutes().toString()} acordado </Text>
         {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
          

  </Container>;
}

export default Home;