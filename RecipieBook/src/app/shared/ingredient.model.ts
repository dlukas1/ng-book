export class Ingredient{
    name: string;
    amount: number;
    constructor(public iname: string, public iamount: number) {
        this.name = iname;
        this.amount = iamount;
    }
}