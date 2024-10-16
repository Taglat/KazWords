import { FC, PropsWithChildren, ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

interface ScreenLayoutProps {
  noScrollableChildren?: ReactNode;
}

const ScreenLayout: FC<PropsWithChildren<ScreenLayoutProps>> = ({ children, noScrollableChildren }) => {
  return (
    <View style={[styles.container]}>
      {noScrollableChildren}
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