import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const Order = ({ route, navigation }) => {
  const { cart } = route.params;
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneno, setPhoneno] = useState('');

  const handlePlaceOrder = () => {
    alert(`Order placed by ${name} for delivery at ${address}.`);
    navigation.navigate('Payment');
  };

  return (
    <ImageBackground
      source={require('../../assets/all.jpg')} // Replace with your actual image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Order Details</Text>
        <Text style={styles.dfns}>
          Your Order is delivered on appropriate time. Keep Shopping, Keep Growing! 
          Explore more Furniture in the Shop!
        </Text>
        <Text style={styles.subtitle}>Contact Information</Text>
        <Text style={styles.dfn}>Enter the Name :</Text>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <Text style={styles.dfn}>Enter the Address :</Text>
        <TextInput
          placeholder="Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
          style={styles.input}
        />
        <Text style={styles.dfn}>Enter the Phone number :</Text>
        <TextInput
          placeholder="Phone no"
          value={phoneno}
          onChangeText={(text) => setPhoneno(text)}
          style={styles.input}
        />
        <Button title="Place Order" onPress={handlePlaceOrder} />
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
  dfns: {
    paddingTop: 10,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  dfn: {
    paddingBottom: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    paddingBottom: 30,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default Order;