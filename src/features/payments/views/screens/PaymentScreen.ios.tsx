import { Card, ListItem } from '@rneui/base';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PaymentScreen = () => {
  const payments = [
    {
      title: 'Children Care',
      products: '45',
      revenue: '$44,320',
      customers: '12,422',
    },
    {
      title: 'More Vapor',
      products: '199',
      revenue: '$123,320',
      customers: '89,212',
    },
  ];

  return (
    <SafeAreaView>
      <View>
        {payments.map((payment, index) => (
          <Card key={index} containerStyle={{ borderRadius: 20, marginBottom: 20 }}>
            <Card.Title>{payment.title}</Card.Title>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>Products</ListItem.Title>
                <ListItem.Subtitle>{payment.products}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title>Revenue</ListItem.Title>
                <ListItem.Subtitle>{payment.revenue}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title>Customers</ListItem.Title>
                <ListItem.Subtitle>{payment.customers}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </Card>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;
