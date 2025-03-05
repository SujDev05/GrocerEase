import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Camera, Plus } from 'lucide-react-native';
import SearchBar from '@/components/SearchBar';
import FilterDropdown from '@/components/FilterDropdown';
import ProductItem from '@/components/ProductItem';
import Button from '@/components/Button';
import { pantryProducts, sortOptions } from '@/data/mockData';
import Colors from '@/constants/Colors';

export default function PantryScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('expiry_asc');
  const [products, setProducts] = useState(pantryProducts);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setProducts(pantryProducts);
    } else {
      const filtered = pantryProducts.filter(product => 
        product.name.toLowerCase().includes(text.toLowerCase())
      );
      setProducts(filtered);
    }
  };

  const handleSort = (option: string) => {
    setSortBy(option);
    let sortedProducts = [...products];
    
    switch (option) {
      case 'name_asc':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name_desc':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'expiry_asc':
        sortedProducts.sort((a, b) => new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime());
        break;
      case 'expiry_desc':
        sortedProducts.sort((a, b) => new Date(b.expiryDate).getTime() - new Date(a.expiryDate).getTime());
        break;
      case 'mfg_asc':
        sortedProducts.sort((a, b) => new Date(a.manufacturingDate).getTime() - new Date(b.manufacturingDate).getTime());
        break;
      case 'mfg_desc':
        sortedProducts.sort((a, b) => new Date(b.manufacturingDate).getTime() - new Date(a.manufacturingDate).getTime());
        break;
      default:
        break;
    }
    
    setProducts(sortedProducts);
  };

  const handleEditProduct = (id: string) => {
    Alert.alert('Edit Product', `Editing product with ID: ${id}`);
  };

  const handleDeleteProduct = (id: string) => {
    Alert.alert(
      'Delete Product',
      'Are you sure you want to delete this product?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            const updatedProducts = products.filter(product => product.id !== id);
            setProducts(updatedProducts);
          },
          style: 'destructive',
        },
      ]
    );
  };

  const handleAddProduct = () => {
    Alert.alert('Add Product', 'Add a new product to your pantry');
  };

  const handleScanProduct = () => {
    Alert.alert('Scan Product', 'Camera would open to scan product barcode');
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={handleSearch}
        onClear={() => handleSearch('')}
      />
      
      <FilterDropdown
        label="Sort by"
        options={sortOptions}
        selectedOption={sortBy}
        onSelect={handleSort}
      />
      
      {products.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No products found</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductItem
              product={item}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
      
      <View style={styles.buttonContainer}>
        <Button
          title="Add Product"
          onPress={handleAddProduct}
          icon={<Plus size={20} color={Colors.white} />}
          style={styles.addButton}
        />
        <Button
          title="Scan Product"
          onPress={handleScanProduct}
          variant="outline"
          icon={<Camera size={20} color={Colors.primary} />}
          style={styles.scanButton}
          textStyle={{ color: Colors.primary }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContent: {
    paddingTop: 8,
    paddingBottom: 100,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.gray,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
  },
  addButton: {
    flex: 1,
    marginRight: 8,
  },
  scanButton: {
    flex: 1,
    marginLeft: 8,
  },
});