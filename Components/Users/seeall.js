import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const CartScreen = () => {
    // Initial state with juice items and their quantities
    const [cartItems, setCartItems] = useState([
        { id: '1', name: 'GreenGrape Juice', image: require('../../assets/see2.jpeg'), quantity: 3, color: '#C7F9CC' },
        { id: '2', name: 'watermelon Juice', image: require('../../assets/see1.jpeg'), quantity: 2, color: '#FFADAD' },
        { id: '3', name: 'Mango Juice', image: require('../../assets/see3.jpg'), quantity: 5, color: '#FFD6A5' },
    ]);

    // Function to handle quantity changes
    const updateQuantity = (id, operation) => {
        const updatedItems = cartItems.map(item => {
            if (item.id === id) {
                if (operation === 'increment') {
                    return { ...item, quantity: item.quantity + 1 };
                } else if (operation === 'decrement' && item.quantity > 0) {
                    return { ...item, quantity: item.quantity - 1 };
                }
            }
            return item;
        });
        setCartItems(updatedItems);
    };

    // Render each cart item
    const renderItem = ({ item }) => (
        <View style={[styles.cartItem, { backgroundColor: item.color }]}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.itemName}>{item.name}</Text>
                {/* <Text style={styles.description}>Grapes contain potassium and fiber, regulate blood pressure and  heart function.</Text> */}
            </View>
            <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => updateQuantity(item.id, 'decrement')}>
                    {/* Text strings need to be wrapped in <Text> */}
                    <Text style={styles.button}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item.id, 'increment')}>
                    <Text style={styles.button}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Cart</Text>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff9900',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cartItem: {
        flexDirection: 'row',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 100,
        resizeMode: 'contain',
        marginRight: 15,
    },
    details: {
        flex: 1,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        fontSize: 20,
        paddingHorizontal: 10,
        color: '#333',
    },
    quantity: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
});

export default CartScreen;
