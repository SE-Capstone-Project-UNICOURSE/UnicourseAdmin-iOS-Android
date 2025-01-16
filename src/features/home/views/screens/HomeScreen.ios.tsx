import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Avatar, Icon, Card, useTheme } from '@rneui/themed';

const HomeScreen = () => {
  const { theme } = useTheme();

  const renderMetricCard = (
    title: string,
    value: string,
    percentage: string,
    isPositive: boolean
  ) => (
    <View style={[styles.metricContainer]}>
      <Text style={styles.metricLabel}>{title}</Text>
      <View style={styles.metricValueContainer}>
        <Text style={styles.metricValue}>{value}</Text>
        <Text style={[styles.metricPercentage, { color: isPositive ? '#4CAF50' : '#FF3B30' }]}>
          {isPositive ? '+' : ''}
          {percentage}%
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Avatar
              size={40}
              rounded
              icon={{ name: 'user', type: 'font-awesome' }}
              containerStyle={styles.avatar}
            />
            <View>
              <Text style={styles.welcomeText}>Welcome back,</Text>
              <Text style={styles.nameText}>Arfi Ganteng</Text>
            </View>
          </View>
          <Icon
            name="bell-outline"
            type="material-community"
            size={24}
            color={theme.colors.black}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Business</Text>
          <Card containerStyle={styles.darkCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Chicken Cute</Text>
              <Icon name="dots-horizontal" type="material-community" color="white" size={20} />
            </View>
            <View style={styles.metricsGrid}>
              <View style={styles.metricRow}>
                {renderMetricCard('Revenue', '$44,320', '0.2', true)}
                {renderMetricCard('Customers', '12,422', '0.2', true)}
              </View>
              <View style={styles.metricRow}>
                {renderMetricCard('Profit', '$32,320', '0.2', true)}
                {renderMetricCard('Products', '$7,220', '0.2', false)}
              </View>
            </View>
          </Card>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Analytics</Text>
            <Icon
              name="dots-horizontal"
              type="material-community"
              color={theme.colors.black}
              size={20}
            />
          </View>
          <View style={styles.analyticsContainer}>
            <Card containerStyle={styles.analyticsCard}>
              <Text style={styles.analyticsLabel}>Revenues & Expenses</Text>
              <View style={styles.analyticsRow}>
                <View>
                  <Text style={styles.analyticsTitle}>Revenue</Text>
                  <View style={styles.analyticsMetric}>
                    <Text style={styles.analyticsValue}>$11,320</Text>
                    <Text style={[styles.analyticsPercentage, styles.positive]}>+0.2%</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.analyticsTitle}>Expenses</Text>
                  <View style={styles.analyticsMetric}>
                    <Text style={styles.analyticsValue}>$1,320</Text>
                    <Text style={[styles.analyticsPercentage, styles.positive]}>+0.4%</Text>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Orders</Text>
            <Icon
              name="dots-horizontal"
              type="material-community"
              color={theme.colors.black}
              size={20}
            />
          </View>
          <Card containerStyle={styles.ordersCard}>
            <View style={styles.ordersRow}>
              <View>
                <Text style={styles.ordersValue}>$13,320</Text>
                <Text style={[styles.ordersPercentage, styles.positive]}>+0.33%</Text>
              </View>
              <View>
                <Text style={styles.ordersValue}>$22,123</Text>
                <Text style={[styles.ordersPercentage, styles.positive]}>+0.22%</Text>
              </View>
            </View>
          </Card>
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
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#E1E1E1',
    marginRight: 12,
  },
  welcomeText: {
    fontSize: 14,
    color: '#666',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 16,
    marginBottom: 12,
  },
  darkCard: {
    backgroundColor: '#1C1C1E',
    borderRadius: 16,
    padding: 16,
    margin: 16,
    marginTop: 0,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  metricsGrid: {
    gap: 16,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  metricContainer: {
    flex: 1,
  },
  metricLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  metricValueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  metricValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  metricPercentage: {
    fontSize: 12,
  },
  analyticsContainer: {
    paddingHorizontal: 16,
  },
  analyticsCard: {
    borderRadius: 16,
    padding: 16,
    margin: 0,
  },
  analyticsLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 12,
  },
  analyticsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  analyticsTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  analyticsMetric: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  analyticsValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  analyticsPercentage: {
    fontSize: 12,
  },
  ordersCard: {
    borderRadius: 16,
    padding: 16,
    margin: 16,
    marginTop: 0,
  },
  ordersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ordersValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  ordersPercentage: {
    fontSize: 12,
  },
  positive: {
    color: '#4CAF50',
  },
});

export default HomeScreen;
