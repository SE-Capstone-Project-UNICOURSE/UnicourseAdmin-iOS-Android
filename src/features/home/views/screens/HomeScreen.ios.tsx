import { HomeTabParams } from '@app/navigation/types/HomeTabParams.type';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Card, Icon, Text, useTheme } from '@rneui/themed';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderHome from '../components/HeaderHome';
import MetricCard from '../components/MetricCard';

const HomeScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<HomeTabParams>>();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderHome />

      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Business</Text>
          <Card containerStyle={styles.darkCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Chicken Cute</Text>
              <Icon name="dots-horizontal" type="material-community" color="white" size={20} />
            </View>
            <View style={styles.metricsGrid}>
              <View style={styles.metricRow}>
                <MetricCard title="Revenue" value="$44,320" percentage="0.2" isPositive={true} />
                <MetricCard title="Customers" value="$12,422" percentage="0.2" isPositive={true} />
              </View>
              <View style={styles.metricRow}>
                <MetricCard title="Profit" value="$32,320" percentage="0.2" isPositive={true} />
                <MetricCard title="Products" value="$7,220" percentage="0.2" isPositive={false} />
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  section: {
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingRight: 12,
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
  analyticsContainer: {
    paddingHorizontal: 16,
  },
  analyticsCard: {
    borderRadius: 16,
    padding: 16,
    margin: 0,
  },
  analyticsLabel: {
    fontSize: 14,
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
  positive: {
    color: '#4CAF50',
  },
});

export default HomeScreen;
