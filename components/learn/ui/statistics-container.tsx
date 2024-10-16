import { View, StyleSheet } from 'react-native';
import { StatisticCard } from './statistic-card';

export type Stat = {
  label: string;
  count: number;
  color: string;
  description: string;
};

interface StatisticsContainerProps {
  stats: {
    toLearn: Stat;
    known: Stat;
    learned: Stat;
  };
  onPressStat: (stat: Stat) => void;
}
const StatisticsContainer: React.FC<StatisticsContainerProps> = ({ stats, onPressStat }) => {
  return (
    <View style={styles.container}>
      <StatisticCard
        label={stats.toLearn.label}
        count={stats.toLearn.count}
        color={stats.toLearn.color}
        onPress={() => onPressStat(stats.toLearn)}
      />
      <StatisticCard
        label={stats.known.label}
        count={stats.known.count}
        color={stats.known.color}
        onPress={() => onPressStat(stats.known)}
      />
      <StatisticCard
        label={stats.learned.label}
        count={stats.learned.count}
        color={stats.learned.color}
        onPress={() => onPressStat(stats.learned)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
});

export default StatisticsContainer;
