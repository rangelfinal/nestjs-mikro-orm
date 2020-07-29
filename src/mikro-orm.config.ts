import type { Options } from "mikro-orm";
import { Foo } from "./entities/foo.entity";

export default {
  debug: true,
  entities: [ Foo ],
  entitiesDirsTs: ['src/entities'],
  dbName: 'my-db-name.sqlite3',
  type: 'sqlite',
  autoFlush: false,
} as Options;
