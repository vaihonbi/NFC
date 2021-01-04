import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Profiles extends BaseSchema {
  protected tableName = 'profiles'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('img');
      table.string('url_facebook');
      table.string('url_instagram');
      table.string('phone');
      table.string('text');
      table.string('email');
      table.string('address');
      table.timestamps();
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
