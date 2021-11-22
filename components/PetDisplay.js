import React from 'react';
import { StyleSheet, Text, View,Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function PetDisplay({petImage, name, category, age, price,location}) {
    return (
        <View style ={styles.container} >
            
            <View>
                < Image source = {petImage} style ={styles.imageContainer} />
            </View>
            <View style ={styles.textContainer} >
                <View>
                    <Text style ={styles.nameContainer} >{name} </Text>
                </View>
                <View>
                    <Text style ={styles.fontView} > {category} </Text>
                </View>
                <View>
                    <Text style ={styles.fontView} >{age} </Text>
                </View>
                <View>
                    <Text style ={styles.fontView} >{price} </Text>
                </View>
                <View flexDirection ="row"  paddingVertical = {5} >
                <Ionicons name="location-outline" size={20} color="black" />
                    <Text style ={styles.fontView} numberOfLines ={1}  >{location} </Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{ 
        marginHorizontal:20,
        paddingTop:10,
        top:90,
       flexDirection: "row",
       backgroundColor:"#f7f7ff",
       borderRadius:10,
    },
    imageContainer:{
        height: 180,
        width:120,
        borderRadius:20,
        borderWidth: 10,
        justifyContent: "space-around"
    },
    textContainer:{
        flexDirection: "column",
        paddingHorizontal:30,
        backgroundColor:"white",
        height:140,
        width:190,
        marginVertical:30,
        borderTopEndRadius:15,
        borderBottomEndRadius:15,
        alignItems:"flex-start"
    },
    nameContainer:{
        fontSize: 23,
        fontWeight:"bold",
        color: "#372e9e",
       
    },
    fontView:{
        fontSize: 17,
        
        color: "#848487",
    }

})
export default PetDisplay;
