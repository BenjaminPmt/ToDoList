// This page is for see all the task and add the task when you click on the button +
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import { useEffect, useState } from 'react'
import CardTask from '../components/CardTask'
import Header from '../components/Header'
import TasksFilter from '../components/TasksFilter'
import { getTasks, sqliteInit, deleteTasks } from '../database/db'
import { AntDesign } from '@expo/vector-icons';
export default function Home() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    sqliteInit().then(() => {
      console.log("SQLite initialisé");
      loadTasks(); // Charger les tâches au démarrage
    }).catch(err => {
      console.error(err);
    });
  }, []);

  const loadTasks = () => {
    getTasks().then((loadedTasks) => {
      setTasks(loadedTasks);
      console.log("Tâches chargées avec succès");
    }).catch(err => console.error("Erreur lors du chargement des tâches", err));
  };
  const handleDelete = (id) => {
    deleteTasks(id).then(() => {
      console.log("Tâche supprimée");
      loadTasks(); // Recharge les tâches pour mettre à jour la liste
    }).catch(err => console.error("Erreur lors de la suppression de la tâche", err));
  };
  return (
    <View>
      <Header />
      <TasksFilter />
      <FlatList 

        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.task}</Text>
            <Pressable 
              onPress={() => handleDelete(item.id)}>
            <AntDesign name="delete" size={24} color="black" />
            </Pressable>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor :'#1F2D5C',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flexDirection : "row",
  },
  text:{
    color: "white",
  }
});
