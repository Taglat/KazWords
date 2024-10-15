import { StyleSheet, Text, View } from 'react-native'
import ScreenLayout from '../../components/layout/screen-layout'
import { StatisticCard } from '../../components/learn/statistic-card'

const stats = {
  toLearn: {
    count: 0,
    label: "Изучать",
    color: "green",
    onPress: () => console.log('Изучать')
  },
  known: {
    count: 0,
    label: "Знаю",
    color: "orange",
    onPress: () => console.log('Знаю')
  },
  learned: {
    count: 0,
    label: "Выучил",
    color: "red",
    onPress: () => console.log('Выучил')
  },
}

const Learn = () => {
  return (
    <ScreenLayout>
      <View style={styles.cardContainer}>
        <StatisticCard
          label={stats.toLearn.label}
          count={stats.toLearn.count}
          onPress={stats.toLearn.onPress}
          color={stats.toLearn.color} 
        />
        <StatisticCard
          label={stats.known.label}
          count={stats.known.count}
          onPress={stats.known.onPress}
          color={stats.known.color} 
        />
        <StatisticCard
          label={stats.learned.label}
          count={stats.learned.count}
          onPress={stats.learned.onPress}
          color={stats.learned.color} 
        />
      </View>
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