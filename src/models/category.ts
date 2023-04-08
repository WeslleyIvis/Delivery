import mongoose from "mongoose";

export interface CategoryTypes {
    category: String;
    image: String;
}

const CategorySchema = new mongoose.Schema<CategoryTypes>({
    category: {type: String, required: true, unique: true},
    image: {type: String, required: true}
})

export const Category = mongoose.model<CategoryTypes>('Categories', CategorySchema)