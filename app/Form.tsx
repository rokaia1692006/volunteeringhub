import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useFonts } from "expo-font";




const styles = StyleSheet.create({
 Title: {
  fontSize: 190,
  color: "#088F8F", 
  fontWeight: "bold",
  fontFamily:"ItalBolSer",
  transform: [{ rotate: "-10deg" }],
  top: -370,
  left:30,
  width:500,
  lineHeight:90,

 },
 Shadow: {
  fontSize: 190,
  color: "white", 
  fontWeight: "bold",
  fontFamily:"ItalBolSer",
  transform: [{ rotate: "-10deg" }],
  top: -180,
  left:32,
  width:500,
  lineHeight:90,

 },

 Register:{
   fontSize:90,
   color:"black",
   fontFamily:"Signature",
   top: -350,
   textAlign: "center",

 },

 Name: {
    fontSize:40,
    color:"black",
    fontWeight: 500,
    fontFamily:"Volunteer",
    left:50,
    top:-300


 },
 Rectangle1:{
  width:900,
  height:60,
  left:180,
  top:-348,
  backgroundColor:"#ADD8E6",

 },
 //will only change the width and left
 Rectangle2:{
  width:850,
  height:60,
  left:230,
  top:-348,
  backgroundColor:"#ADD8E6",

 },
 Rectangle3: {
  width:760,
  height:60,
  left:320,
  top:-348,
  backgroundColor:"#ADD8E6",
 },
  Example:{
    fontSize:24,
    top:-300,
    fontFamily:"Volunteer",
    left: 50,
    fontWeight:"bold",
  },
});


function Heading(){
 return( //the bracket SHOULD be next to the return, otherwise it will return 'undefined' and the function won't work

  <View>
    <Image
      source={ require("../assets/images/CoverPage.jpg")} //two dots, not one
      style={{ width: "100%", height: 400 }}
    />
    <Text style={styles.Shadow}> Cleaning the ocean</Text>
    <Text style= {styles.Title}> Cleaning the ocean </Text>
    <Text style= {styles.Register}> Join us? Register now! </Text>

    
    <Image
      source={ require("../assets/images/Turtle.jpg")} 
      style={{ 
        width: 400,
        height: 400,
        borderRadius: 200, //half the width
        marginLeft: 1100,
        marginTop: -400
        
      }}
    />


  </View>
 );


}


function Form(){

return( //Location, name and phone number will all have the same font style named "Name"
  <View>
  
  <Text style={styles.Name}> Name: </Text>
  <View style={styles.Rectangle1}>  </View>
  <Text style={styles.Name}> Location: </Text> 
  <View style={styles.Rectangle2}> </View>
  <Text style={styles.Name}> Phone number: </Text>
  <View style={styles.Rectangle3}> </View>
  <Text style= {styles.Example}> !!!Please include the country code, example: +201111111111 </Text>
  
  
  
  </View>


);
}






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
    <View
    style={{
      flex : 1,
       backgroundColor: "white",
          }}>
    
    <Heading />
    <Form />

    </View>
    </ScrollView>
  );
}

