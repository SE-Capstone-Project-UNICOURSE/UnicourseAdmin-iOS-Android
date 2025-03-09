import HeaderTitle from '@app/components/UI/HeaderTitle';
import { useAppDispatch } from '@app/store';
import { showDialog } from '@app/store/slices/dialog.slice';
import { MenuComponentRef, MenuView } from '@react-native-menu/menu';
import { MenuAction } from '@react-native-menu/menu/lib/typescript/src/types';
import { Card, Icon, Text, useTheme } from '@rneui/themed';
import React, { useRef } from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderHome from '../components/HeaderHome.ios';
import MetricCard from '../components/MetricCard.ios';

const HomeScreen = () => {
  const menuRef = useRef<MenuComponentRef>(null);
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  const configMenuButton: MenuAction[] = [
    {
      id: 'add',
      title: 'Add',
      titleColor: '#2367A2',
      image: Platform.select({
        ios: 'plus',
        android: 'ic_menu_add',
      }),
      imageColor: '#2367A2',
      subactions: [
        {
          id: 'nested1',
          title: 'Nested action',
          titleColor: 'rgba(250,180,100,0.5)',
          subtitle: 'State is mixed',
          image: Platform.select({
            ios: 'heart.fill',
            android: 'ic_menu_today',
          }),
          imageColor: 'rgba(100,200,250,0.3)',
          state: 'mixed',
        },
        {
          id: 'nestedDestructive',
          title: 'Destructive Action',
          attributes: {
            destructive: true,
          },
          image: Platform.select({
            ios: 'trash',
            android: 'ic_menu_delete',
          }),
        },
      ],
    },
    {
      id: 'share',
      title: 'Share Action',
      titleColor: '#46F289',
      subtitle: 'Share action on SNS',
      image: Platform.select({
        ios: 'square.and.arrow.up',
        android: 'ic_menu_share',
      }),
      imageColor: '#46F289',
      state: 'on',
    },
    {
      id: 'destructive',
      title: 'Destructive Action',
      attributes: {
        destructive: true,
      },
      image: Platform.select({
        ios: 'trash',
        android: 'ic_menu_delete',
      }),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderHome />
        <View style={styles.section}>
          <HeaderTitle
            title="My Business"
            optionAction={
              <MenuView
                ref={menuRef}
                title="Menu Title"
                onPressAction={({ nativeEvent }) => {
                  console.warn(JSON.stringify(nativeEvent));
                  dispatch(
                    showDialog({
                      title: 'Hi',
                      content: 'Hehe',
                    })
                  );
                }}
                actions={configMenuButton}
                shouldOpenOnLongPress={false}
              >
                <Icon
                  name="dots-horizontal"
                  type="material-community"
                  color={theme.colors.black}
                  size={20}
                />
              </MenuView>
            }
          />
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
          <HeaderTitle
            title="Analytics"
            optionAction={
              <Icon
                name="dots-horizontal"
                type="material-community"
                color={theme.colors.black}
                size={20}
              />
            }
          />
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
          <HeaderTitle
            title="Orders"
            optionAction={
              <Icon
                name="dots-horizontal"
                type="material-community"
                color={theme.colors.black}
                size={20}
              />
            }
          />
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
    paddingHorizontal: 12,
  },
  section: {
    marginBottom: 12,
  },
  darkCard: {
    backgroundColor: '#1C1C1E',
    borderRadius: 16,
    padding: 16,
    margin: 8,
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
    paddingHorizontal: 8,
    marginVertical: 10,
  },
  analyticsCard: {
    borderRadius: 16,
    padding: 24,
    margin: 0,
  },
  analyticsLabel: {
    fontSize: 16,
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
