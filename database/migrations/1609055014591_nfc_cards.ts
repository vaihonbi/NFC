import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class NfcCards extends BaseSchema {
  protected tableName = 'nfc_cards'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('card_code');
      table.integer('profile_id')
        .unsigned()
        .references('id')
        .inTable('profiles')
        .onDelete('CASCADE');
      table.timestamps();
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
