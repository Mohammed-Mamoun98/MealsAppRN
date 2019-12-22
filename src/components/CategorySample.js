import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Card from '../components/Card'

export default (props) => {
    
        return (
            <Card onTouchStart = {props.onTouchStart} style = {{...styles.container , ...props.style , backgroundColor : props.color}}>
                <Text style = {{...styles.title}}> {props.title} </Text>
            </Card>
        )
    
}

const styles = StyleSheet.create({
    container : {
        width : 150,
        height : 150,
        backgroundColor : 'red',
        justifyContent : 'center',
        alignItems : 'center',
    },
    title : {

        color : 'white',
        fontSize : 30
    }
})
