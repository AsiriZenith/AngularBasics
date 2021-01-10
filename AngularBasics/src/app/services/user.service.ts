import { Subject } from "rxjs";

export class UserService {

    private userAddedEvent = new Subject<boolean>();

    getUser(id: string) {
        if (id === '1') {
            return {
                id: '1',
                name: 'Asiri'
            }
        } else {
            return {
                id: '2',
                name: 'Senith'
            }
        }
    }

    addUser() {
        this.userAddedEvent.next(true);
    }

    userAddedEventStatue() {
        return this.userAddedEvent;
    }
}