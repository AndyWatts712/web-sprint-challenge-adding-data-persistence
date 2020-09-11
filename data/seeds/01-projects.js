
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Clean garage', completed: false },
        {name: 'Make react app', completed: false},
        {name: 'Build house', completed: false}
      ]);
    });
};
