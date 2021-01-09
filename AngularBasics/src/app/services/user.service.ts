import { EventEmitter } from "@angular/core";

export class UserService{

    userAddedEvent = new EventEmitter<boolean>();

    getUser(id:string){
        if (id==='1') {
            return{
                id:'1',
                name:'Asiri'
            }
        }else{
            return{
                id:'2',
                name:'Senith'
            }
        }
    }

    addUser(){
        this.userAddedEvent.emit(true);
    }
}