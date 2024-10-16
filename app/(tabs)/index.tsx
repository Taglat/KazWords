import { StyleSheet } from 'react-native'
import ScreenLayout from '../../components/layout/screen-layout'
import StatisticsContainer from '../../components/learn/ui/statistics-container';

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
  return (
    <ScreenLayout noScrollableChildren={
      <StatisticsContainer stats={stats} />
    }>
      
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
})

export default Learn