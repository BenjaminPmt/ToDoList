import { View, Text, StyleSheet, TextInput, Button, Alert, Modal, Pressable, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { sqliteInit, addTask, getTasks} from '../database/db'; // Import ajusté
import ModalTwoBtn from '../components/ModalTwoBtn';
import ModalOneBtn from '../components/ModalOneBtn';


export default function FormAddTask({navigation}) {
  const [task, setTask] = useState('');
  const [modal, setModal] = useState(false)
  const [modalNoTask, setModalNoTask] = useState(false)

  useEffect(() => {
    sqliteInit().then(() => {
      console.log("SQLite initialisé");
    }).catch(err => {
      console.error(err);
    });
  }, []);


  const handleAddTask = async () => {
    if (task.trim() === '') {
      setModalNoTask(true)
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
  const backModal = () => {
    setModal(false);
    setModalNoTask(false)
  }
  return (
    <View>
      <Header />
      <ModalOneBtn 
        visible={modalNoTask}
        titleHeader="Pas de tache"
        textBodyModal="Vous devez mettre au moins 1 caractere pour la creation de la tache"
        textBtn="Retour"
        onPressBtn={backModal}
        />
      <ModalTwoBtn
        visible={modal}
        titleHeader="Tache ajoutée"
        textBodyModal="Votre tache vient d'etre ajoutée. Que voulez-vous faire ?"
        btnLeft="Retour"
        btnRight="Voir mes taches"
        goToHome={goToHome}
        backToAdd={backModal}
      />
      
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
  },modalContainer :{
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
  separateBtn:{
    width : 3,
    height : 20,
    backgroundColor : 'white'
  },
  btnText: {
    fontSize : 20,
    color: 'white',
    fontWeight :'700',
    textAlign :'center'
  }
 
});