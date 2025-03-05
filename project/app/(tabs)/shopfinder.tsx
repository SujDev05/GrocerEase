import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, Alert } from 'react-native';
import { MapPin } from 'lucide-react-native';
import SearchBar from '@/components/SearchBar';
import ShopCard from '@/components/ShopCard';
import { shops } from '@/data/mockData';
import Colors from '@/constants/Colors';

export default function ShopFinderScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredShops, setFilteredShops] = useState(shops);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setFilteredShops(shops);
    } else {
      const filtered = shops.filter(shop => 
        shop.name.toLowerCase().includes(text.toLowerCase()) ||
        shop.address.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredShops(filtered);
    }
  };

  const handleShopPress = (id: string) => {
    Alert.alert('Shop Details', `Viewing details for shop ID: ${id}`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SearchBar
        placeholder="Search shops or addresses..."
        value={searchQuery}
        onChangeText={handleSearch}
        onClear={() => handleSearch('')}
      />
      
      <View style={styles.mapContainer}>
        <Text style={styles.sectionTitle}>Stores Near You</Text>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80' }}
          style={styles.mapImage}
          resizeMode="cover"
        />
        <View style={styles.mapPinContainer}>
          <MapPin size={24} color={Colors.primary} fill={Colors.primary} />
          <Text style={styles.currentLocationText}>Your Location</Text>
        </View>
      </View>
      
      <Text style={[styles.sectionTitle, { marginLeft: 16, marginTop: 24 }]}>Top Shops</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScrollContent}
      >
        {shops.slice(0, 3).map(shop => (
          <ShopCard 
            key={shop.id} 
            shop={shop} 
            onPress={handleShopPress}
            horizontal
          />
        ))}
      </ScrollView>
      
      <Text style={[styles.sectionTitle, { marginLeft: 16, marginTop: 24 }]}>All Nearby Shops</Text>
      <View style={styles.allShopsContainer}>
        {filteredShops.map(shop => (
          <ShopCard 
            key={shop.id} 
            shop={shop} 
            onPress={handleShopPress}
          />
        ))}
      </View>
      
      <View style={styles.recommendationsContainer}>
        <Text style={styles.sectionTitle}>Recommendations</Text>
        <View style={styles.recommendationItem}>
          <Text style={styles.recommendationTitle}>Best for Organic Produce</Text>
          <Text style={styles.recommendationShop}>Whole Foods Market</Text>
        </View>
        <View style={styles.recommendationItem}>
          <Text style={styles.recommendationTitle}>Best Value for Money</Text>
          <Text style={styles.recommendationShop}>Trader Joe's</Text>
        </View>
        <View style={styles.recommendationItem}>
          <Text style={styles.recommendationTitle}>Best for Fresh Local Produce</Text>
          <Text style={styles.recommendationShop}>Farmers Market</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  mapContainer: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.darkText,
    marginBottom: 12,
  },
  mapImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  mapPinContainer: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  currentLocationText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.darkText,
    marginLeft: 8,
  },
  horizontalScrollContent: {
    paddingHorizontal: 16,
  },
  allShopsContainer: {
    paddingHorizontal: 16,
  },
  recommendationsContainer: {
    margin: 16,
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  recommendationItem: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  recommendationTitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.lightText,
    marginBottom: 4,
  },
  recommendationShop: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.darkText,
  },
});