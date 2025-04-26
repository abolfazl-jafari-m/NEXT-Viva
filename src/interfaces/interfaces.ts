export interface Product {
    createdAt: string;
    title: string;
    slug: string;
    shortDes: string;
    description: string;
    price: string;
    releaseYear: string;
    brand: string;
    volume: (string)[];
    concentration: string;
    gender: string;
    season: (string)[];
    position: (string)[];
    fragrance: (string)[];
    inventory: string;
    images: (string)[];
    comments: Comment[];
    id: string;
    discount: string
}

export interface Order {
    createdAt: string;
    customer_name: string;
    customer_address: string;
    customer_phone: string;
    deliver_time : string | null;
    status: string;
    totalPrice: string;
    items: (OrderItem)[];
    id: string;
}

export interface OrderItem {
    title: string;
    volume: string;
    price: string;
    quantity: string;
}

export interface UserInterface {
    email: string;
    name: string;
    role: string;
    avatar: string;
    createdAt: string;
}

export interface SignInIterFace {
    email: string;
    name: string;
    lastName: string;
    phoneNumber: string;
    role: string;
    password: string,
    address: string;
}

export interface ProductsForm {
    title: string;
    shortDes: string;
    price: string;
    releaseYear: string;
    brand: { label: string, value: number };
    volume: { label: string, value: number }[];
    concentration: { label: string, value: number };
    gender: { label: string, value: number };
    seasons: { label: string, value: number }[];
    positions: { label: string, value: number }[];
    fragrance: { label: string, value: number }[];
    inventory: string;
    description: string;
    images: string[];
    discount: string
}

export type Comment = {
    user_name: string;
    comment: string;
}

export type CartItem = {
    id: string;
    title: string;
    image: string
    price: string;
    quantity: string;
    volume: string;
}