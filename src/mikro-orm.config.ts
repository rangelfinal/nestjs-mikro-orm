import type { Options } from "mikro-orm";

export default {
  entitiesDirs: ['../dist/entities'],
  entitiesDirsTs: ['../src/entities'],
  dbName: 'my-db-name.sqlite3',
  type: 'sqlite',
  autoFlush: false,
  baseDir: __dirname,
} as Options;
