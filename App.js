import React, { useState } from 'react';
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, StyleSheet, Switch, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  { id: '1', name: 'Groceries', rating: '4.7', time: '15-20 min', type: 'burger, dessert' },
  { id: '2', name: 'Groceries', rating: '4.7', time: '15-20 min', type: 'burger, dessert' },
  { id: '3', name: 'Groceries', rating: '4.7', time: '15-20 min', type: 'burger, dessert' },
];

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
  const themeStyles = {
    backgroundColor: isDarkTheme ? '#333' : '#fff',
    color: isDarkTheme ? '#fff' : '#000',
  };

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.backgroundColor }]}>
      <View style={styles.header}>
        <Ionicons name="location-outline" size={20} color={themeStyles.color} />
        <Text style={[styles.MapText, { color: themeStyles.color }]}>9185 Mayflower Drive Atlanta</Text>
        <View style={styles.themeSwitch}>
          <Text style={{ color: themeStyles.color, marginRight: 8 }}>Theme</Text>
          <Switch value={isDarkTheme} onValueChange={toggleTheme} />
        </View>
      </View>

      <ScrollView style={styles.scrollContent}>
        <Image
          source={{ uri: 'https://www.unileverfoodsolutions.com.mx/dam/global-ufs/mcos/NOLA/calcmenu/recipes/MX-recipes/general/sushi-empanizado/main-header.jpg' }}
          style={styles.mainImage}
        />

        <Section title="All Restaurants" themeStyles={themeStyles}>
          <FlatList
            horizontal
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <RestaurantCard item={item} themeStyles={themeStyles} />}
            showsHorizontalScrollIndicator={false}
          />
        </Section>

        <Section title="All Groceries" themeStyles={themeStyles}>
          <FlatList
            horizontal
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <GroceryCard item={item} themeStyles={themeStyles} />}
            showsHorizontalScrollIndicator={false}
          />
        </Section>

        <Section title="Specials" themeStyles={themeStyles}>
          <FlatList
            horizontal
            data={[{ id: '1' }, { id: '2' }]}
            keyExtractor={(item) => item.id}
            renderItem={() => <Specials title="winestory" themeStyles={themeStyles} />}
            showsHorizontalScrollIndicator={false}
          />
        </Section>
      </ScrollView>

      <View style={[styles.bottomNav, { borderColor: themeStyles.color }]}>
        <Ionicons name="home-outline" size={24} color={themeStyles.color} />
        <Ionicons name="search-outline" size={24} color={themeStyles.color} />
        <Ionicons name="bookmark-outline" size={24} color={themeStyles.color} />
        <Ionicons name="person-outline" size={24} color={themeStyles.color} />
      </View>
    </View>
  );
}

function Section({ title, children, themeStyles }) {
  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: themeStyles.color }]}>{title}</Text>
      <Text style={styles.Seeall}>See all</Text>
      {children}
    </View>
  );
}

function RestaurantCard({ item, themeStyles }) {
  return (
    <TouchableOpacity style={[styles.restaurantCard, { backgroundColor: themeStyles.backgroundColor }]}>
      <Image source={{ uri: 'https://olo-images-live.imgix.net/4c/4c565365175945b38a542e95a3645f34.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=3118c72e541b3bd01069f311e1825d50' }} style={styles.cardImage} />
      <Text style={[styles.cardTitle, { color: themeStyles.color }]}>{item.name}</Text>
      <Text style={[styles.cardSubtitle, { color: themeStyles.color }]}>{item.type}</Text>
      <Text style={[styles.cardRating, { color: themeStyles.color }]}>⭐ {item.rating}  {item.time}</Text>
    </TouchableOpacity>
  );
}

function GroceryCard({ item, themeStyles }) {
  return (
    <TouchableOpacity style={[styles.groceryCard, { backgroundColor: themeStyles.backgroundColor }]}>
      <Image source={{ uri: 'https://www.bhg.com/thmb/cX9GeFKdow2d4mNqEbMRTXjpoZQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/difference-between-fruits-vegetables-01-5f92e7ec706b463287bcfb46985698f9.jpg' }} style={styles.cardImage} />
      <Text style={[styles.cardTitle, { color: themeStyles.color }]}>{item.name}</Text>
      <Text style={[styles.cardRating, { color: themeStyles.color }]}>⭐ {item.rating}  {item.time}</Text>
    </TouchableOpacity>
  );
}

function Specials({ title }) {
  return (
    <ImageBackground 
      source={{ uri: 'https://mercatorwine.ca/img/Mercator_Summer_Evening.87ef0705.47499f5f.jpg' }}
      style={[styles.specialCard]}
      imageStyle={{ borderRadius: 8 }}
    >
      <View style={styles.specialOverlay}>
		<Text style= {{color:'white'}}>Grocery</Text>
        <Text style={[styles.specialTitle, { color: 'white' }]}>{title}</Text>
        <Text style={[styles.specialSubtitle, { color: 'white' }]}>Special Offer</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16, 
    marginTop: 20
  },
  MapText: {
    fontSize: 16
  },
  themeSwitch:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  scrollContent: {
    flex: 1,
  },
  mainImage: { 
    width: '100%', 
    height: 200, 
    resizeMode: 'cover', 
    borderRadius: 8, 
    marginBottom: 16 
  },
  section: { 
    paddingHorizontal: 16, 
    paddingVertical: 8 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 8 
  },
  Seeall: { 
    position: 'absolute', 
    right: 16, 
    top: 8, 
    fontSize: 14, 
    color: '#007aff' 
  },
  restaurantCard: { 
    marginRight: 16, 
    width: 170, 
    borderRadius: 8, 
    padding: 8 
  },
  groceryCard: { 
    marginRight: 16, 
    width: 120, 
    borderRadius: 8, 
    padding: 8 
  },
  cardImage: { 
    width: '100%', 
    height: 120, 
    borderRadius: 8 
  },
  cardTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginTop: 4 
  },
  cardSubtitle: {
    fontSize: 12 
  },
  cardRating: {
    fontSize: 12, 
    marginTop: 2 
  },
  specialCard: { 
    width: 250, 
    height: 150, 
    borderRadius: 8, 
    marginRight: 16, 
    overflow: 'hidden' 
  },
  specialOverlay: { 
    flex: 1, 
    justifyContent: 'left', 
    alignItems: 'left', 
    backgroundColor: 'rgba(0, 0, 0, 0.25)', // Overlay para oscurecer la imagen de fondo
    padding: 10 
  },
  specialTitle: { 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  specialSubtitle: { 
    fontSize: 13,
    fontWeight: 'bold', 
    marginTop: 4 
  },
  bottomNav: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    paddingVertical: 16, 
    borderTopWidth: 1, 
    borderColor: '#ddd' 
  },
});