import React, {useState}from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
 
} from 'react-native';

import img2 from './img/Logotipo_para_pet_shop_azul_e_branco_ilustrado_-removebg-preview.png';



const App = () => {



  return (
    <View   style={style.page}>
      
      <View style={style.container}>
       
        <Text style={style.txt2}>
          Contate-nos e deixe seu dog menos estressado e melhore a saúde dele!        </Text>
        <Image style={style.img1} source={img2}></Image>

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