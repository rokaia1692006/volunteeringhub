import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useFonts } from "expo-font";



const styles = StyleSheet.create({
  Booking:{
    fontSize: 120,
    fontStyle:"italic",
    color:"white",
    fontFamily: "Booking",
          },
  Volunteering: {
    fontSize: 90,
    fontWeight: "bold",
    color: "#5F9EA0",
    fontFamily:"Volunteering",
  },
  Cleaning: {
    fontSize: 70,
    fontStyle: "italic",
    color: "white",
    fontFamily: "Cleaning",
  },
  Rectangle1:{
    height:210,
    width:700,
    borderRadius:20,
    backgroundColor: "#4682B4",
  },
  Rectangle2: {
    height: 500,
    width: 1400,
    borderRadius:20,
    backgroundColor : "#87CEEB",
  },

});



function Title()
{ return(
  
  <View>
  <Image
      source={ require("../assets/images/CoverPage.jpg")} //two dots, not one
      style={{ width: "100%", height: 400 }}
    />
  <Text style={[styles.Booking, {position: "absolute", top:286, left:120}]}> Booking </Text>
  <Text style={[styles.Volunteering, {position: "absolute",top:380,left:40}]}>A Volunteering </Text>
  
  </View>
  
);
}

function Spot1()
{
  return(
   <View>
   
    <View style={[styles.Rectangle2, {position: "absolute", top:220, left:65}]}>  </View>
    <View style={[styles.Rectangle1, {position: "absolute", top:130, left:100}]}>  </View>
    <Text style={[styles.Cleaning, {position: "absolute", top:190, left:110}]}> Cleaning the ocean! </Text>
    <Image
      source={ require("../assets/images/Turtle.jpg")} 
      style={{ 
        width: 400,
        height: 400,
        borderRadius: 200, //half the width
        marginLeft: 1100,
        marginTop: 270,
        
      }}
    />
    <Image
      source={ require("../assets/images/Day.png")} 
      style={{ 
        width:100,
        height:100,
        marginTop: -320,
        marginLeft:120,
        
      }}
    />
    <Text
    style={{
      color: "black",
        marginTop:-65,
        marginLeft:210,
        fontSize:20,
        fontFamily: "Cleaning",
    }}> Saturday, 20th of September, 2025 </Text>


    <Image
      source={ require("../assets/images/Time.png")} 
      style={{ 
        width:130,
        height:130,
        marginTop: 10,
        marginLeft:100,
        
      }}
    />
    <Text
    style={{
      color: "black",
        marginTop:-75,
        marginLeft:290,
        fontSize:20,
        fontFamily: "Cleaning",
    }}> 9 A.M. - 12 P.M. </Text>

    <Text
    style={{
      color:"black",
      fontFamily:"Cleaning",
      marginLeft:130,
      marginTop: 40,
      fontSize: 19,
      width: 1000,
      fontWeight:"600",
    }}>     We appreciate the aquarium life; that’s why our group will meet at 8:30 A.M. sharp at (place) to head to the (name) Ocean, with all the required tools, to clean the beach and ocean from the human residues: plastics, cans, papers, etc..
If you’re interested in saving the ocean from things they cannot control or live with, join us!         </Text>
  

  <Text
    style={{
      fontFamily:"Cleaning",
      marginLeft:400,
      marginTop: 25,
      fontSize: 19,
      width: 1000,
      fontWeight:"bold",
      color: "#00008B"
    }}>    HURRY UP! LIMITED SPOTS AVAILABLE!!    </Text>


    
    <Text
    style={{
      color:"black",
      fontFamily:"Cleaning",
      marginLeft:300,
      marginTop: 20,
      fontSize: 19,
      width: 1000,
      fontWeight:"600",
    }}>   P.S. All tools needed will be given to you at the meeting point.   </Text>
  
  

   </View>

  );
}




export default function App() {
  const [fontsLoaded] = useFonts({
    Booking: require("../assets/fonts/Booking.ttf"),
    Volunteering: require("../assets/fonts/Volunteer.otf"),
    Cleaning: require("../assets/fonts/Cleaning.ttf")
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View>
      <Title />
      <Spot1 />
     
    </View>
    </ScrollView>
  );
}