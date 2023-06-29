
export class UserService {

    getUser(id : string){
        if(id == '1'){
            return{
                id : '1',
                name : 'premss'
            }
        }else{
            return{
                id : '1',
                name : 'ps'
            }
        }
    }
}