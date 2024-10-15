import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Изучать",
        }}
      />
      <Tabs.Screen 
        name="sets"
        options={{
          title: "Наборы",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Профиль",
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;
