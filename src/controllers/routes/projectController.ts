import express from 'express';
import authMiddleware from '../middlewares/auth';
import { Product } from '../../models/products';
import { Category } from '../../models/category';

const router = express.Router();

router.use(authMiddleware);

router.get('/',async (req, res) => {
    res.send({ok: true, user: (req as any).userId});
});

router.get('/product', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).send(products); 
    } catch(err) {
        res.status(500).send({error: err});
    }
})

router.post('/product', async (req, res) => {
    const { name, value, category } = req.body;

    try {
        if(await Product.findOne({name})) 
            return res.status(400).send({error: 'Product already exists'})
     
        if(!name || !value || !category)  {
            return res.status(400).send({error: 'Data needs to be filled in'})
        }
        
        if(!(await Category.findOne({category: category}))) {
            return res.status(400).send({error: 'Category does not exist'})
        }

        const product = await Product.create(req.body);
        
        return res.send({produto: product, token: (req as any).userId});    

    } catch(err) {
        res.send({error: err})
    }
})

router.get('/product/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
 
        if (!product) {
            return res.status(404).send({error: "Product not found"})
        }
        
        res.status(200).send(product);
    } catch (err) {
        res.send({error: "Product does not exist"})
    }
})

router.patch('/product/:id', async (req, res) => {
    const { id } = req.params;
    const {name, value, category, image} = req.body;

    try {
        const product = await Product.findById(id);

        if(!product) {
            return res.status(404).send({error: "Product not found"})
        }

        if(category) {
            product.category = category;
            if(!(await Category.findOne({category: category}))) {
                return res.status(400).send({error: 'Category does not exist'})
            }
        }

        if(name) {
            product.name = name;
        }
        if(value) {
            product.value = value;
        }

        if(image) {
            product.image = image;
        }

        await product.save();

        return res.status(200).send(product);
    } catch (err) {
        res.status(400).send({error: err});
    }
})




export default router;