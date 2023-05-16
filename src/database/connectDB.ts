import mongoose from "mongoose";
import { Category, CategoryTypes } from "../models/category";
import {User} from '../models/users'
import { Product, ProductTypes } from "../models/products";
import  jwt  from "jsonwebtoken";
const bcrypt = require('bcryptjs');

const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/nodeapi"

const categoryData: CategoryTypes[] = [
    {category: "Salgados", image: "https://d2qcpt1idvpipw.cloudfront.net/recipes/2020/10/salgadinho-de-festa_01092020130106.jpg"},
    {category: "Doces", image: "https://cdn0.casamentos.com.br/vendor/2042/3_2/960/jpg/brigadeiro02_13_122042.jpeg"},
    {category: "Açai", image: "https://anamariabraga.globo.com/wp-content/uploads/2016/11/acai-feito-em-casa-1024x576.jpg"},
    {category: "Sushi", image: "https://spcity.com.br/wp-content/uploads/2016/11/cozinha_arabe-1300x700.jpg"},
    {category: "Cafe", image: "https://www.bloomberglinea.com/resizer/ZZaYML3Ev60ktbvtURmoU-VcNpw=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/QMA63E5VYRE73GKYMOGAX5UBXU.jpg"},
    {category: "Hamburguers", image: "https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_XL.jpg"},
]

const products: ProductTypes[] = [
    {name: 'Café', value: "$R 9,99", category:"Cafe", "image": "https://static1.conquistesuavida.com.br/articles//0/14/58/0/@/33570-investir-em-cafe-para-tomar-no-pre-trein-article_block_media-2.jpg"},
    {name: 'Café 1', value: "$R 10,99", category:"Cafe", "image": "https://static1.conquistesuavida.com.br/articles//0/14/58/0/@/33570-investir-em-cafe-para-tomar-no-pre-trein-article_block_media-2.jpg"},
    {name: 'Café 2', value: "$R 20,99", category:"Cafe", "image": "https://static1.conquistesuavida.com.br/articles//0/14/58/0/@/33570-investir-em-cafe-para-tomar-no-pre-trein-article_block_media-2.jpg"},
    {name: 'Café 3', value: "$R 30,99", category:"Cafe", "image": "https://static1.conquistesuavida.com.br/articles//0/14/58/0/@/33570-investir-em-cafe-para-tomar-no-pre-trein-article_block_media-2.jpg"},
    {name: 'Café 4', value: "$R 40,99", category:"Cafe", "image": "https://static1.conquistesuavida.com.br/articles//0/14/58/0/@/33570-investir-em-cafe-para-tomar-no-pre-trein-article_block_media-2.jpg"},
    {name: 'Café 5', value: "$R 50,99", category:"Cafe", "image": "https://static1.conquistesuavida.com.br/articles//0/14/58/0/@/33570-investir-em-cafe-para-tomar-no-pre-trein-article_block_media-2.jpg"},
    {name: 'Café 6', value: "$R 60,99", category:"Cafe", "image": "https://static1.conquistesuavida.com.br/articles//0/14/58/0/@/33570-investir-em-cafe-para-tomar-no-pre-trein-article_block_media-2.jpg"},
    {name: 'Salgado', value: "$R 60,99", category:"Salgados", "image": "https://www.receiteria.com.br/wp-content/uploads/receitas-de-salgados-para-festa.jpg"},
    {name: 'Salgado 1', value: "$R 60,99", category:"Salgados", "image": "https://www.receiteria.com.br/wp-content/uploads/receitas-de-salgados-para-festa.jpg"},
    {name: 'Salgado 2', value: "$R 60,99", category:"Salgados", "image": "https://www.receiteria.com.br/wp-content/uploads/receitas-de-salgados-para-festa.jpg"},
    {name: 'Salgado 3', value: "$R 60,99", category:"Salgados", "image": "https://www.receiteria.com.br/wp-content/uploads/receitas-de-salgados-para-festa.jpg"},
    {name: 'Açai', value: "$R 60,99", category:"Açai", "image": "https://anamariabraga.globo.com/wp-content/uploads/2016/11/acai-feito-em-casa-1024x576.jpg"},
    {name: 'Açai 1', value: "$R 60,99", category:"Açai", "image": "https://anamariabraga.globo.com/wp-content/uploads/2016/11/acai-feito-em-casa-1024x576.jpg"},
    {name: 'Açai 2', value: "$R 60,99", category:"Açai", "image": "https://anamariabraga.globo.com/wp-content/uploads/2016/11/acai-feito-em-casa-1024x576.jpg"},
    {name: 'Açai 3', value: "$R 60,99", category:"Açai", "image": "https://anamariabraga.globo.com/wp-content/uploads/2016/11/acai-feito-em-casa-1024x576.jpg"},
    {name: 'Açai 4', value: "$R 60,99", category:"Açai", "image": "https://anamariabraga.globo.com/wp-content/uploads/2016/11/acai-feito-em-casa-1024x576.jpg"},
    {name: 'Açai 5', value: "$R 60,99", category:"Açai", "image": "https://anamariabraga.globo.com/wp-content/uploads/2016/11/acai-feito-em-casa-1024x576.jpg"},
    {name: 'Doces', value: "$R 60,99", category:"Doces", "image": "https://www.centromedicoorion.com.br/wp-content/uploads/2016/08/doces-docinhos-caseiros-900x480.jpg"},
    {name: 'Doces', value: "$R 60,99", category:"Doces", "image": "https://www.centromedicoorion.com.br/wp-content/uploads/2016/08/doces-docinhos-caseiros-900x480.jpg"},
    {name: 'Doces 1', value: "$R 60,99", category:"Doces", "image": "https://www.centromedicoorion.com.br/wp-content/uploads/2016/08/doces-docinhos-caseiros-900x480.jpg"},
    {name: 'Doces 2', value: "$R 60,99", category:"Doces", "image": "https://www.centromedicoorion.com.br/wp-content/uploads/2016/08/doces-docinhos-caseiros-900x480.jpg"},
    {name: 'Doces 3', value: "$R 60,99", category:"Doces", "image": "https://www.centromedicoorion.com.br/wp-content/uploads/2016/08/doces-docinhos-caseiros-900x480.jpg"},
    {name: 'Doces 4', value: "$R 60,99", category:"Doces", "image": "https://www.centromedicoorion.com.br/wp-content/uploads/2016/08/doces-docinhos-caseiros-900x480.jpg"},
    {name: 'Hamburguer', value: "$R 60,99", category:"Hamburguers", "image": "https://cdn.minhareceita.com.br/2020/08/hamburguer-angus-fatias-redondas-bacon-desktop.jpg"},
    {name: 'Hamburguer 1', value: "$R 60,99", category:"Hamburguers", "image": "https://cdn.minhareceita.com.br/2020/08/hamburguer-angus-fatias-redondas-bacon-desktop.jpg"},
    {name: 'Hamburguer 2', value: "$R 60,99", category:"Hamburguers", "image": "https://cdn.minhareceita.com.br/2020/08/hamburguer-angus-fatias-redondas-bacon-desktop.jpg"},
    {name: 'Hamburguer 3', value: "$R 60,99", category:"Hamburguers", "image": "https://cdn.minhareceita.com.br/2020/08/hamburguer-angus-fatias-redondas-bacon-desktop.jpg"},
    {name: 'Hamburguer 4', value: "$R 60,99", category:"Hamburguers", "image": "https://cdn.minhareceita.com.br/2020/08/hamburguer-angus-fatias-redondas-bacon-desktop.jpg"},
]


// async function createCategorys(categories: CategoryTypes[]) {
//         if(!(await Category.findOne({category: categories[0].category})))
//             Category.insertMany(categories)  
//                 .then(() => console.log('Categories Data inserted'))
//                 .catch((err) => console.log(`Error: ${err}`));

//             Product.insertMany(products)
//                 .then(() => console.log('Products Data inserted'))
//                 .catch((err) => console.log(`Error: ${err}`));

//             insertUser("user", "user", "1234")

// }

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log('Connected mongoDB')
    } catch(error) {
        console.log(error)
    } 

    // createCategorys(categoryData);
}



