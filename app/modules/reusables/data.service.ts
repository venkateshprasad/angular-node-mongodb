import {Injectable} from '@angular/core';

@Injectable()
export class DataService{
    users:any = [
                    {name:'venkatesh',password:12345,email:'venkatesh.m001@gmail.com',mobile:7702476417},
                    {name:'raj',password:12345,email:'venkatesh.m001@gmail.com',mobile:7702476417},
                    {name:'prasad',password:12345,email:'venkatesh.m001@gmail.com',mobile:7702476417},
                    {name:'ram',password:12345,email:'venkatesh.m001@gmail.com',mobile:7702476417}
                ];
    constructor(){

    }

    getUsers(){
        return this.users;
    }
    saveUser(item){
        this.users.push(item);
        return new Promise((resolve,reject)=>{
            resolve();
        },{
            reject();
        })
    }
    verifyUser(item:any):boolean{
        var returnVal = false;
        this.users.filter(obj=>{
            if(obj.name == item.name && obj.password == item.password){
                returnVal = true;
            }
        })
        return returnVal;
    }
}
