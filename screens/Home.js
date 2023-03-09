import { View, Text, ScrollView } from 'react-native'
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';

import React from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components//home/Categories'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import { useEffect } from 'react'
import { useState } from 'react'
import BottomTabs from '../components/home/BottomTabs'
import { Divider } from 'react-native-elements'

const YELP_API_KEY = "LIHx56HOzMM6qKEYr9DCV2C4QddvjsZIeMTtKXOYg_MkEaVNDkm2Kh9HykUqErEaNSeyQWCjRjvtRKV21O2YouDf_4_hXCoYjLM5EOCSbdORx9s-9ltnla09m2wFZHYx"

export default function Home({navigation}) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState('San Francisco');
    const [activeTab, setActiveTab] = useState('Delivery');

    const getRestaurantsFromYelp = async () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

    const apiOptions = {
        headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
        }}
    
    const res = await fetch(yelpUrl, apiOptions);
      const json = await res.json();
      return setRestaurantData(
        json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase())));
    };

    useEffect(() => {
            getRestaurantsFromYelp()
    }, [city, activeTab])

  return (
    <SafeAreaProvider>
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
        <View style={{backgroundColor: 'white', padding: 15}}>
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
      <SearchBar cityHandler={setCity}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}> 
        <Categories/>
        <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
        </ScrollView>
        <Divider width={1}/>
        <BottomTabs/>
    </SafeAreaView>
    </SafeAreaProvider>
  )
}