import { sql } from './db.js'

sql`
  CREATE TABLE cr7 (
      id text PRIMARY KEY,
      nome character varying(255),
      posição  character varying(255),
      idade character varying(255)
  );
`.then(() => {
  console.log('tabela criada');''
})