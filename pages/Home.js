// This page is for see all the task and add the task when you click on the button +
import { View, Text } from 'react-native'
import CardTask from '../components/CardTask'
import Header from '../components/Header'
import TasksFilter from '../components/TasksFilter'
export default function Home() {
  return (
    <View>
      <Header />
      <TasksFilter />
    </View>
  )
}