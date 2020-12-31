import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User';
export default class SeedSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.create({
      id: 1,
      email: 'admin@gmail.com',
      password: '1234qwer',
    })
  }
}
