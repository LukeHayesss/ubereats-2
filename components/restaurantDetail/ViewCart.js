import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function ViewCart() {

  const [modalVisible, setModalVisible] = useState(false);

  const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);
  const total = items
        .map((item) => Number(item.price.replace('$', '')))
        .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD'
  });

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.7)', 
    },
    modalCheckoutContainer: {
      backgroundColor: 'white',
      padding: 16,
      height: 500,
      borderWidth: 1,
    },
    modalCheckoutButton: {
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 10,
    },
    subtotalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },
    subtotalText: {
      textAlign: 'left',
      fontWeight: '600',
      fontSize: 15,
      marginBottom: 10,
    }
  })

  const checkoutModalContent = () => {
     return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
      }}>
      <View style={{
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 30,
        width: 150,
        alignItems: 'center',
        }}>
       <TouchableOpacity onPress={() => setModalVisible(false)}>
        <Text style={{color: 'white'}}>Checkout</Text>
       </TouchableOpacity>
      </View>
    </View>
     )
  }

  return (
    <>
    <Modal 
      animationType='slide' 
      visible={modalVisible} 
      transparent={true} 
      onRequestClose={() => setModalVisible(false)}
    >
      {checkoutModalContent()}
    </Modal>

    {/* if total is present, show cart button */}
    {total ? (
    <View style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 180,
    zIndex: 999,
    }}
    >
    <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        width: "100%",
    }}
    >
        <TouchableOpacity style={{
            marginTop: 20, 
            backgroundColor: 'black',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            padding: 15,
            borderRadius: 30,
            width: 300,
            position: 'relative',
            }}
            onPress={() => setModalVisible(true)}
            >
      <Text style={{color: 'white', fontSize: 20, marginRight: 30}}>
        View Cart
      </Text>
      <Text style={{color: 'white', fontSize: 20}}>
        {totalUSD}
      </Text>
      </TouchableOpacity>
    </View>
    </View>
     ) : (
    <></>
    )}
  </>
  )
}