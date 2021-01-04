import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import NfcCard from 'App/Models/NfcCard'

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public img: string

  @column()
  public urlFacebook: string

  @column()
  public urlInstagram: string

  @column()
  public phone: string

  @column()
  public text: string

  @column()
  public email: string

  @column()
  public address: string

  @hasOne(() => NfcCard)
  public nfcCard: HasOne<typeof NfcCard>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
