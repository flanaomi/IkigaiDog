import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Linking,
  Dimensions
} from 'react-native';
import img1 from './img/1-removebg-preview.png';
import img2 from './img/Logotipo_para_pet_shop_azul_e_branco_ilustrado_-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons/faMapLocation'

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
    <ScrollView horizontal pagingEnabled={true} decelerationRate="fast" style={style.page}>
      <View style={style.container}>
        <Image style={style.img1} source={img1}></Image>
        <Text style={style.txt3}>
          Seja Bem-Vindo!
        </Text>
        <Text style={style.txt1}>
          1ª em excelência de atendimento em bem estar do seu Pet na região
        </Text>


      </View>
      <View style={style.container}>
        <>
        </>
        <Text style={style.txt2}>
         Olá, muito obrigado por estar aqui!
         Aqui ba IkigaiDog passeamos e cuidamos do seu Pet pra você.
         Deixando-o mais feliz e nos preocupamos com o bem estar dele!       </Text>
        <Image style={style.img2} source={img2}></Image>

      </View>
      <View style={style.container}>
        <Text style={style.txt3}>
          Fechando planos mensais, seu pet terá o direito de um dia de SPA animal.</Text>
        <Text style={style.txt4}>
          R$30,00 por hora</Text>
        <Text style={style.txt3}>
         Somente aqui você encontra oportunidade como essa. Não perca tempo e feche já o plano mensal ou anual.
        </Text>
        <></>
      </View>
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

    </ScrollView>

  
  )
}

const {width, height} = Dimensions.get("window");
const LADO = width;
const ALTURA = height;

const style = StyleSheet.create({

  page: {
    backgroundColor: '#0A0A2A',
    flex: 1,
    
    alignContent: 'center',
  },
  img1: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 400,
    height: 400,
  },
  img2: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 350,
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
    textAlign: "justify",
  },
  txt3: {
    color: '#36B9D6',
    alignSelf: 'center',
    fontSize: 25,
    textAlign: "center",
    flex: 3,
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
    width: LADO,
    height: ALTURA,
    alignSelf: 'center',
    alignContent: "space-between",
    justifyContent: "center",
    padding: 50,
    flex:1,
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