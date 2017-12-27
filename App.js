import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import Weather from "./Weather";

const API_KEY = "f9e269cb07c3e36d32097b149db87dd2";

export default class App extends Component {
  
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error:error
        })
      }
      );
  }
  _getWeather= (lat, long) => {
    fetch('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&APPID='+API_KEY)
    .then(response => response.json())
    .then(json=> {
      console.log(json);
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
    })
    });
  }
  render() {
    const { isLoaded,error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
      <StatusBar hidden={true} />
        {isLoaded ? (<Weather temp={Math.floor(temperature - 273.15)} weatherName={name} />) : 
        <View style={styles.loading}>
        <ActivityIndicator marginBottom={100} size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Getting the weather</Text>
        {error ? <Text style={styles.errorText}>{error}</Text>: null} 
        </View>} 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: "blue",
    fontSize: 32,
    backgroundColor:"transparent",
    marginBottom:40
  },
  loading: {
    flex: 1,
    backgroundColor: '#90a4ae',
    justifyContent: 'flex-end',
    paddingLeft:26
  },
  loadingText: {
    fontSize:38,
    color:'#f5f5f5',
    marginBottom:24,

  }
});
