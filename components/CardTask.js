import { View, Text,StyleSheet } from 'react-native'
export default function CardTask({name}) {
  return (
    <View style={styles.items}>
      <Text style={styles.element}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    items:{
      marginTop : 10,
    },
    element:{
      backgroundColor : '#113264',
      padding : 20,
      fontSize : 20,
      marginVertical : 5,
    }
  });