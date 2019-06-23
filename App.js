
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Button} from 'react-native';



export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      meta: '',
      consumido: 0,
      status: 'Ruim',
      porcentagem: 0
    }

    this.addCopo = this.addCopo.bind(this)
    this.atualizar = this.atualizar.bind(this)
  }

  atualizar(){
    let s = this.state
    s.porcentagem = Math.floor((s.consumido/2000)*100)

    if(s.consumido < 2000){
      s.status = "Ruim"
    }else{
      s.status = "Bom"
    }
    this.setState(s)


  }
  addCopo(){
    let s = this.state
    s.consumido = s.consumido+200
    
    this.setState(s)
    
    this.atualizar()
  }


  render() {
    return (
      <ImageBackground source={require('./images/waterbg.png')} style={styles.image}>
        <View style={styles.body}>

          <View>
            <View style={styles.infoArea}>
              <View style={styles.area}>
                <Text style={styles.textTitulo}>Meta</Text>
                <Text style={styles.text}>2000 ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.textTitulo}>Consumido</Text>
                <Text style={styles.text}>{this.state.consumido}ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.textTitulo}>Status</Text>
                <Text style={styles.text}>{this.state.status}</Text>
              </View>
            </View>

            <View style={styles.pctArea}>
              <Text style={styles.pctText}>{this.state.porcentagem}%</Text>
            </View>
            <View style= {styles.btnArea}>
              <Button title='Adicionar 200ml' onPress={this.addCopo} ></Button>
            </View>
          </View>
          
          
        </View>
      
      </ImageBackground>    
      )
    }
  }
  
  
  const styles = StyleSheet.create({
    body:{
      flex: 1,
      marginTop: 20
    },
    image:{
      flex:1,
      width:null
    },
    infoArea:{
      flex:1,
      flexDirection: "row",
      marginTop: 30
      
    },
    area:{
      flex:1,
      alignItems: "center"
    },
    textTitulo:{
      color: "#45b2fc",
          
      
    },
    text:{
      fontSize: 15,
      fontWeight: "bold"
    },
    pctArea:{
      marginTop: 150,
      alignItems: "center"
    },
    pctText:{
      fontSize: 70,
      color: 'white'
    },
    btnArea:{
      marginTop:30,
      alignItems: 'center'
    }
  })
  