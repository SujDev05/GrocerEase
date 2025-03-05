import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Check, Trash2 } from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface ShoppingItemProps {
  item: {
    id: string;
    name: string;
    quantity: string;
    isCompleted: boolean;
  };
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function ShoppingItem({ item, onToggleComplete, onDelete }: ShoppingItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.checkbox, item.isCompleted && styles.checkboxChecked]} 
        onPress={() => onToggleComplete(item.id)}
      >
        {item.isCompleted && <Check size={16} color={Colors.white} />}
      </TouchableOpacity>
      <View style={styles.itemInfo}>
        <Text style={[
          styles.itemName, 
          item.isCompleted && styles.itemNameCompleted
        ]}>
          {item.name}
        </Text>
        <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
      </View>
      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={() => onDelete(item.id)}
      >
        <Trash2 size={20} color={Colors.error} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: Colors.primary,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.darkText,
    marginBottom: 4,
  },
  itemNameCompleted: {
    textDecorationLine: 'line-through',
    color: Colors.gray,
  },
  itemQuantity: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.lightText,
  },
  deleteButton: {
    padding: 8,
  },
});