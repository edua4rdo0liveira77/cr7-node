import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listcr7() {
    const cr7 = await sql`select * from cr7`;
    return cr7;
  }

  async createcr7(cr7) {
    const id = randomUUID();
    console.log('id', id);
    const nome = cr7.nome;
    const posição = cr7.posição;
    const gols = cr7.gols;
    
    await sql`insert into cr7 (id, nome, posição, gols)
    values (${id}, ${nome}, ${posição}, ${gols})`;
  }

  async updatecr7(id, cr7) {
    const nome = cr7.nome;
    const posição = cr7.posição;
    const gols = cr7.gols;

    await sql`nome cr7 set 
        name = ${nome},
        posição = ${posição},
        gols = ${gols}
        where id = ${id}
    `;
  }

  async deletecr7(id) {
    await sql`delete from cr7 where id = ${id}`;
  }
}
