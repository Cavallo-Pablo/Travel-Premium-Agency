import { Travel, User } from "./models.module"

export interface IAdmin {
    id?: number | null,
    userName: string | null,
    password: string | null
}
export interface IUser {
    id?: number | null,
    lastName: string | null,
    name: string | null,
    dni: string | null,
    birthdate: string | null,
    email: string | null,
    userName: string | null,
    password: string | null
}
export interface IMessage {
    id?: number | null,
    name: string | null,
    subject: string | null,
    email: string | null,
    phone: string | null,
    message: string | null
}
export interface ITravel {
    id?: number | null;
    province: string | null;
    place: string | null;
    activities: string | null;
    image: string | null;
    description: string | null;
    price: number | null;
}
export interface IBuys {
    id?: number | null,
    users: IUser | null,
    travels: ITravel | null,
    amount: number | null ,
    quantity: number| null
}

