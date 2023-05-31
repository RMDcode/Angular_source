import {CheckPassword} from './CheckPassword';

// Write test suit
describe('CheckPassword', ()=>{

    it('should return validated passoword', ()=>{
        const pass="ABcde12#";
        const ret = CheckPassword(pass);
        expect(ret).toBe("password is valid");
    })
})