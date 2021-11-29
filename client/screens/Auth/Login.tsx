import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import Logo from '../../assets/images/auth/Logo.png'
import bg from '../../assets/images/auth/bg_auth.png';
import { InfoNavigateProps } from '../../types';


const AuthSignUp = ({ navigation }: InfoNavigateProps) => {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [lastName, setLastName] = useState('');

  let nameValue = name;
  let loginValue = login;
  let lastNameValue = lastName;

  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <SafeAreaView>
            <Image
              style={{
                width:120,
                height:50,
                resizeMode: 'contain',
              }}
              source={Logo}
            />
            <Text style={styles.title}>Login</Text>
            <Text style={styles.textGray}>Name</Text>
            <TextInput 
                value={name}
                onChangeText={(text: React.SetStateAction<string>) => setName(text)}
                style={styles.input}
                placeholder="enter your name "
            />
            <Text style={styles.textGray}>E-mail</Text>
            <TextInput
                value={login}
                onChangeText={(text: React.SetStateAction<string>) => setLogin(text)}
                style={styles.input}
                placeholder="name@exemple.com"
            />
            <TouchableOpacity 
                style={styles.buttonSign}
                onPress={()=>{
                    navigation.navigate("Root")
                }}>
              <Text style={styles.textColor}>GO!</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.alreadyHave}
            onPress={()=>{
                navigation.navigate("AuthSignUp")
            }}>
              <Text style={styles.alreadyHaveText}>Don’t have an account. Sign up</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </ImageBackground>
  )
}

export default AuthSignUp;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
    },
    container:{
        flex:1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    title:{
        color: "#FFFFFF",
        marginTop:50,
        width:200,
        lineHeight:50,
        textAlign:'left',
        fontSize: 37,
        fontWeight: "600",
        marginBottom:36,
    },
    orange:{
        marginBottom:80,
        width:25,
        height:5,
        borderRadius:20,
        backgroundColor:"#ffa94e"
    },
    textGray:{
        marginTop:20,
        marginLeft: 14,
        marginBottom:5,
        color: "#9586A8",
        fontWeight: "400",
        fontSize: 16,
    },
    buttonSign:{
        marginTop:70,
        width:'100%',
        borderRadius:20,
        paddingVertical:23,
        alignItems:'center',
        backgroundColor:'#0BCE83',
    },
    textColor:{
        color:'white',
        fontWeight:'700',
        fontSize:16
    },
    grayLine:{
        marginBottom:40,
        backgroundColor: "gray", 
        opacity: 0.16,
        width:'100%',
        height:2,
    },
    input:{
        color: "#7203FF",
        backgroundColor:'#ffffff',
        paddingHorizontal:13,
        borderColor:"#D9D0E3",
        borderWidth: 1,
        borderRadius: 6,
        width:"100%",
        height: 47,
    },
    alreadyHave:{
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    alreadyHaveText:{
        color: "#D9D0E3",
        fontSize:17,
    }
})