import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('tasks.db');


//initialisation
export const sqliteInit = () => {
  const initPromise = new Promise((resolve, reject) =>{
    db.transaction(tx =>{
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY NOT NULL, task TEXT NULL);',
          [],
        (_, result) => {
            resolve(result)
            console.log("table créée")
        },
        (_, error) => {
          reject(error)
        },
        )
    })
})
return initPromise
}


//Enregistrer les datas

export const addTask = (task) => {
  const insertPromise = new Promise((resolve, reject) =>{
    if (!task || typeof task !== 'string' || task.length < 1 || task.length > 255) {
      // Rejeter la promesse si la validation échoue
      console.error('La tâche est invalide.');
      return reject(new Error('La tâche est invalide.'));
    }
    db.transaction(tx =>{
        tx.executeSql(
          'INSERT INTO tasks (task) VALUES (?);',
          [task],
        (_, result) => {
            resolve(result)
            console.log('ajout ok', result)
        },
        (_, error) => {
          reject(error)
          console.log('toto' + error)
        },
        )
    })
})
return insertPromise;
}

//supprimer les taches
export const deleteTasks = (id) => {
  const deletePromise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM tasks WHERE id = ?;',
        [id],
        (_, result) => {
          resolve(result); // Résout la promesse avec le tableau de tâches
          console.log("La suppression est reussie" , result)
        },
        (_, error) => {
          reject(error); // Rejette la promesse en cas d'erreur
          console.log('Erreur pendant la suppression', error)
        }
      );
    });
  });
  return deletePromise;
};
// Recuperer les taches
export const getTasks = () => {
  const getPromise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM tasks;',
        [],
        (_, result) => {
          let tasks = [];
          for (let i = 0; i < result.rows.length; i++) {
            tasks.push(result.rows.item(i));
          }
          resolve(tasks); // Résout la promesse avec le tableau de tâches
          console.log("recuperation ok")
        },
        (_, error) => {
          reject(error); // Rejette la promesse en cas d'erreur
          console.log('error gettask')
        }
      );
    });
  });
  return getPromise;
};


