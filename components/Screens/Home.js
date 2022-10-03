import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesome, Entypo} from '@expo/vector-icons';
import Colors from '../Colors/Colors';

const Lupey = require("../../assets/1657144838527.jpeg");

export const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <FontAwesome name='search' size={24} color={Colors.gray} style={{marginLeft: 15}} />
            ),
            headerRight: () => (
                <Image source={Lupey} style={{width: 40, height: 40, marginRight: 15, borderRadius: 50}} />
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Chat")} style={styles.chatButton}>
                <Entypo name="chat" size={24} color={Colors.lightgray} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: "#fff",
    },
    chatButton: {
        backgroundColor: Colors.primary,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .9,
        shadowRadius: 8,
        marginRight: 20,
        marginBottom: 50,
    }
})