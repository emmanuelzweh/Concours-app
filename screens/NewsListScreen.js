 // NewsListScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';

const newsArticles = [
  { id: 1, title: 'News 1', content: 'Short content of News 1'},
  { id: 2, title: 'News 2', content: 'Short content of News 2' },
  // Add more news articles
];
// image: require('./news_image_2.png')

const NewsListScreen = ({ navigation }) => {
  const renderNewsItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('NewsDetails', { article: item })}>
      <View style={styles.newsItem}>
        {/* <Image source={item.image} style={styles.newsImage} /> */}
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsContent}>{item.content}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={newsArticles}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  newsItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  newsImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  newsContent: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default NewsListScreen;
