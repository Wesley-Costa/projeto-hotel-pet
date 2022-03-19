
exports.up = function (knex) {
    knex.schema.table('reserva', function (table) {
        table.string('proprietario')
    })
};

exports.down = function (knex) {
    knex.schema.table('reserva', function (table) {
        table.dropColumn('proprietario')
    })
};
