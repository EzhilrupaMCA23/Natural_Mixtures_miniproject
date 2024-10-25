import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, ImageBackground } from 'react-native';

const LogoScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../../assets/nm2.jpg')} 
        style={styles.backgroundImage}
      >
        <View style={styles.logoContainer}>
          {/* <Image source={require('../../assets/adaptive-icon.png')} style={styles.logo} /> */}
          <Text style={styles.title}>NATURAL MIXTURES</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.adminButton}
            onPress={() => navigation.navigate('AdminScreen')}
          >
            <Text style={styles.adminButtonText}>BlendBoss</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.userButton}
            onPress={() => navigation.navigate('SignUpScreen')}
          >
            <Text style={styles.userButtonText}>Consumer</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.socialMediaContainer}>
          <TouchableOpacity>
            <Image source={require('../../assets/img-5.jpeg')} style={styles.socialMediaIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/img-6.png')} style={styles.socialMediaIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/img-7.jpeg')} style={styles.socialMediaIcon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.copyrightText}>2025 Caf'e-7. All rights reserved.</Text> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  logoContainer: {
    marginBottom: 50, // Space between logo and buttons
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    borderRadius: 75, // Make the logo round
    resizeMode: 'cover', // Cover the entire logo area
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'orange',
    top:100, // Changed text color to white
  },
  buttonContainer: {
    width: '10ph',
    justifyContent: 'space-between',
    height: '10ph', // Space for buttons
    flexDirection: 'row',
    marginBottom: 20,
  },
  adminButton: {
    width: '40%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#ff9900',
    top:100, // Admin button color
    borderRadius:70
  },
  adminButtonText: {
    color: '#fff', // Text color for admin button
    fontSize: 20,
    fontWeight: 'bold',
  },
  userButton: {
    width: '40%',
    top:100,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#ff9900', // User button color
    borderRadius:70
  },
  userButtonText: {
    color: '#fff', // Text color for user button
    fontSize: 20,
    fontWeight: 'bold',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  socialMediaIcon: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  copyrightText: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
});

export default LogoScreen;