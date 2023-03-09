import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
    {
        name: 'Benihana',
        image_url: 'https://cdn.oliverbonacininetwork.com/uploads/sites/42/2022/04/Canoe-Interior-Evening-Vibes-5170.jpg',
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: 'Andyhana',
        image_url: 'https://www.stratusrestaurant.com/Portals/Stratus/Images/homepage/small-slider/busy-restaurant.jpg',
        categories: ["German", "Bar"],
        price: "$$$$",
        reviews: 600,
        rating: 3.1,
    },
    {
        name: 'Lennyhana',
        image_url: 'https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/16:9/w_2560%2Cc_limit/Savage-2019-top-50-busy-restaurant.jpg',
        categories: ["Greek", "Bar"],
        price: "$",
        reviews: 714,
        rating: 3.9,
    },
    {
        name: 'Lukihana',
        image_url: 'https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg',
        categories: ["Dutch", "Bar"],
        price: "$$$",
        reviews: 1294,
        rating: 4.2,
    },
    {
        name: 'Lanahana',
        image_url: 'https://www.sportsnet.ca/wp-content/uploads/2023/02/NBA-Courtside-1.jpg',
        categories: ["Thai", "Bar"],
        price: "$$$$",
        reviews: 231,
        rating: 4.9,
    },
    {
        name: 'Willyhana',
        image_url: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg',
        categories: ["Fancy", "Bar"],
        price: "$$$$$",
        reviews: 124,
        rating: 4.3,
    },
]

export default function RestaurantItems({navigation, ...props}) {
  return (
    <>
   {props.restaurantData.map((restaurant, index) => (
    <TouchableOpacity 
    activeOpacity={1} 
    style={{marginBottom: 30}} 
    key={index}
    onPress={() => navigation.navigate('RestaurantDetail', {
        name: restaurant.name,
        image: restaurant.image_url,
        price: restaurant.price,
        reviews: restaurant.review_count,
        rating: restaurant.rating,
        categories: restaurant.categories,
    })}
    >
    <View 
    style={{marginTop: 10, padding: 15, backgroundColor: 'white'}}
    >
      <RestaurantImage 
      image={restaurant.image_url}
      />
      <RestaurantInfo 
      name={restaurant.name} 
      rating={restaurant.rating}
      />
    </View>
    </TouchableOpacity>
    ))}
    </>
  );
}
const RestaurantImage = (props) => (
    <>
    <Image source={{
        uri: props.image,
    }}
    style={{width: '100%', height: 180}}
    />
    <TouchableOpacity style={{position: "absolute", right: 20, top: 20}}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff"/>
    </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: 10,
        }}
        >
    <View>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>{props.name}</Text>
      <Text style={{fontSize: 13, color: 'grey'}}>30-45 | min</Text>
    </View>
    <View style={{
        backgroundColor: '#eee', 
        height: 30, 
        width: 30, 
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center'
        }}
        >
      <Text>{props.rating}</Text>
    </View>
    </View>
)