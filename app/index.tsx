import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useFonts } from "expo-font";




const styles = StyleSheet.create({
  
});


export default function App() {
  const [fontsLoaded] = useFonts({
    Booking: require("../assets/fonts/Booking.ttf"),
    Volunteering: require("../assets/fonts/Volunteer.otf"),
    Usual: require("../assets/fonts/Usual.ttf"),
    ItalBolSer: require("../assets/fonts/ItalBolSer.otf"),
    Signature: require("../assets/fonts/Signature.otf"),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View>
    <Text> Hey </Text>
    </View>
    </ScrollView>
  );
}
