// export class Pizza{
//     public get image(): string {
//         return this._image;
//     }
//     public set image(value: string) {
//         this._image = value;
//     }
//     public get price(): number {
//         return this._price;
//     }
//     public set price(value: number) {
//         this._price = value;
//     }
//     public get name():string {
//         return this._name;
//     }
//     public set name(value: string) {
//         this._name = value;
//     }
//     public get ingredients():Array<any>{
//         return this._ingredients;
//     }
//     public set ingredients(value:Array<any>){
//         this._ingredients = value;
//     }
//     public get description():string{
//         return this._description;
//     }
//     public set description(value:string){
//         this._description = value;
//     }
//     constructor(private _name: string,private _ingredients: Array<any>,private _image: string,private _price: number,private _description: string){}
// }
export interface Pizza {
    name: string;
    ingredients: Array<string>;
    image: string;
    price:number;
    description:string
 }