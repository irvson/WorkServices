import knex, { Knex } from 'knex';


export async function up(knex: Knex) {

    return knex.schema.createTable('client', table => {
        table.increments('id').primary();
        table.string('name', 30).notNullable;
        table.string('motorcycle',10).notNullable;
        table.string('place', 8).notNullable;
        table.string('service', 30).notNullable;
        table.string('money',12).notNullable;
        table.integer('date',10).notNullable;

    });

}


export async function down(knex: Knex) {
return knex.schema.dropTable('client')
}