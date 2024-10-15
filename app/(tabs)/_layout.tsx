import { Tabs } from 'expo-router';
import SvgProfile from '../../assets/tabs-svg/svg-profile';
import SvgSets from '../../assets/tabs-svg/svg-sets';
import SvgLearn from '../../assets/tabs-svg/svg-learn';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Изучать",
          tabBarIcon: ({focused}) => (<SvgLearn
            focused={focused}
          />)
        }}
      />
      <Tabs.Screen 
        name="sets"
        options={{
          title: "Наборы",
          tabBarIcon: ({focused}) => (<SvgSets
            focused={focused}
          />)
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Профиль",
          tabBarIcon: ({focused}) => (<SvgProfile 
            focused={focused}
          />)
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;
