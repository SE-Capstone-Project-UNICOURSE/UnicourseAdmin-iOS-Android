import { View, Text, StyleSheet } from 'react-native';
import React, { memo } from 'react';

type MetricCardProps = {
  title: string;
  value: string;
  percentage: string;
  isPositive: boolean;
};

const MetricCard = ({ isPositive, percentage, title, value }: MetricCardProps) => {
  return (
    <View style={styles.metricContainer}>
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
};

const styles = StyleSheet.create({
  metricContainer: {
    flex: 1,
  },
  metricLabel: {
    color: '#999',
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
});

export default memo(MetricCard);
