
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'broom', description: 'just a device to sweep with'},
        {name: 'computer', description: 'my computer'},
        {name: 'architect', description: 'a person'}
      ]);
    });
};
