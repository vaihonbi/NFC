import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Profile from 'App/Models/Profile'
import NfcCard from 'App/Models/NfcCard'
export default class NfcsController {

    public async welcome({ view }: HttpContextContract) {
        const listNFC = await NfcCard.all();
        return view.render('welcome', { listNFC });
    }

    public async index({ view }: HttpContextContract) {

        return view.render('profile');

    }

    public async ThemNFC({ request, response }: HttpContextContract) {

        const data = request.only(['cardCode']);

        const nfc = await NfcCard.create(data);

        return response.redirect().toRoute('/');
    }

    public async ThemProfile({ view, request, params, response }: HttpContextContract) {
        const data = new Profile();

        data.name = request.input('name');
        data.urlFacebook = request.input('facebook');
        data.urlInstagram = request.input('instagram');
        data.phone = request.input('phone');

        const nfc = await NfcCard.find(params.id);

        const profile = await nfc?.related('profile').associate(data);


        return response.redirect().back();
    }

    public async XoaProfile({ view, params }: HttpContextContract) {
        const nfc = await NfcCard.find(params.id);

        await nfc?.related('profile').dissociate();

        return params.id;
    }
}
