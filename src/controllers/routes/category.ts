import { Router } from "express";
import { Category } from "../../models/category";

const routes = Router();

routes.get('/', async (req, res) => {
    try {
        const categories = await Category.find({});
        res.status(200).send(categories)
    } catch(err) {
        res.status(500).send({error: err})
    }
})

export default routes;