import * as bcrypt from 'bcrypt';


export class HashPassword {


    async hashPassword(password: string) {
        const saltOrRounds = 10;
        return await bcrypt.hash(password, saltOrRounds);
    }
    async comparePassword(password:string,hash:string){
        return await bcrypt.compare(password,hash);
    }
}