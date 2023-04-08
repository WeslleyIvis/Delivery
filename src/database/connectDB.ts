import mongoose from "mongoose";
import { Category, CategoryTypes } from "../models/category";

const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/nodeapi"

const categoryData: CategoryTypes[] = [
    {category: "Salgados", image: "https://d2qcpt1idvpipw.cloudfront.net/recipes/2020/10/salgadinho-de-festa_01092020130106.jpg"},
    {category: "Doces e bolos", image: "https://cdn0.casamentos.com.br/vendor/2042/3_2/960/jpg/brigadeiro02_13_122042.jpeg"},
    {category: "Açai", image: "https://anamariabraga.globo.com/wp-content/uploads/2016/11/acai-feito-em-casa-1024x576.jpg"},
    {category: "Cozinha árabe", image: "https://spcity.com.br/wp-content/uploads/2016/11/cozinha_arabe-1300x700.jpg"},
    {category: "Cafeteria", image: "https://www.bloomberglinea.com/resizer/ZZaYML3Ev60ktbvtURmoU-VcNpw=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/QMA63E5VYRE73GKYMOGAX5UBXU.jpg"},
    {category: "hamburgueria", image: "https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_XL.jpg"},
]

async function createCategorys(categories: CategoryTypes[]) {
        if(!(await Category.findOne({category: categories[0].category})))
            Category.insertMany(categories)  
                .then(() => console.log('Categories Data inserted'))
                .catch((err) => console.log(`Error: ${err}`));
}

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log('Connected mongoDB')
    } catch(error) {
        console.log(error)
    } 

    createCategorys(categoryData);
}



