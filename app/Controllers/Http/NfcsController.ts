import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Profile from 'App/Models/Profile'
import NfcCard from 'App/Models/NfcCard'
// import Application from '@ioc:Adonis/Core/Application';
export default class NfcsController {

    public async welcome({ view }: HttpContextContract) {
        const listNFC = await NfcCard.all();
        return view.render('welcome', { listNFC });
    }

    public async index({ view, params }: HttpContextContract) {
        const nfc = await NfcCard.query().select('*').where('card_code', params.id).first();
        await nfc?.preload('profile');
        return view.render('profile', { nfc });
        // return nfc;

    }

    public async ThemNFC({ request, response }: HttpContextContract) {

        const data = request.only(['cardCode']);

        const nfc = await NfcCard.create(data);

        return response.redirect().toRoute('/');
    }

    public async ThemProfile({ view, request, params, response }: HttpContextContract) {
        const data = new Profile();

        // const thumb = request.input('thumb', {
        //     extnames: ['webp', 'jpg', 'png']
        // })
        // if (thumb != null) {
        //     const folder = 'uploads';
        //     const fileName = new Date().getTime();
        //     await thumb.move(Application.publicPath(folder), {
        //         name: `${fileName}.${thumb.extname}`,
        //         overwrite: true,
        //     })
        //     data.img = `${folder}/${fileName}.${thumb.extname}`;
        // } else {
        //     console.log("loix upload file")
        // }

        data.name = request.input('name');
        data.urlFacebook = request.input('facebook');
        data.urlInstagram = request.input('instagram');
        data.phone = request.input('phone');
        data.img = request.input('anh');
        data.text = request.input('text');
        data.email = request.input('email');
        data.address = request.input('address');

        const nfc = await NfcCard.find(params.id);

        const profile = await nfc?.related('profile').associate(data);


        return response.redirect().back();
    }

    public async XoaProfile({ view, params, response }: HttpContextContract) {
        const nfc = await NfcCard.find(params.id);

        await nfc?.related('profile').dissociate();

        return response.redirect('/');
    }
}
