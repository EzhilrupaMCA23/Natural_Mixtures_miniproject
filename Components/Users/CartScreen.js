import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useContext}  from 'react';
import { CartContext} from './cartContext';

const CartPage = ({ route }) => {
  const { cart, setCart } = useContext(CartContext); 
  const navigation = useNavigation();

  const handleRemoveItem = (itemId) => {
    console.log("Removing item with id:", itemId); // Debugging line
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
    console.log("Updated cart:", updatedCart); // Debugging line
  };

  const totalItemPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleBuyNow = () => {
    navigation.navigate('order', { cart });
  };

  const renderEmptyCart = () => (
    <View style={styles.emptyCartContainer}>
      <Text style={styles.emptyCartText}>Your cart is empty.</Text>
    </View>
  );

  return (
    <ImageBackground
      source={require('../../assets/nm5.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Cart</Text>
        {cart.length === 0 ? (
          renderEmptyCart()
        ) : (
          <FlatList
            data={cart}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Text style={styles.cartItemName}>{item.name}</Text>
                <Text style={styles.cartItemPrice}>Rs.{item.price.toFixed(2)}</Text>
                <TouchableOpacity
                  style={styles.removeItemButton}
                  onPress={() => handleRemoveItem(item.id)}
                >
                  <Text style={styles.removeItemButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
        <View style={styles.totalItemsContainer}>
          <Text style={styles.totalItemsText}>
            Total Items in Cart: {cart.length}
          </Text>
          <Text style={styles.totalPriceText}>
            Total Price: Rs.{totalItemPrice.toFixed(2)}
          </Text>
          <TouchableOpacity
            style={styles.buyNowButton}
            onPress={handleBuyNow}
          >
            <Text style={styles.buyNowButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
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
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 16,
  },
  removeItemButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 4,
  },
  removeItemButtonText: {
    color: 'white',
  },
  totalItemsContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  totalItemsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPriceText: {
    fontSize: 18,
  },
  buyNowButton: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 4,
    marginTop: 16,
  },
  buyNowButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  emptyCartContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartPage;
