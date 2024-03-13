import { View, Text, StyleSheet, Image } from 'react-native'
import TodayDate from './TodayDate';
export default function Header() {
  return (
    <View style={styles.headerContainer}>
      {/* <View style={styles.imageContainer}> */}
        <View style={styles.textContainer}>
          <Text style={{fontWeight : 700, color: '#FFFF', fontSize : 34}}>Bienvenue</Text>
          <Text style={{fontWeight : 700, color: '#FFFF', fontSize : 24}}>Sur votre To Do List</Text>
          <TodayDate  />
        </View>
          {/* <Image source={require('../assets/profil_picture.jpg')} style={styles.image}/> */}
      {/* </View> */}
      <View  style={styles.dateContainer}>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
    height: 150,
    backgroundColor: '#1F2D5C',
    flexDirection: 'collum', // Organise les enfants en ligne.
    justifyContent: 'space-between', // Répartit les enfants aux extrémités du conteneur.
    alignItems: 'flex-start', // Aligner les enfants au début du conteneur (haut).
    padding: 10,
    },
    textContainer:{
      flexDirection : "column",
      padding : 20,
    },
    dateContainer : {
        height : 30,
        alignItems : 'flex-start',
        justifyContent : 'center'

    },
    imageContainer: {
      height : 100,
      flexDirection : "row",
      justifyContent:'space-between',
      padding : 20,
      width : '100%',
      },
      image: {
        width: 50, // Ajustez selon la taille souhaitée.
        height: 50, // Ajustez selon la taille souhaitée.
        borderRadius : 10,
        marginTop : 15,
      },
  });