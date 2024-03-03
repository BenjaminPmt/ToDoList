import { View, Text, StyleSheet, TextInput, Button, Alert, FlatList, Modal, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import Header from './Header';
import { sqliteInit, addTask } from '../database/db'; // Import ajusté
import { NavigationContainer } from '@react-navigation/native';

export default function FormTask({navigation}) {
  const [task, setTask] = useState('');
  const [modal, setModal] = useState(false)

  useEffect(() => {
    sqliteInit().then(() => {
      console.log("SQLite initialisé");
    }).catch(err => {
      console.error(err);
    });
  }, []);


  const handleAddTask = async () => {
    if (task.trim() === '') {
      Alert.alert('Erreur', 'Veuillez entrer une tâche.');
      return;
    }
    await addTask(task)
      .then(() => {
        console.log("Tâche ajoutée avec succès");
        setTask(''); // Réinitialiser le champ de saisie
        setModal(true)
      })
      .catch(err => console.error("Erreur lors de l'ajout de la tâche", err));
  };

  const goToHome = () =>{
    navigation.navigate('Accueil')
    setModal(false)
  }
  return (
    <View>
      <Header />
      <Modal
        visible={modal}
        animationType='slide'
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>header modal</Text>
          </View>
          <View style={styles.modalBody}>
            <Text style={styles.textBody}>Votre tache vient d'etre ajouter. Que voulez vous faire ?</Text>
          </View>
          <View style={styles.modalFooter}>
            <Pressable style={styles.modalPressableBack} onPress={()=> setModal(false)}>
              <Text style={styles.btnText}>Retour</Text>
            </Pressable>
            <Pressable style={styles.modalPressable} onPress={goToHome}>
              <Text style={styles.btnText}>Voir mes taches</Text>
            </Pressable>
          </View>
          </View>
        </View>
      </Modal>
      <TextInput
        style={styles.input}
        placeholder="Ajouter une tâche"
        onChangeText={setTask}
        value={task}
      />
      <Button
        title="Ajouter Tâche"
        onPress={handleAddTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  modalContainer :{
    flex : 1,
    justifyContent: "center",
    alignItems : 'center',
    backgroundColor : "rgba(0,0,0,0.2)"
  },
  modalContent:{
    backgroundColor : 'white',
    width : '90%',
    height : 250,
    borderRadius : 15,
  },
  header:{
    width : '100%',
    height : 40,
    backgroundColor : '#1F2D5C',
    borderTopLeftRadius : 15,
    borderTopRightRadius : 15,
    justifyContent : 'center',
    alignItems : 'center'
  },
  textHeader :{
    color : 'white',
    fontSize : 20,
    fontWeight : '700',
  },
  modalBody :{
    flex : 1,
    width : '100%',
    justifyContent: 'center',
    alignItems : 'center'
  },
  textBody : {
    fontSize : 20,
    textAlign : 'center'
  },
  modalFooter: {
    width: '100%',
    height : 40,
    backgroundColor : '#1F2D5C',
    borderBottomLeftRadius : 15,
    borderBottomRightRadius : 15,
    flexDirection : "row",
    justifyContent : 'space-around',
    alignItems : 'center'
  },
  modalPressable:{
    width : '50%',
  },
  modalPressableBack:{
    width : '50%',
    borderRightWidth : 2,
    borderColor : 'white'
  },
  btnText: {
    fontSize : 20,
    color: 'white',
    fontWeight :'700',
    textAlign :'center'
  }

  
});
