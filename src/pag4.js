import React, {useState}from "react";
import {
  Text,
  View,
 
  StyleSheet,
  
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Linking
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons/faMapLocation'
import { useState } from 'react';



const App = () => {

  function handleRedeSocial(redeSocial) {
    switch (redeSocial) {
      case 'phone':
        Alert.alert('Ligue para:', '+55 (15) 99601-8941')
        break
      case 'facebook':
        Linking.openURL('https://www.facebook.com/superdicaseoportunidades')
        break
      case 'instagram':
        Linking.openURL('https://www.instagram.com/ton_traveler_/')

      case 'whatsapp':
        Linking.openURL('https://api.whatsapp.com/send?phone=5515996018941&text=Ol%C3%A1!%20Eu%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20meu%20pet!')
      case 'map':
        Linking.openURL('https://goo.gl/maps/PncY4LLteCz9N4Z98')
        break

    }
  }

  return (
    <View horizontal  style={style.page}>
     
      <View style={style.container}>
        <Text style={style.txt2}>
          Se cadastre ou entre em contato conosco</Text>
        <TextInput style={style.input}
          placeholder=" digite seu nome">


        </TextInput>
        <TextInput style={style.input}
          placeholder=" digite seu e-mail">

        </TextInput>
        <TextInput style={style.input}
          placeholder="digite seu telefone"
          keyboardType="numeric">

        </TextInput>

        <View style={style.button}>
          <Button
            title="Se cadastre"
            color='#36B9D6'
            onPress={() => Alert.alert('Cadastro realizdo')}

          />

          <View style={style.icons}>
            <TouchableOpacity onPress={() => handleRedeSocial('phone')}>
              <FontAwesomeIcon style={style.icon} icon={faPhone} size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <FontAwesomeIcon style={style.icon} icon={faFacebook} size={30} />
            </TouchableOpacity >
            <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
              <FontAwesomeIcon style={style.icon} icon={faInstagram} size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('map')}>
              <FontAwesomeIcon style={style.icon} icon={faMapLocation} size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('whatsapp')}>
              <FontAwesomeIcon style={style.icon} icon={faWhatsapp} size={30} />
            </TouchableOpacity>


          </View>


        </View>

      </View>

    </View>
  )
}


const style = StyleSheet.create({

  page: {
    backgroundColor: '#0A0A2A',
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
  },
  img1: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 400,
    height: 400,
  },
  txt1: {
    color: '#36B9D6',
    alignSelf: 'center',
    fontSize: 20,
    textAlign: "center",
  },
  txt2: {
    color: '#36B9D6',
    alignSelf: 'center',
    fontSize: 23,
    textAlign: "center",
  },
  txt3: {
    color: '#36B9D6',
    alignSelf: 'center',
    fontSize: 25,
    textAlign: "center",
    flex: 2,
    alignContent: 'center',

  },
  txt4: {
    color: '#36B9D6',
    alignSelf: 'center',
    fontSize: 32,
    textAlign: "center",
    flex: 2,
    fontWeight: 'bold',
    alignContent: 'center',
  },

  container: {
    width: 300,
    height: 640,
    alignSelf: 'center',
    alignContent: 'center',
    
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#D9D9D9',
    color: '#0A0A2A',
    textAlign: 'center',

  },
  button: {
    height: 40,
    height: 40,
    margin: 12,
    borderWidth: 1,
    textAlign: 'center',

  },
  icons: {
    flexDirection: "row",
    padding: 10,
    paddingTop: 50,
    justifyContent: "space-around",
  },

  icon: {
    color: '#36B9D6',
  }



})
export default App;