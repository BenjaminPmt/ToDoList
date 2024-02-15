import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
export default function TodayDate() {

    const dateToday = new Date();
    const dateFrench = dateToday.toLocaleDateString('fr-FR', {
        month: 'long', // "janvier", "février", ...
        day: 'numeric', // 1, 2, 3, ...
      });
 
  return (
    <View style={styles.dateContainer}>
      <Text style={styles.dateText}>Date du jour : {dateFrench}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    dateContainer: {
      height : 25,
      width : 200,
      backgroundColor : '#3A5BC7',
      borderRadius : 10,
      justifyContent : 'center',
      alignItems : 'center'
    },
    dateText : {
        fontWeight : '700',
        color : "#FFF"
    }
  });