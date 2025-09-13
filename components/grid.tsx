import React from "react";
import { useWindowDimensions,ImageBackground, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";


interface Item {
  id: string;
  title: string;
  image : any;
    location: any;
}

const Grid : React.FC<{item: Item}> = ({item}) => {
  const { width } = useWindowDimensions();
  const itemWidth = (width - 40) / 2; 
  
    const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push(item.location)} style={[styles.item, { width: itemWidth }]}>
      
        <ImageBackground source={item.image} style={styles.image} imageStyle={{ resizeMode: "contain" }} />
        <Text style={styles.title}>{item.title}</Text>
      
    </TouchableOpacity>
  );
};


export default function Grids({ DATA }: { DATA: Item[] }) {
  return (
    <View style={styles.list}>
      {DATA.map((item) => (
        <Grid key={item.id} item={item} />
      ))}
    </View>
  );
}
const styles =  StyleSheet.create({
    list: {
       flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
        },
    item: {
        flexBasis: '48%',
        marginBottom: 20,
    height: 150,
    borderRadius: 10,
    padding: 20,
   
        },
    image: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        },
    title: {
        color: '#40B5AD',
        textAlign: 'center',

        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        },

});