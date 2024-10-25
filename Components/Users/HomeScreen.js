import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // Icons for location, search, cart, user profile
import { useNavigation } from '@react-navigation/native';

const JuiceShopScreen = () => {
    const navigation = useNavigation(); // Get the navigation object using the hook

    // Updated categories for a juice shop with navigation screen references
    const categories = [
        { id: '1', name: 'Smoothies', icon: '🥤', screen: 'Bestseller' },
        { id: '2', name: 'Fruit Juices', icon: '🍹', screen: 'vege' },
        { id: '3', name: 'Shakes', icon: '🍧', screen: 'leaves' },
        { id: '4', name: 'Vegetable Juices', icon: '🍹', screen: 'new' },
    ];

    // Updated featured products for a juice shop
    const featuredProducts = [
        { id: '1', name: 'Berry Blast Smoothie', rating: 4.8, image: require('../../assets/f1.jpeg') },
        { id: '2', name: 'Tropical Juice', rating: 4.7, image: require('../../assets/f2.jpeg') },
        { id: '3', name: 'Mango Smoothie', rating: 4.7, image: require('../../assets/f3.jpeg') },
        { id: '4', name: 'Green Detox Juice', rating: 4.7, image: require('../../assets/f4.jpg') },
    ];

    const navigateToSeeAll = () => {
        navigation.navigate('See'); // Ensure the screen name is correct
    };

    // Function to handle category navigation
    const handleCategoryPress = (category) => {
        navigation.navigate(category.screen); // Navigate to the specific category screen
    };

    // Function to navigate to the user profile screen
    const navigateToUserProfile = () => {
        navigation.navigate('profile'); // Ensure the 'UserProfileScreen' exists in your navigation setup
    };

    return (
        <ScrollView style={styles.container}>
            {/* Location Bar */}
            <View style={styles.locationContainer}>
                <Ionicons name="location-outline" size={24} color="#fff" />
                <Text style={styles.locationText}>New York</Text>
                
                {/* Icons for Cart and User Profile */}
                <View style={styles.iconContainer}>
                    {/* <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="cart-outline" size={24} color="#141414" />
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={navigateToUserProfile} style={styles.iconButton}>
                        <Ionicons name="person-circle-outline" size={24} color="#141414" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="#999"
                    style={styles.searchInput}
                />
                <TouchableOpacity style={styles.filterButton}>
                    <Ionicons name="options-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Special Offers */}
            <View style={styles.specialOfferContainer}>
                <View style={styles.offerTextContainer}>
                    <Text style={styles.offerTitle}>Get Special Offer</Text>
                    <Text style={styles.offerSubtitle}>Up to 40% off</Text>
                </View>
                <Image
                    source={require('../../assets/fresh.jpg')}
                    style={styles.offerImage}
                    onError={() => console.log("Error loading image")}
                />
            </View>

            {/* Categories Section */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Categories</Text>
                <Text style={styles.sectionLink}>See All</Text>
            </View>
            <FlatList
                data={categories}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleCategoryPress(item)} style={styles.categoryItem}>
                        <Text style={styles.categoryIcon}>{item.icon}</Text>
                        <Text style={styles.categoryText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                showsHorizontalScrollIndicator={false}
            />

            {/* Featured Products */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Featured Products</Text>
                <TouchableOpacity onPress={navigateToSeeAll}>
                    <Text style={styles.sectionLink}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={featuredProducts}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.featuredProductItem}>
                        <Image source={item.image} style={styles.productImage} />
                        <Text style={styles.productName}>{item.name}</Text>
                        <View style={styles.productRating}>
                            <FontAwesome name="star" size={16} color="#f1c40f" />
                            <Text style={styles.ratingText}>{item.rating}</Text>
                        </View>
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f4f4',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#d2691e',
    },
    locationText: {
        color: '#fff',
        fontSize: 18,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        marginLeft: 10, // Space between cart and user icon
    },
    searchContainer: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: 'orange',
    },
    searchInput: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    filterButton: {
        marginLeft: 10,
        backgroundColor: '#d2691e',
        padding: 10,
        borderRadius: 10,
    },
    specialOfferContainer: {
        margin: 20,
        backgroundColor: '#d2691e',
        borderRadius: 10,
        overflow: 'hidden',
    },
    offerTextContainer: {
        padding: 20,
    },
    offerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    offerSubtitle: {
        fontSize: 16,
        color: '#555',
    },
    offerImage: {
        width: '100%',
        height: 150,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    sectionLink: {
        color: '#d2691e',
    },
    categoryItem: {
        backgroundColor: '#fff',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    categoryIcon: {
        fontSize: 30,
    },
    categoryText: {
        marginTop: 5,
        fontSize: 14,
    },
    featuredProductItem: {
        backgroundColor: '#fff',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    productName: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
    },
    productRating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    ratingText: {
        marginLeft: 5,
        fontSize: 14,
    },
});

export default JuiceShopScreen;
