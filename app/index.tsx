import { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View, ScrollView } from "react-native";
import Grids from "@/app/components/grid";
import Header from "./components/header";
import { DrawerActions, useNavigation } from "@react-navigation/native";

interface Item {
  id: string;
  title: string;
  image: any;
  location: string;
}

const DATA: Item[] = [
  { id: "1", title: "To think of", image: require('../assets/images/ToThinkOf.png'), location: "/screens/think" },
  { id: "2", title: "Booking a volunteering", image: require('../assets/images/BookingAVolunteering.png'), location: "/screens/booking" },
  { id: "3", title: "Checking progress", image: require('../assets/images/Progress.png'), location: "/screens/progress" },
  { id: "4", title: "More about us / contacts", image: require('../assets/images/MoreAboutUsOrContact.png'), location: "/screens/more" },
];

export default function Index() {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUser = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser({ name: "John Doe" });
    };
    fetchUser();
  }, []);

  const username = user ? user.name : "";

  return (
    <ScrollView>
      <Header username={username} userIcon={null} toggleDrawer={() => navigation.dispatch(DrawerActions.openDrawer())} />
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/MainPage.jpg')} style={styles.head}>
          <Text style={styles.headText}>verde</Text>
        </ImageBackground>
        <Text style={styles.undertext}>volunteers</Text>
      </View>
      <View style={styles.gridcont}>
        <Grids DATA={DATA} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  head: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  headText: {
    marginBottom: 20,
    fontSize: 64,
    fontWeight: "bold",
    color: "#F5F5F5",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    textTransform: "uppercase",
  },
  undertext: {
    marginTop: -50,
    fontStyle: "italic",
    fontSize: 50,
    color: "black",
  },
  gridcont: {
    flex: 2,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});
