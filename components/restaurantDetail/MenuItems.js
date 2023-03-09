import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckBox from 'react-native-bouncy-checkbox';

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
        title: 'Fried Vietnamese Chicken',
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

const styles = StyleSheet.create({
    menuItemStyle : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleStyle : {
        fontSize: 20,
        fontWeight: '600',
    }
})

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {foods.map((food, index) => (
    <View key={index}>
    <View style={styles.menuItemStyle}>
        <BouncyCheckBox 
        iconStyle={{borderColor: 'black', borderRadius: 0}}
        fillColor="black"
        />
        <FoodInfo food={food}/>
        <FoodImage food={food}/>
    </View>
     <Divider width={0.5} orientation="vertical" style={{marginHorizontal: 20}}/>
    </View>
    
    ))}
    </ScrollView>
  )
}

const FoodInfo = (props) => (
    <View style={{width: 240, justifyContent: 'space-evenly'}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image 
        source={{uri: props.food.image}} 
        style={{
            width: 100, 
            height: 100, 
            borderRadius: 8,
            }}
            />
    </View>
)