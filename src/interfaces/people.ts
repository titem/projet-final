import { Address } from './nursery';

export interface People {
    id?: string;
    photo?: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    address: Address;
}
