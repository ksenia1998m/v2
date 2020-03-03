export class Stud{
    public surname: string;
    public name: string;
    public middle_name: string;
    public phone: string;
    public email: string;
    public year: string;
    public group: string;
    public specialty: string;
    public id: number;
    constructor (surname: string, name: string, middle_name: string, phone: string, email: string, year: string, group: string, specialty: string, id?: number) {
        this.surname = surname;
        this.name = name;
        this.middle_name = middle_name;
        this.phone = phone;
        this.email = email;
        this.year = year;
        this.group = group;
        this.specialty = specialty;
        this.id = id;
    }
}