
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments()
      tbl.string('name').notNullable().index()
      tbl.boolean('completed')
  })
  .createTable('tasks', tbl => {
      tbl.increments()
      tbl.string('description').notNullable()
      tbl.string('notes')
      tbl.boolean('completed')
      tbl.integer('proj_id').notNullable().unsigned().references('projects.id')
  })
  .createTable('resources', tbl => {
      tbl.increments()
      tbl.string('name').notNullable()
      tbl.string('description').notNullable()
  })
  .createTable('projects_resources', tbl => {
      tbl.increments()
      tbl.integer('proj_id').notNullable().unsigned().references('projects.id')
      tbl.integer('resource_id').notNullable().unsigned().references('resources.id')
  })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
