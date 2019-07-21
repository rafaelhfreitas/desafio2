import { Router } from 'express';

import User from './app/models/Users';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Rafael Freitas',
        email: 'rafael@bigworks.com',
        password_hash: '12345',
    });
    return res.json(user);
});

export default routes;
