
exports.up = async function(knex) {
  await knex.schema
  .createTable('',() => {

  })
   .createTable('',() => {
      
  })
   .createTable('',() => {
      
  })
     .createTable('',() => {
      
  })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('')
    .dropTableIfExists('')
    .dropTableIfExists('')
    .dropTableIfExists('')
};
