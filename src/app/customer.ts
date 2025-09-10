export class Customer {
  constructor(
    public id : number,
    public firstName : string,
    public lastName : string,
    public email : string,
    public createdAt?: Date,
    public updatedAt?: Date
  ){};
}
