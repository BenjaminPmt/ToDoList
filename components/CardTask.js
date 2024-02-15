import { View, Text,StyleSheet } from 'react-native'
export default function CardTask() {
  return (
    <View style={styles.cardContainer}>
      <Text>CardTask</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
      height : 120,
      width : 120,
      backgroundColor : '#aaa',
      borderRadius : 15,
    },
  });