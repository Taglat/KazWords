import { Button, StyleSheet } from 'react-native'
import ScreenLayout from '../../components/layout/screen-layout'
import StatisticsContainer, {Stat} from '../../components/learn/ui/statistics-container';
import { useState } from 'react';
import MyModal from '../../components/layout/modal';

const stats: {
  toLearn: Stat;
  known: Stat;
  learned: Stat;
} = {
  toLearn: {
    count: 0,
    label: "Изучать",
    color: "green",
    description: "Карточки для изучения новых слов. Вы можете начинать с них, чтобы узнать новые слова.",
  },
  known: {
    count: 0,
    label: "Знаю",
    color: "orange",
    description: "Карточки, которые вы уже знаете. Они закреплены в вашей памяти.",
  },
  learned: {
    count: 0,
    label: "Выучил",
    color: "red",
    description: "Карточки, которые вы выучили. Эти слова уже освоены.",
  },
};

const Learn = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState({ title: '', description: '' });

  const openModal = (stat: Stat) => {
    setCurrentStat({
      title: stat.label,
      description: stat.description,
    });
    setModalVisible(true);
  };

  const closeModal = () => setModalVisible(false);

  return (
    <ScreenLayout noScrollableChildren={
      <StatisticsContainer stats={stats} onPressStat={openModal} />
    }>
      <MyModal
        isVisible={isModalVisible}
        title={currentStat.title}
        description={currentStat.description}
        onClose={closeModal}
      >
      </MyModal>
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
})

export default Learn