import { FC, PropsWithChildren } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const ScreenLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={[styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
});

export default ScreenLayout;