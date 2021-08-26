import React, { Component} from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";

export default class App extends Component{

  constructor (props){
    super(props);
    this.state = {
      textValue: '',
      textPass: '',
    };
  }

  Login = text =>{
    this.setState({textValue: text});
  };

  Contraseña = password => {
    this.setState({textPass: password});
  };

  render(){
    return (
      <View style={styles.container}>
        
        <View style={styles.image}>
        <Image source={require('./img/pareja.png')}/> 
        </View>
        <View style={styles.text}>
          <Text>Iniciar Sesión</Text>
        </View>
        <View style={styles.box2}>
        <Text style={{paddingBottom: 5,}}>Usuario</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1,}}
          onChangeText = {text => this.Login(text)}
          value={this.state.textValue}/></View>
        <View style={styles.box2}>
        <Text style={{paddingBottom: 5,}}>Contraseña</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1,}}
          onChangeText = {password => this.Contraseña(password)}
          value={this.state.textPass}
        /></View>

        <TouchableOpacity style={styles.button}>
          <Text> Ingresar </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 45,
  },

  text: {
    alignItems: 'center',
    padding: 10,
  },

  image: {
    alignItems: 'center',
    padding: 30,
    borderColor:'#DDDDDD',
  },

  button: {
    top: 15,
    left:110,
    alignItems: "center",
    backgroundColor: '#DDDDDD',
    padding: 15,
    borderRadius:10,
    width:100,
    height:50,
  },

  box2:{
    padding: 10,
  },

});