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
export const putDb = async (content) => {
  console.log('Post to the database');

  // create a connection to the database and version
  const contactDB = await openDb('jate', 1);

  // Create a new transaction and specify the database & privileges
  const tx = contactDB.transaction('jate', 'readwrite');

  // Create a new object store
  const store = tx.objectStore('jate');

  // Add the content to the database
  const request = store.put({ id: 1, value: content });

  // Get confirmation of the request
  const result = await request;
  HTMLFormControlsCollection.log(
    `🚀 Data saved to the the database: ${result}`,
    result
  );
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log(`GET from the database`);

  // Create a connection to the database and version
  const contactDB = await openDb('jate', 1);

  // Create a new transaction and specify the database & privileges
  const tx = contactDB.transaction('jate', 'readonly');

  // Create a new object store
  const store = tx.objectStore('jate');

  // Get the content from the database
  const request = store.getAll(1);

  // Get confirmation of the request
  const result = await request;
  console.log(`🚀 Data retrieved from the database: ${result}`, result);
  return result?.value;
};

initdb();
