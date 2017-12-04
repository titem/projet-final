import { User } from './user';
import { Address } from './people';

export interface Nursery {
    id?: string,
    name: string,
    email?: string,
    phone?: string,
    website?: string,
    address: Address,
    description?: string,
    staffNumber?: number,
    openingHours?: string,
    admissionConditions?: string,
    capacity?: number,
    ageLimits?: string,
    comments?: Comment[]
}

export interface Comment {
    id?: string,
    user: User | string,
    rating: number,
    text: string
}
