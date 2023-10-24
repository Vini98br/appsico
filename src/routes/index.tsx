import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import { Ionicons } from "@expo/vector-icons";
import SignInScreen from "../screens/SignIn";
import SignUpScreen from "../screens/SignUp";
import SignUpStep1 from "../screens/SignUpStep1";
import SignUpStep2 from "../screens/SignUpStep2";
import { Button, View, Text } from "tamagui";
import PatientsScreen from "../screens/Patients";
import PatientScreen from "../screens/Patient";
import ActivityScreen from "../screens/Activity";

const SignUpStack = createNativeStackNavigator();
const SignUpStackScreen = () => {
  return (
    <SignUpStack.Navigator>
      <SignUpStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <SignUpStack.Screen
        name="SignUpStep1"
        component={SignUpStep1}
        options={{
          headerShown: true,
          headerBackVisible: false,
          animation: "none",
        }}
      />
      <SignUpStack.Screen
        name="SignUpStep2"
        component={SignUpStep2}
        options={{ headerShown: true, animation: "none" }}
      />
    </SignUpStack.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

function AddPatientModal({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} children="Dismiss" />
    </View>
  );
}

const PatientsStack = createNativeStackNavigator();
const PatientsStackScreen = ({ navigation }: any) => {
  return (
    <PatientsStack.Navigator screenOptions={{ headerShown: true }}>
      <PatientsStack.Group>
        <PatientsStack.Screen
          name="Patients"
          component={PatientsScreen}
          options={{
            headerTitle: "Seus Pacientes",
            headerRight: () => (
              <Ionicons
                onPress={() => navigation.navigate("AddPatientModal")}
                name={"add"}
                size={25}
              />
            ),
          }}
        />
        <PatientsStack.Screen
          name="Patient"
          component={PatientScreen}
          options={({ route }) => ({
            headerTitle: (route.params as any).name!,
          })}
        />
        <PatientsStack.Screen
          name="Activity"
          component={ActivityScreen}
          options={({ route }) => ({
            headerTitle: (route.params as any).name!,
            headerRight: () => <Ionicons name={"pencil"} size={25} />,
          })}
        />
      </PatientsStack.Group>
      <PatientsStack.Group screenOptions={{ presentation: "modal" }}>
        <PatientsStack.Screen
          name="AddPatientModal"
          component={AddPatientModal}
        />
      </PatientsStack.Group>
    </PatientsStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const LoggedArea = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen
        name="Patients"
        component={PatientsStackScreen}
        options={{ title: "Pacientes" }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

const LoginStack = createNativeStackNavigator();
export const LoginStackScreen = () => {
  return (
    <NavigationContainer>
      <LoginStack.Navigator screenOptions={{ headerShown: false }}>
        <LoginStack.Screen name="SignIn" component={SignInScreen} />
        <LoginStack.Screen name="SignUp" component={SignUpStackScreen} />
        <LoginStack.Screen name="LoggedArea" component={LoggedArea} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};
