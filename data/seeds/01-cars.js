
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '1A2B3C4D5E6F7G8H9', make: 'Ford', model: 'Mustang', mileage: 100250, transmissionType: 1, titleStatus: 'clean'}
      ]);
    });
};
