import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";
import {Ionicons} from "@expo/vector-icons";
import PropTypes from "prop-types";
export default Weather;

const weatherCases = {
    Rain: {
        colors:["#82b1ff", "#2962ff"],
        title: "비가 쏟아져요",
        subtitle: "더 알아보려면 창밖을 보세요!",
        icon: 'ios-rainy'
    },
    Clear: {
        colors:["#ffe57f", "#ffab00"],
        title: "겁나 맑아요",
        subtitle: "하늘이 청명해요!",
        icon: 'ios-sunny'
    },
    Thunderstorm:{
        colors:["#ea80fc", "#aa00ff"],
        title: "천둥번개 난리법석",
        subtitle: "하늘이 난리가 났어요!",
        icon: 'ios-thunderstorm'
    },
    Clouds:{
        colors:["#84ffff", "#00b8d4"],
        title: "흐림흐림",
        subtitle: "지루한 날씨네요",
        icon: 'ios-cloudy'
    },
    Snow:{
        colors:["#84ffff", "#00b8d4"],
        title: "얼어 죽어요",
        subtitle: "나랑 눈사람 만들래~?",
        icon: 'ios-snow'
    },
    Drizzle:{
        colors:["#ff80ab", "#c51162"],
        title: "이슬비",
        subtitle: "올거면 오고 말거면 말지...",
        icon: 'ios-rainy-outline'
    },
    Haze:{
        colors:["#ff80ab", "#c51162"],
        title: "연무",
        subtitle: "앞이 안보여요",
        icon: 'weather-fog'
    },
    Mist:{
        colors:["#ff80ab", "#c51162"],
        title: "안개",
        subtitle: "앞이 안보여요",
        icon: 'weather-fog'
    },
}
function Weather({ temp, weatherName }){
    console.log(weatherName);
    return(
        <LinearGradient 
            colors={weatherCases[weatherName].colors} 
            style={styles.container}
            >
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            
            <View style={styles.lower}>
            <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
            <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
            </LinearGradient>
    )
}

Weather.prototype = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    temp:{
        fontSize:48,
        backgroundColor: "transparent",
        color: "#f1f1f1",
        marginTop:10
    },
    upper:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"transparent"
    },
    lower:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-end",
        paddingLeft:32
    },
    title:{
        fontSize:38,
        backgroundColor: "transparent",
        color: "#f1f1f1",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle:{
        fontSize:24,
        backgroundColor: "transparent",
        color: "#f1f1f1",
        marginBottom: 48
    }
})