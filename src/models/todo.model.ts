import { FormControl } from "@angular/forms";

export interface Todo {
    id: number,
    name: string;
    description: string;
}

export interface ProductInterface {
    name: string;
    price: number;
    qty: number;
}

export interface UserFormModel {
    name:FormControl<string>;
    email: FormControl<string>;
    age:FormControl<number>;
}