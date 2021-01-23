import { Resource } from './resource';

export class User implements Resource<number> {

    public id: number;
    public address: string;
    public wallet: number;
    public postalCode: string;
    public registrationDate: any;
    public email: string;
    public isLunchLady: boolean;
    public name: string;
    public firstname: string;
    public phone: string;
    public town: string;
    public sex: number;
    public status: number;
    public image: { imagePath: string, image64: string };
    public imageId?: number;
    private password?: string;

    constructor() { }

    createNewUser(form) {
        let user = new User();
        user.address = "non renseigne";
        user.wallet = 0;
        user.postalCode = "non renseigne";
        user.registrationDate = new Date();
        user.email = form.email;
        user.password = form.password
        user.isLunchLady = false;
        user.name = form.name;
        user.firstname = form.firstname;
        user.phone = "non renseigne";
        user.town = "non renseigne";
        user.sex = form.gender;
        user.status = 0;
        user.image = {
            imagePath: `../../../../assets/images/avatars/${form.gender}.png`,
            image64: "non renseigne"
        };
        return user;
    }
}