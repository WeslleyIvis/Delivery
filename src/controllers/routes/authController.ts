import { Router } from 'express';
import { User } from '../../models/users';

const UserSchema = User;
const routes = Router();

routes.get('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if(await UserSchema.findOne({email}))
            return res.status(400).send({error: 'User already exists'})

        const user = await UserSchema.create(req.body);
        
        user.password = undefined;
            

        return res.send({user});
    } catch (err) {
        res.status(400).send({err: 'Registration falied'})
    }
})

routes.get('/', (req, res) => {
    res.send('OK')
})


export default routes;