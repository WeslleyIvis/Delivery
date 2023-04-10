import mongoose, { Mongoose, mongo } from "mongoose";

export interface ProductTypes {
    name: String;
    value: String;
    category: String;
    image: String;
}

const ProductSchema = new mongoose.Schema<ProductTypes>({
    name: {type: String, required: true},
    value: {type: String, required: true},
    category: {type: String, required: true},
    image: {type: String, required: false}
})

export const Product = mongoose.model<ProductTypes>('Product', ProductSchema)