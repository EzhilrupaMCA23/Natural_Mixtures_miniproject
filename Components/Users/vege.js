import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import {useContext}  from 'react';
import { CartContext} from './cartContext';

const ModelPage = ({ navigation }) => {
  const {cart , setCart} = useContext(CartContext)
  const [modelItems, setModelItems] = useState([
    { id: '1', name: 'WaterMelon', price: 150, image: require('../../assets/f1.jpeg') },
    { id: '2', name: 'Orange', price: 200, image: require('../../assets/f4.jpg') },
    { id: '3', name: 'Lemon', price: 100, image: require('../../assets/f3.jpeg') },
    { id: '4', name: 'Mango', price: 130, image: require('../../assets/f2.jpeg') },
    { id: '5', name: 'Dragon', price: 200, image: require('../../assets/f5.jpg') },
    { id: '6', name: 'GreenGrape', price: 120, image: require('../../assets/f6.jpg') },
    { id: '7', name: 'BlackGrape', price: 130, image: require('../../assets/f7.jpg') },
  ]);

  

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <ImageBackground
      source={require('../../assets/img-17.jpeg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Juices</Text>
        <ScrollView>
          {modelItems.map((item) => (
            <View key={item.id} style={styles.modelItem}>
              <Image source={item.image} style={styles.modelItemImage} />
              <Text style={styles.modelItemName}>{item.name}</Text>
              <Text style={styles.modelItemPrice}>Rs.{item.price.toFixed(2)}</Text>
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => addToCart(item)}
              >
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity
          style={styles.viewCartButton}
          onPress={() => navigation.navigate('CartScreen', { cart, setCart })}
        >
          <Text style={styles.viewCartButtonText}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ff9900',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modelItem: {
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2,
    padding: 16,
  },
  modelItemImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  modelItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  modelItemPrice: {
    fontSize: 16,
  },
  addToCartButton: {
    backgroundColor: '#ff9900',
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  addToCartButtonText: {
    color: 'white',
  },
  viewCartButton: {
    backgroundColor: '#d2691e',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  viewCartButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ModelPage;
