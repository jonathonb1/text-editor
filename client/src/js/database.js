import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// Export function we will use to PUT to the database
export const putDb = async (content) => {

// create connection to the DB and version we want to use  
	const jateDB = await openDB('jate', 1);

// create a new transaction and specify the database and privlages   
	const tx = jateDB.transaction('jate', 'readwrite');

// Open up the desired object store
	const store = tx.objectStore('jate');

// use the PUT method to store data
	const request = store.put({ id: 1, value: content });

  // Get confirmation of the request.
	const result = await request;
	console.log(result);
};

// TODO: Add logic for a method that gets all the content from the database
// Export function we will use to GET to the database
export const getDb = async (e) => {

// create connection to the DB and version we want to use
	const jateDb = await openDB('jate', 1);

// create a new transaction and specify the database and privlages 
	const tx = jateDb.transaction('jate', 'readonly');

// Open up the desired object store
	const store = tx.objectStore('jate');

// use the .getAll() method to get all data in the database
	const request = store.get(1);

  // Get confirmation of the request.
	const result = await request;
	return result?.value;
};

initdb();
