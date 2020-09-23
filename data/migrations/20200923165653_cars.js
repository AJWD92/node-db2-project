const { table } = require("../db-config");

exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id');
        tbl.string('VIN', 17).unique().notNullable();
        tbl.string('make', 128).notNullable();
        tbl.string('model', 128).notNullable();
        tbl.integer('mileage', 128).notNullable();
        tbl.boolean('transmissionType');
        tbl.string('titleStatus', 128);

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
