import { Request, Response } from "express";
import jwt, { DecodeOptions, JwtPayload } from 'jsonwebtoken';

interface AuthRequest extends Request {
    userId?: string;
}

const secret = process.env.SECRET_HASH || "013de0c99e66d589b96d74eb85d44c58"

export = (req: Request, res: Response, next: any) => { 
    const autHeader = req.headers.authorization;

    if(autHeader === undefined)
        return res.status(401).send({error: "No token provider"});

    // Formato Bearer hash
    const parts = autHeader?.split(' ');

    if(parts?.length !== 2) 
        return res.status(401).send({error: "Token error"})
    
    const [ scheme, token ] = parts;

    console.log({sheme: scheme, token: token})

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({error: "Token malformatatted"})

    jwt.verify(token, secret, (err, decoded: any) => {
        if(err) return res.status(401).send({error: "Token invalid"})

        const authReq = req as AuthRequest;
        authReq.userId = decoded.id;

        return next();
    })

}