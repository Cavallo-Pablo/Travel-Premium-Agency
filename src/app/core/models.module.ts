import { IAdmin, IBuys, IMessage, ITravel, IUser } from "./entity";

export class Admin implements IAdmin {
    id?: number | null = null;
    userName: string | '';
    password: string | '';
    constructor(admin?: any) {
        this.userName = admin == undefined ? '' : admin.userName;
        this.password = admin == undefined ? '' : admin.password;
    }
}
export class User implements IUser {
    id?: number | null = null;
    email: string = '';
    password: string = '';
    lastName: string | '';
    name: string | '';
    dni: string | '';
    birthdate: string | '';
    userName: string | '';
    constructor(user?: any) {
        this.id = user == undefined ? null : user.id;
        this.email = user == undefined ? '' : user.email;
        this.password = user == undefined ? '' : user.password;
        this.lastName = user == undefined ? '' : user.lastName;
        this.name = user == undefined ? '' : user.name;
        this.dni = user == undefined ? '' : user.dni;
        this.birthdate = user == undefined ? '' : user.birthdate;
        this.userName = user == undefined ? '' : user.userName;

    }

}
export class Message implements IMessage {
    id?: number | null;
    name: string | null;
    subject: string | null;
    email: string | null;
    phone: string | null;
    message: string | null;
    constructor(message?: any) {
        this.id = message.id != null ? message.id : null;
        this.name = message.name != null ? message.name : null;
        this.subject = message.subject != null ? message.subject : null;
        this.email = message.email != null ? message.email : null;
        this.phone = message.phone != null ? message.phone : null;
        this.message = message.message != null ? message.message : null;
    }


}
export class Travel implements ITravel {
    id?: number | null;
    province: string | null;
    place: string | null;
    activities: string | null;
    image: string | null;
    description: string | null;
    price: number | null;
    constructor(travel?: any) {
        this.id = travel.id != null ? travel.id : null;
        this.province = travel.province != null ? travel.province : null;
        this.place = travel.place != null ? travel.place : null;
        this.activities = travel.activities != null ? travel.activities : null;
        this.image = travel.image != null ? travel.image : null;
        this.description = travel.description != null ? travel.description : null;
        this.price = travel.price != null ? travel.price : null;
    }
}
export class Buys implements IBuys {
    id: number | null;
    users: User | null;
    travels: Travel | null;
    amount: number | null;
    quantity: number | null;

    constructor(buys?: any) {
        this.id = buys.id != null ? buys.id : null;
        this.users = buys.users != null ? buys.users : null;
        this.travels = buys.travels != null ? buys.travels : null;
        this.amount = buys.amount != null ? buys.amount : null;
        this.quantity = buys.quantity != null ? buys.quantity : null;
    }
}