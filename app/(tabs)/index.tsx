import { StyleSheet, Text, View } from 'react-native'
import ScreenLayout from '../../components/layout/screen-layout'
import { StatisticCard } from '../../components/learn/statistic-card'
import { Link, useRouter } from 'expo-router';

const stats = {
  toLearn: {
    count: 0,
    label: "Изучать",
    color: "green",
    link: "/modal?card=toLearn"
  },
  known: {
    count: 0,
    label: "Знаю",
    color: "orange",
    link: "/modal?card=known"
  },
  learned: {
    count: 0,
    label: "Выучил",
    color: "red",
    link: "/modal?card=learned"
  },
}

const Learn = () => {
  const router = useRouter();

  return (
    <ScreenLayout noScrollableChildren={
      <View style={styles.cardContainer}>
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
    }>
      
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10
  },
})

export default Learn