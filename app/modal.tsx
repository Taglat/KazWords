import { useRouter, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Modal() {
  const router = useRouter();
  const { card } = useLocalSearchParams();

  const cardInfo = {
    toLearn: {
      title: "Изучать",
      description: "Карточки для изучения новых слов."
    },
    known: {
      title: "Знаю",
      description: "Карточки, которые вы уже знаете."
    },
    learned: {
      title: "Выучил",
      description: "Карточки, которые вы выучили."
    },
  };

  const currentCard = cardInfo[card as keyof typeof cardInfo] 
  || { title: "Неизвестная карточка", description: "Данные о карточке отсутствуют." };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{currentCard.title}</Text>
      <Text style={styles.desc}>{currentCard.description}</Text>
      <Button title="Закрыть" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  desc: {
    marginBottom: 20,
  }
});
