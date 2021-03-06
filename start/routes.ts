/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('/', 'NfcsController.welcome');

    Route.post('/ThemNFC', 'NfcsController.ThemNFC');
    Route.post('/ThemProfile/:id', 'NfcsController.ThemProfile');
    Route.get('/XoaProfile/:id', 'NfcsController.XoaProfile');
}).middleware('auth');

Route.get('/:id', 'NfcsController.index');

Route.group(() => {
    Route.on('login').render('login');
    Route.post('/login', 'AuthController.login');
}).prefix('/auth');


