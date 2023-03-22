import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import firebase from '../firebase';
import MenuItems from '../components/restaurantDetail/MenuItems';
import { ScrollView } from 'react-native-gesture-handler';

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
     items: [
        {
            title: "Lasagna",
            description: "Pasta things with cheese and sauce and whoa",
            price: "13.44",
            image: "https://www.tastesoflizzyt.com/wp-content/uploads/2022/12/homemade-lasagna-recipe_-8.jpg"
        }
     ]
  })

  const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);
  const total = items
        .map((item) => Number(item.price.replace('$', '')))
        .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD'
  });

useEffect(() => {
   const db = firebase.firestore();
   const unsubscribe = db.collection('orders')
   .orderBy('createdAt', 'desc')
   .limit(1).onSnapshot((snapshot) => {
    snapshot.docs.map((doc) => {
        setLastOrder(doc.data())
    })
   })
   return () => unsubscribe()
}, [])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        {/* green check */}
        <View style={{
            margin: 15,
            alignItems: 'center',
            height: "100%",
        }}>
        <LottieView 
        style={{height: 100, alignSelf: 'center', marginBottom: 30}}
        source={require("../assets/animations/animations/check-mark.json")}
        autoPlay
        speed={0.5}
        loop={false}
        />
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Your order at {restaurantName} has been placed for {totalUSD}
      </Text>
      <ScrollView>
       <MenuItems foods={lastOrder.items} hideCheckbox={true} marginLeft={10}/>
        <LottieView 
        style={{height: 200, alignSelf: 'center'}}
        source={require("../assets/animations/animations/cooking.json")}
        autoPlay
        speed={0.5}
        />
        </ScrollView>
        </View>
    </SafeAreaView>
  )
}