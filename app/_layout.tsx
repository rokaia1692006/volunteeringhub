import { Stack } from "expo-router";
import DrawerNavigator from "./components/drawer_nav";

export default function RootLayout() {
  return (
    <DrawerNavigator 
      username="hhhh" 
      userIcon={require("../assets/images/avatar.jpg")} 
    />
  );
}
