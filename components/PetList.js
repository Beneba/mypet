import React from "react";
import { StyleSheet, Text, View, FlatList,TextInput } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import PetDisplay from "./PetDisplay";


function PetList() {
  const pets = [
    {
      petImage: require("../assets/img/persian.jpg"),
      name: "Persian",
      category: "Cat",
      age: "6 Month old",
      price: "$110",
      location: "93 shiashi street",
    },
    {
      petImage: require("../assets/img/puppy.jpg"),
      name: "Rescure",
      category: "Dog",
      age: "1.5 years old",
      price: "$130",
      location: "East Legon",
    },
    {
      petImage: require("../assets/img/capture.jpg"),
      name: "Leo",
      category: "Dog",
      age: "2 years old",
      price: "$99",
      location: "Dansoman",
    },
    {
      petImage: require("../assets/img/chubby.jpg"),
      name: "Chubby",
      category: "Dog",
      age: " 3 years old",
      price: "$85",
      location: "93 shiashi street",
    },
    {
      petImage: require("../assets/img/pomeranian.jpg"),
      name: "Pomeranian",
      category: "Dog",
      age: "2 years old",
      price: "$250",
      location: "Airport city",
    },
  ];
  return (
    <View backgroundColor= "#f7f7ff"> 
        <View flexDirection ="row" alignItems = "space-between" style = {styles.searchConatiner}  >
            <EvilIcons name="search" size={20} color="black" />
            <TextInput placeholder = "Search here" color = "white" />
            </View>
      <FlatList
        data={pets}
        renderItem={({ item }) => {
          return (
              
            <PetDisplay
              petImage={item.petImage}
              name={item.name}
              category={item.category}
              age={item.age}
              price ={item.price}
              location={item.location}
            />
          );
        }}
        keyExtractor={(item) => item.number}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    searchConatiner:{
        top:70,
        marginHorizontal:30,
        borderRadius:20,
        padding:8,
        backgroundColor:"white",
        alignItems:"center",
        color: "white"
    
    }
})
export default PetList;
