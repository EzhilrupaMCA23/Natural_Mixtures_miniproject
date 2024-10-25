import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { CartContext } from './cartContext';

export default function Profile() {
    const { userId } = useContext(CartContext);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true); // Track loading state

    const fetchUser = async () => {
        try {
            const response = await axios.get(`http://192.168.137.127:1503/user-details/${userId}`);
            setData(response.data.user);
            setLoading(false); // Stop loading when data is fetched
        } catch (error) {
            console.log(error);
            setLoading(false); // Stop loading if there's an error
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <ImageBackground 
            source={require('../../assets/veg2.jpeg')} // Set your background image here
            style={styles.backgroundImage}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.headerContainer}>
                    <Image
                        source={require('../../assets/veg.jpeg')} // You can replace with user's profile picture
                        style={styles.profileImage}
                    />
                    <Text style={styles.name}>{data?.name}</Text>
                    <Text style={styles.profession}>{data?.email}</Text>
                    <Text style={styles.location}>{data?.phoneNumber}</Text>

                    <View style={styles.statsContainer}>
                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>1220</Text>
                            <Text style={styles.statLabel}>Followers</Text>
                        </View>
                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>100</Text>
                            <Text style={styles.statLabel}>Following</Text>
                        </View>
                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>37.5K</Text>
                            <Text style={styles.statLabel}>Likes</Text>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Edit Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Add Friends</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.photosSection}>
                    <Text style={styles.sectionTitle}>Photos</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Image source={require('../../assets/veg2.jpeg')} style={styles.photo} />
                        <Image source={require('../../assets/pr2.jpeg')} style={styles.photo} />
                        <Image source={require('../../assets/pr1.jpeg')} style={styles.photo} />
                    </ScrollView>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // This will make the background cover the entire screen
    },
    container: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: 'rgba(245, 245, 245, 0.8)', // Optional: Add a slight background overlay to improve readability
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    profession: {
        fontSize: 16,
        color: '#888',
    },
    location: {
        fontSize: 14,
        color: '#777',
        marginBottom: 20,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    statBox: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    statLabel: {
        fontSize: 14,
        color: '#777',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#4A90E2',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    photosSection: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
});