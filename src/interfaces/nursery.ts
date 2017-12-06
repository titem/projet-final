import { User } from './user';

export interface Nursery {
    id?: string;
    name: string;
    img?: string;
    email?: string;
    phone?: string;
    website?: string;
    address: Address;
    description?: string;
    staffNumber?: number;
    openingHours?: string;
    admissionConditions?: string;
    capacity?: number;
    ageLimits?: string;
    comments?: Comment[];
}

export interface Address {
    street: string;
    postalCode: number;
    city: string;
}

export interface Comment {
    id?: string;
    user: User | string;
    rating: number;
    text: string;
}
