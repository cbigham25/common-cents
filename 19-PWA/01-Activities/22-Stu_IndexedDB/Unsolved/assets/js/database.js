import { openDB } from 'idb';

const initdb = async () =>

// TODO: Add a comment explaining what this method does
// This is openening the database with the name of 'todos'
  openDB('todos', 1, {
    // TODO: Add a comment explaining the functionality of this method:
    // This function is to add the data from objectStoreNames to the todos database. the console log will show
    // that the data already exists and return a message
    upgrade(db) {
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      // TODO: Add a comment explaining what we're doing with the object store:
      // This is creating a new keypath named 'id' and will allow the todos database to be created. the console log
      // will then return a message 
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

initdb();
