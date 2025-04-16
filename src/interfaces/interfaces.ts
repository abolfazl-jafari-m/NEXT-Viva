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
    comments: (string)[];
    id: string;
}

export interface Order {
    createdAt: string;
    customer_name: string;
    customer_address: string;
    customer_phone: string;
    deliver_time: string;
    status: string;
    totalPrice: string;
    items: (OrderItems)[];
    id: string;
}

export interface OrderItems {
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