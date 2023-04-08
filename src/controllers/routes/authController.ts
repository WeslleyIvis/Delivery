import { Router } from 'express';
import { User } from '../../models/users';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

const UserSchema = User;
const routes = Router();

const hash = process.env.SECRET_HASH || "013de0c99e66d589b96d74eb85d44c58"

function generateToken(paramns: {}) {
    return jwt.sign(paramns, hash, {
        expiresIn: 86400,
    })

}

routes.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if(await UserSchema.findOne({email}))
            return res.status(400).send({error: 'User already exists'})

        const user = await UserSchema.create(req.body); 
        
        user.password = undefined;

        return res.send({
            user,
            token: generateToken({ id: user.id })
        });
    } catch (err) {
        res.status(400).send({err: 'Registration falied'})
    }
})

routes.post('/authenticate',async (req, res) => {
    const {email, password} = req.body;

    const user = await UserSchema.findOne({email}).select('+password');

    if(!user) 
        return res.status(400).send({error: "User not found"});

    if(!await bcrypt.compare(password, (user.password as string)))
        return res.status(400).send({error: "Invalid password"});

    user.password = undefined;

    res.send({
        user,
        token: generateToken({ id: user.id })
    });
})

export default routes;