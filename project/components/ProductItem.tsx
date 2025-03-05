import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CreditCard as Edit2, Trash2 } from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface ProductItemProps {
  product: {
    id: string;
    name: string;
    quantity: string;
    manufacturingDate: string;
    expiryDate: string;
  };
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function ProductItem({ product, onEdit, onDelete }: ProductItemProps) {
  // Calculate days until expiry
  const today = new Date();
  const expiryDate = new Date(product.expiryDate);
  const daysUntilExpiry = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  const getExpiryStatusColor = () => {
    if (daysUntilExpiry < 0) return Colors.error;
    if (daysUntilExpiry < 7) return Colors.warning;
    return Colors.success;
  };

  const getExpiryStatusText = () => {
    if (daysUntilExpiry < 0) return 'Expired';
    if (daysUntilExpiry === 0) return 'Expires today';
    if (daysUntilExpiry === 1) return 'Expires tomorrow';
    return `Expires in ${daysUntilExpiry} days`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productQuantity}>Quantity: {product.quantity}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>Mfg: {product.manufacturingDate}</Text>
          <Text style={[styles.expiryText, { color: getExpiryStatusColor() }]}>
            {getExpiryStatusText()}
          </Text>
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity 
          style={[styles.actionButton, styles.editButton]} 
          onPress={() => onEdit(product.id)}
        >
          <Edit2 size={16} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.actionButton, styles.deleteButton]} 
          onPress={() => onDelete(product.id)}
        >
          <Trash2 size={16} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
  productInfo: {
    flex: 1,
  },
  productName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: Colors.darkText,
    marginBottom: 4,
  },
  productQuantity: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.darkText,
    marginBottom: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Colors.lightText,
  },
  expiryText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
  },
  actions: {
    justifyContent: 'space-between',
    marginLeft: 16,
  },
  actionButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  editButton: {
    backgroundColor: Colors.info,
  },
  deleteButton: {
    backgroundColor: Colors.error,
  },
});