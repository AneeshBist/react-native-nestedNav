import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PeopleDetails from "../screens/people/PeopleDetails";
import People from "../screens/people/People";
import Area from "../screens/area/Area";
import AreaDetails from "../screens/area/AreaDetails";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const PeopleStack = createNativeStackNavigator();
const AreaStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const PeopleNavigator = () => {
    return (
      <PeopleStack.Navigator initialRoute="People">
        <PeopleStack.Screen name="People" component={People} />
        <PeopleStack.Screen name="People Details" component={PeopleDetails} />
      </PeopleStack.Navigator>
    );
  };

  const AreaNavigator = () => {
    return (
      <AreaStack.Navigator initialRoute="Area">
        <AreaStack.Screen name="Area" component={Area} />
        <AreaStack.Screen name="Area Details" component={AreaDetails} />
      </AreaStack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"People Page"}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;

            if (route.name === "People Page") {
              iconName = "ios-people";
            } else if (route.name === "Area Page") {
              iconName = focused ? "md-earth-sharp" : "md-earth-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="People Page" component={PeopleNavigator} />
        <Tab.Screen name="Area Page" component={AreaNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
