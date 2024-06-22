/* eslint-disable no-console */
import { createRxDatabase, addRxPlugin, RxDatabase } from 'rxdb';

import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
// import { getRxStorageMongoDB } from 'rxdb/plugins/storage-mongodb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { MyDatabaseCollections, MyDatabase, IAdapter } from '../types';

let dbPromise: Promise<RxDatabase<MyDatabaseCollections>>;
const supportedAdapters: IAdapter[] = [];

addRxPlugin(RxDBQueryBuilderPlugin);

const createDB = async () => {
  console.log('DatabaseService: creating database..');
  const dbname = 'testdb';

  const db: MyDatabase = await createRxDatabase<MyDatabaseCollections>({
    name: dbname, // <- name,
    storage: getRxStorageDexie(),
    password: 'passpasspass', // <- password (optional)
    multiInstance: false, // This should be set to false when you have single-instances like a single-window electron-app
    eventReduce: true, // <- eventReduce (optional, default: true)
  });

  console.dir(db);
  console.log('DatabaseService: created database');
  return db;
};

const deleteDB = async () => {
  if (!dbPromise) return false;
  const db = await dbPromise;
  await db.destroy();
  await db.remove();
  return true;
};

export const changeAdapter = async (adapter: IAdapter) => {
  console.warn(`re-creating database with adapter '${adapter}'`);
  await deleteDB();
  dbPromise = createDB();
  return dbPromise;
};

const getDB = async () => {
  if (!dbPromise) dbPromise = createDB();
  return dbPromise;
};

// eslint-disable-next-line import/prefer-default-export
export { getDB, supportedAdapters };
