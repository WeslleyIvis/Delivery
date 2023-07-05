import mongoose from "mongoose";

const mongoURI = process.env.ATLAS_URI || ""

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
        .then(() => console.log('Connected mongoDB'))
    } catch(error) {
        console.log(error)
    } 

    
}



