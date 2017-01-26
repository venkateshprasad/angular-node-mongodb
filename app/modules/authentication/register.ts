import {Component}  from "@angular/core";
import {DataService} from '../reusables/data.service';
@Component({
    selector:'register',
    templateUrl:'./app/modules/authentication/register.html',
    providers:[DataService]
})
export class Register{
    users:any = {};
    user:any = {};
    constructor(public data:DataService){
        this.users = this.data.getUsers();
    }
    register(item){
        var temp = this.users.filter(obj=> obj.name == item.name);
        if(temp.length == 0){
            this.data.saveUser(item).then(()=>{
                alert("done");
            });
        }
            
    }
    clear(){

    }
}