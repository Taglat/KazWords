import { View, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { StatisticCard } from './statistic-card';

type Stat = {
  label: string;
  count: number;
  color: string;
  link: string;
};

interface StatisticsContainerProps {
  stats: {
    toLearn: Stat;
    known: Stat;
    learned: Stat;
  };
}

const StatisticsContainer: React.FC<StatisticsContainerProps> = ({ stats }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Link href={stats.toLearn.link}>
        <StatisticCard
          label={stats.toLearn.label}
          count={stats.toLearn.count}
          color={stats.toLearn.color}
          onPress={() => router.push(stats.toLearn.link)}
        />
      </Link>
      <Link href={stats.known.link}>
        <StatisticCard
          label={stats.known.label}
          count={stats.known.count}
          color={stats.known.color}
          onPress={() => router.push(stats.known.link)}
        />
      </Link>
      <Link href={stats.learned.link}>
        <StatisticCard
          label={stats.learned.label}
          count={stats.learned.count}
          color={stats.learned.color}
          onPress={() => router.push(stats.learned.link)}
        />
      </Link>
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
