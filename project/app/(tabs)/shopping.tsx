import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Plus, Sparkles } from 'lucide-react-native';
import SearchBar from '@/components/SearchBar';
import ShoppingItem from '@/components/ShoppingItem';
import Button from '@/components/Button';
import { shoppingListItems, aiGeneratedItems } from '@/data/mockData';
import Colors from '@/constants/Colors';

export default function ShoppingScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState(shoppingListItems);
  const [activeTab, setActiveTab] = useState('myList');

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setItems(shoppingListItems);
    } else {
      const filtered = shoppingListItems.filter(item => 
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setItems(filtered);
    }
  };

  const handleToggleComplete = (id: string) => {
    const updatedItems = items.map(item => 
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setItems(updatedItems);
  };

  const handleDeleteItem = (id: string) => {
    Alert.alert(
      'Delete Item',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            const updatedItems = items.filter(item => item.id !== id);
            setItems(updatedItems);
          },
          style: 'destructive',
        },
      ]
    );
  };

  const handleAddItem = () => {
    Alert.alert('Add Item', 'Add a new item to your shopping list');
  };

  const handleGenerateList = () => {
    Alert.alert('AI-Generated List', 'Generating smart shopping list based on your pantry and preferences');
  };

  const handleSaveList = () => {
    Alert.alert('Save List', 'AI-generated list saved to your shopping list');
  };

  const renderMyListContent = () => (
    <>
      {items.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No items in your shopping list</Text>
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ShoppingItem
              item={item}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteItem}
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
      
      <View style={styles.buttonContainer}>
        <Button
          title="Add Item"
          onPress={handleAddItem}
          icon={<Plus size={20} color={Colors.white} />}
          style={styles.addButton}
        />
      </View>
    </>
  );

  const renderAIListContent = () => (
    <>
      <View style={styles.aiInfoContainer}>
        <Text style={styles.aiInfoText}>
          Our AI analyzes your pantry, preferences, and consumption patterns to suggest items you might need.
        </Text>
      </View>
      
      <FlatList
        data={aiGeneratedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.aiItemContainer}>
            <View style={styles.aiItemHeader}>
              <Text style={styles.aiItemName}>{item.name}</Text>
              <Text style={styles.aiItemQuantity}>{item.quantity}</Text>
            </View>
            <Text style={styles.aiItemReason}>Why: {item.reason}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
      
      <View style={styles.buttonContainer}>
        <Button
          title="Generate List"
          onPress={handleGenerateList}
          icon={<Sparkles size={20} color={Colors.white} />}
          style={[styles.aiButton, { marginRight: 8 }]}
        />
        <Button
          title="Save List"
          onPress={handleSaveList}
          variant="outline"
          style={[styles.aiButton, { marginLeft: 8 }]}
          textStyle={{ color: Colors.primary }}
        />
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search shopping list..."
        value={searchQuery}
        onChangeText={handleSearch}
        onClear={() => handleSearch('')}
      />
      
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'myList' && styles.activeTab
          ]}
          onPress={() => setActiveTab('myList')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'myList' && styles.activeTabText
          ]}>
            My List
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'aiList' && styles.activeTab
          ]}
          onPress={() => setActiveTab('aiList')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'aiList' && styles.activeTabText
          ]}>
            AI Suggestions
          </Text>
        </TouchableOpacity>
      </View>
      
      {activeTab === 'myList' ? renderMyListContent() : renderAIListContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: Colors.lightGray,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: Colors.white,
  },
  tabText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.darkGray,
  },
  activeTabText: {
    color: Colors.primary,
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
  },
  aiButton: {
    flex: 1,
  },
  aiInfoContainer: {
    backgroundColor: Colors.white,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
  },
  aiInfoText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.darkText,
    lineHeight: 20,
  },
  aiItemContainer: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  aiItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  aiItemName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.darkText,
  },
  aiItemQuantity: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.darkText,
  },
  aiItemReason: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.lightText,
    fontStyle: 'italic',
  },
});