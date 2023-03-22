import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetail/About'
import { Divider } from 'react-native-elements'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

const foods = [
  {
      title: 'Crispy Pasta',
      description: 'Wheat that is made into pasta is cool, crispy, impressed',
      price: '$3.99',
      image: 'https://www.currytrail.in/wp-content/uploads/2018/12/Crispy-Pasta-Chips-4-500x500.jpg'
  },
  {
      title: 'Green Curry',
      description: 'Noodle things with green curry, green flavour, big energy',
      price: '$3.50',
      image: 'https://cdn.shopify.com/s/files/1/0493/3061/8524/articles/GJ16a1y2HDD3gYjmojg2t_1000x.jpg?v=1646021297'
  },
  {
      title: 'Vietnamese Chicken',
      description: 'Chicken things with flavour things, texture things, ooh fancy',
      price: '$23.99',
      image: 'https://assets.bonappetit.com/photos/57aded0a1b33404414975721/master/w_1280%2Cc_limit/vietnamese-fried-chicken-thighs-with-garlic-chile-glaze.jpg'
  },
  {
      title: 'Thai Mango Rice',
      description: 'Suck that juicy juicy mangoes with creamy rice',
      price: '$7.81',
      image: 'https://assets.epicurious.com/photos/62d6c5130fc696fea8e55a9c/4:3/w_3708,h_2781,c_limit/MangoStickyRice_RECIPE_04142022_9683_final.jpg'
  },
  {
      title: 'Lasagna',
      description: 'Pasta things with cheese and sauce and whoa',
      price: '$13.50',
      image: 'https://www.tastesoflizzyt.com/wp-content/uploads/2022/12/homemade-lasagna-recipe_-8.jpg'
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route}/>
      <Divider width={1.8} style={{marginVertical: 20}}/>
      <MenuItems restaurantName={route.params.name} foods={foods}/>
      <ViewCart navigation={navigation}/>
    </View>
  )
}