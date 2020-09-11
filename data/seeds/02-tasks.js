
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'sweep', proj_id: 1, notes: 'asdfafd', completed:  false},
        {description: 'get computer', proj_id: 2, notes: 'asdfafd', completed: false},
        {description: 'call architect', proj_id: 3, notes: 'asdfafd', completed: false}
      ]);
    });
};
