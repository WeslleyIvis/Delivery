import { Router } from 'express';
import { User } from '../../models/users';

const UserSchema = User;
const routes = Router();

routes.get('/register', async (req, res) => {
    try {
        const user = await UserSchema.create(req.body);

        return res.send({user});
    } catch (err) {
        res.status(400).send({err: 'Registration falied'})
    }
})

routes.get('/', (req, res) => {
    res.send('OK')
})


export default routes;