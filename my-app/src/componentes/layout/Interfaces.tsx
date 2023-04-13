export interface Category {
    _id: string
    category: string
    image: string
}

export interface CategoryProps {
    data: Category[];
}

export interface Product {
    _id: string;
    name: string;
    value: string;
    category: string;
    image: string;
}

export interface ProductProps {
    data: Product[];
}
