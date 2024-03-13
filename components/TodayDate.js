import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function TodayDate() {

    const dateToday = new Date();
    const dateFrench = dateToday.toLocaleDateString('fr-FR', {
        month: 'long', // "janvier", "février", ...
        day: 'numeric', // 1, 2, 3, ...
      });
 
  return (
    <View style={styles.dateContainer}>
      <Ionicons name="today" size={18} color="white" />
      <Text style={styles.dateText}> {dateFrench}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    dateContainer: {
      height : 25,
      width : 125,
      backgroundColor : '#3A5BC7',
      borderRadius : 10,
      flexDirection :'row',
      justifyContent : 'center',
      alignItems : 'center',
      marginTop : 5,
    },
    dateText : {
        fontWeight : '700',
        color : "#FFF"
    }
  });