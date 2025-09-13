import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Grids from "@/components/grid";
import { ScrollView } from "react-native";
//wthhhhh
interface Item {
  id: string;
  title: string;
  image : any;
  location: string;
}
const DATA: Item[] = [
  { id: "1", title: "To think of" , image: require('../assets/images/ToThinkOf.png'), location: "Location 1"},
  { id: "2", title: "Booking a volunteering" , image: require('../assets/images/BookingAVolunteering.png'), location: "Location 2"},
  { id: "3", title: "checking progress" , image: require('../assets/images/Progress.png'), location: "Location 3"},
  { id: "4", title: "more about us / contacts" , image: require('../assets/images/MoreAboutUsOrContact.png'), location: "Location 4"},
];
export default function Index() {
  return (
    <ScrollView>
   <View style={styles.container}>
      <ImageBackground source={require('../assets/images/MainPage.jpg')} style={styles.head}>
        <Text style={styles.headText}>verde</Text>
      </ImageBackground>
      <Text style={styles.undertext}>volunteers</Text>
    </View>
    <View style = {styles.gridcont}>
    <Grids DATA={DATA} />
    </View>
    </ScrollView>
   
  );
}
const styles =  StyleSheet.create({
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
    color: "black"
  },
  gridcont: {
    flex: 2,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});