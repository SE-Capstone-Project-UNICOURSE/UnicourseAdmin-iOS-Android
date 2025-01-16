import { Button, ButtonGroup, Icon, ListItem, Text } from '@rneui/themed';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { SafeAreaView } from 'react-native-safe-area-context';

const InsightScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [timeRange, setTimeRange] = useState(0);

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(66, 133, 244, ${opacity})`, // Blue bars
      },
      {
        data: [15, 35, 20, 60, 78, 38],
        color: (opacity = 1) => `rgba(234, 67, 53, ${opacity})`, // Red bars
      },
    ],
  };

  const orders = [
    {
      id: 'CC-0032',
      status: 'In Progress',
      amount: 123.0,
      date: 'Aug 23, 2023',
      time: '10:23 AM',
    },
    {
      id: 'CC-0031',
      status: 'Completed',
      amount: 99.32,
      date: 'Aug 23, 2023',
      time: '10:00 AM',
    },
    {
      id: 'CC-0030',
      status: 'Completed',
      amount: 54.0,
      date: 'Aug 23, 2023',
      time: '09:45 AM',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>Business Analytic</Text>
          <Button
            type="clear"
            icon={{
              name: 'chevron-down',
              type: 'material-community',
              size: 20,
              color: '#000',
            }}
            titleStyle={styles.dropdownText}
            buttonStyle={styles.dropdownButton}
          />
        </View>
        <Icon name="dots-horizontal" type="material-community" size={24} />
      </View>

      <ScrollView>
        <View style={styles.chartSection}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Overview</Text>
            <ButtonGroup
              buttons={['This month', '6 months', '1 year']}
              selectedIndex={timeRange}
              onPress={setTimeRange}
              containerStyle={styles.timeRangeContainer}
              selectedButtonStyle={styles.selectedTimeRange}
              buttonStyle={styles.timeRangeButton}
              textStyle={styles.timeRangeText}
              selectedTextStyle={styles.selectedTimeRangeText}
            />
          </View>

          <BarChart
            data={chartData}
            width={Dimensions.get('window').width - 32}
            height={220}
            yAxisLabel="$"
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(66, 133, 244, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              barPercentage: 0.5,
              propsForBackgroundLines: {
                strokeWidth: 1,
                stroke: '#e3e3e3',
              },
            }}
            showBarTops={false}
            fromZero
            withInnerLines={true}
          />
        </View>

        <View style={styles.ordersSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Orders</Text>
            <Icon name="dots-horizontal" type="material-community" size={24} />
          </View>

          {orders.map((order, index) => (
            <ListItem
              key={order.id}
              containerStyle={styles.orderItem}
              bottomDivider={index !== orders.length - 1}
            >
              <ListItem.Content>
                <View style={{ width: '100%' }}>
                  <View style={styles.orderHeader}>
                    <Text style={styles.orderId}>{order.id}</Text>
                    <Text
                      style={[
                        styles.orderStatus,
                        { color: order.status === 'Completed' ? '#4CAF50' : '#FF9800' },
                      ]}
                    >
                      {order.status}
                    </Text>
                  </View>
                  <View style={styles.orderDetails}>
                    <Text style={styles.orderAmount}>${order.amount.toFixed(2)}</Text>
                    <Text style={styles.orderTime}>{order.time}</Text>
                  </View>
                </View>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  dropdownButton: {
    padding: 0,
    marginLeft: 4,
  },
  dropdownText: {
    color: '#000',
    fontSize: 16,
  },
  chartSection: {
    padding: 16,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  timeRangeContainer: {
    height: 32,
    borderRadius: 16,
    borderWidth: 0,
    backgroundColor: '#F5F5F5',
  },
  timeRangeButton: {
    backgroundColor: '#F5F5F5',
  },
  selectedTimeRange: {
    backgroundColor: '#4285F4',
  },
  timeRangeText: {
    fontSize: 12,
    color: '#666',
  },
  selectedTimeRangeText: {
    color: '#fff',
  },
  ordersSection: {
    paddingTop: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  orderItem: {
    paddingVertical: 16,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderId: {
    fontSize: 16,
    fontWeight: '600',
  },
  orderStatus: {
    fontSize: 14,
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderAmount: {
    fontSize: 16,
    fontWeight: '500',
  },
  orderTime: {
    fontSize: 14,
    color: '#666',
  },
});

export default InsightScreen;
