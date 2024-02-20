import { View, Text, ActivityIndicator, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './Estilos';

const Clima = () => {

    const [data,setData]=useState(null)
    const [load,setLoad]=useState(false)

    useEffect(()=>{
        fetch('http://api.weatherapi.com/v1/forecast.json?key=67a7b16d2388474c874142135230910&q=huejutla&days=10&aqi=no&alerts=no&lang=es')
        .then(res=>res.json())
        .then(obj=>{
            setData(obj)
            setLoad(true)
        })
        .catch(err=>Alert.alert('Error inesperado: ' + err))
    },[])

    const Card=({fecha,icono,min,max})=>{
        return(
            <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:15}}>{fecha}</Text>
                <Image
                    style={{height:50, width:50}}
                    source={{uri:'https:'+icono}}
                />
                <Text style={{marginTop:15}}>{max}°C / {min}°C</Text>
            </View>
        )
    }

    const CHora=({hora,temp,icon})=>{
        return(
            <View style={{flexDirection:'column'}}>
                <View style={styles.chora}>
                    <Text style={{margin:5}}>{hora}</Text>
                    <Image
                        style={{height:50, width:50}}
                        source={{uri:'https:'+icon}}
                    />
                    <Text style={{margin:5}}>{temp}</Text>
                </View>
            </View>
        )
    }

    const LScreen=()=>{
        return(
            <View>
                <Image source={require('../img/nube.png')} style={styles.img}/>
                <View style={styles.center}>
                    <Text style={styles.titulo}>Clima - {data.location.name}</Text>
                    <View style={styles.fondoB}>
                        <View style={styles.fondoBC}>
                            <Text>Ubicacion: {data.location.name}</Text>
                            <Text>Temperatura: {data.current.temp_c}°C</Text>
                            <Text>Condicion: {data.current.condition.text}</Text>
                            <Text>max: {data.forecast.forecastday[0].day.maxtemp_c}°C / min: {data.forecast.forecastday[0].day.mintemp_c}°C</Text>
                        </View>
                    </View>

                    <View style={styles.FlatList1}>
                        <View style={styles.center}>
                            <Text style={styles.texto1}>Pronostico para 3 dias:</Text>
                            <FlatList
                                data={data.forecast.forecastday}
                                renderItem={({item})=>
                                    <Card
                                        fecha={item.date}
                                        icono={item.day.condition.icon}
                                        max={item.day.maxtemp_c}
                                        min={item.day.mintemp_c}
                                    />
                                }
                            />
                        </View>
                    </View>

                    <View style={styles.FlatList2}>
                        <View style={styles.center}>
                            <Text style={styles.texto1}>Durante el dia de hoy:</Text>
                            <FlatList horizontal
                                data={data.forecast.forecastday[0].hour}
                                renderItem={({item})=>
                                    <CHora
                                        hora={item.time}
                                        temp={item.temp_c}
                                        icon={item.condition.icon}
                                    />
                                }
                            />
                        </View>
                    </View>

                    <View style={styles.center}>
                        <View style={styles.fondoB2}>
                            <View style={styles.fondoBC2}>
                                <Text>UV: {data.forecast.forecastday[0].day.uv}n</Text>
                                <Text>Humedad: {data.forecast.forecastday[0].day.avghumidity}</Text>
                                <Text>Sensacion Termica: {data.current.feelslike_c}°C</Text>
                                <Text>Hora para el anochecer: {data.forecast.forecastday[0].astro.moonrise}</Text>
                                <Text>Presión: {data.current.pressure_in}</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        )
    }

    const UScreen=()=>{
        return(
            <View>
                <ActivityIndicator size={'large'} color={'darkblue'}/>
            </View>
        )
    }

  return (
    <View>
        {load?LScreen():UScreen()}
    </View>
  )
}

export default Clima