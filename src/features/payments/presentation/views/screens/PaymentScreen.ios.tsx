import useAppNavigation from '@app/navigation/hooks/useAppNavigation';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const PaymentScreen = () => {
  const { navigation } = useAppNavigation();
  const payments = [
    {
      title: 'Chicken Cure',
      products: '45',
      revenue: '$44,320',
      customers: '12,422',
      color: '#202020', // Black
    },
    {
      title: 'More Vapor',
      products: '199',
      revenue: '$123,320',
      customers: '89,212',
      color: '#5A55CA', // PurpleZxX
    },
    {
      title: 'More Vapo 123r',
      products: '199',
      revenue: '$123,320',
      customers: '89,212',
      color: '#4C95F3', // Light Blue
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <Text style={styles.header}>My Business</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          {payments.map((payment, index) => (
            <View key={index} style={[styles.card, { backgroundColor: payment.color }]}>
              <Text style={styles.title}>{payment.title}</Text>
              <View style={styles.row}>
                <View style={styles.column}>
                  <Text style={styles.label}>Products</Text>
                  <Text style={styles.value}>{payment.products}</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.label}>Revenue</Text>
                  <Text style={styles.value}>{payment.revenue}</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.label}>Customer</Text>
                  <Text style={styles.value}>{payment.customers}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF4D4D',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  addButtonText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 14,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: 'white',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default PaymentScreen;
