import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface StatisticCardProps {
  count: number;
  label: string;
  color: string;
  onPress: () => void;
}

export const StatisticCard:FC<StatisticCardProps> = ({ count, label, color, onPress }) => (
  <TouchableOpacity style={[styles.card, { borderColor: color }]} onPress={onPress}>
    <Text style={[styles.count, { color }]}>{count}</Text>
    <Text style={{ color }}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    marginHorizontal: 10,
  },
  count: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
