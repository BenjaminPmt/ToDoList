import { View, Text, ScrollView, StyleSheet } from 'react-native'
export default function TasksFilter() {

  const filter = [
    {
      id: "01",
      category: "Terminé",
    },
    {
      id: "02",
      category: "En cours",
    },
    {
      id: "03",
      category: "Toutes",
    },
  ];
  return (
      <View style={styles.container}>
        {
            filter.map((category, index) =>{
                const backgroundColor = index === 0 ? '#3A5BC7' : '#1F2D5C';
          const textColor = index === 0 ? '#1F2D5C' : '#FFFF';
                return(
                    <View key={index} style={[styles.filterItem,{ backgroundColor },]}  >
                        <Text style={[styles.text, { color: textColor }]}>{category.category}</Text>
                    </View>
                )
            })
        }
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flexDirection : 'row',
      justifyContent : 'space-around',
    paddingVertical: 20,
    },
    filterItem:{
      padding: 5,
      borderRadius : 10,
    },
    text:{
        fontWeight : 700,
        fontSize : 18,
    }
});