import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function DetailsScreen({ route }) {
  // Extract parameters from the route
  const { category, item, price, image } = route.params;

  // Determine content based on the category or item
  let content = '';
  let imageSource = null;

  if (category) {
    // Category-based content
    switch (category) {
      case 'Bestseller':
        content = 'Here are the top-selling items.';
        imageSource = require('../../assets/img-11.jpeg');
        break;
      case 'Drinks':
        content = 'Explore our selection of beverages.';
        imageSource = require('../../assets/img-12.jpeg');
        break;
      case 'Food':
        content = 'Discover our food offerings.';
        imageSource = require('../../assets/img-13.jpeg');
        break;
      case 'Merchandise':
        content = 'Check out our branded merchandise.';
        imageSource = require('../../assets/img15.jpg');
        break;
      case 'Coffee At Home':
        content = 'Find the best coffee for home brewing.';
        imageSource = require('../../assets/img-16.jpeg');
        break;
      case 'Ready to Eat':
        content = 'Ready-to-eat meals for your convenience.';
        imageSource = require('../../assets/images.jpeg');
        break;
      default:
        content = 'Explore our diverse range of products.';
        imageSource = require('../../assets/images.jpeg'); // Default image
        break;
    }
  } else if (item) {
    // Item-based content
    content = `Details about ${item}.\nPrice: ${price}`;
    imageSource = image;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        {item ? `Details for ${item}` : `Details for ${category}`}
      </Text>
      
      <View style={styles.content}>
        {imageSource && <Image style={styles.image} source={imageSource} />}
        <Text style={styles.description}>
          {content}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
