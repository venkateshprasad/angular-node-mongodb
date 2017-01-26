import {Component}  from "@angular/core";
import {DataService} from "../reusables/data.service";
import {Router} from '@angular/router';
@Component({
    selector:'login',
    templateUrl:'./app/modules/authentication/login.html',
    providers:[DataService]
})
export class Login{
    users:any = null;
    user:any = {};
    constructor(public router:Router,public data:DataService){
        this.users = this.data.getUsers();
    }
    login(item){
        this.users.filter((obj) =>{
            if(obj.name == item.login && obj.password == item.password){
                this.router.navigate(['/home']);
            }
        })
    }
    clear(){
        
    }
}