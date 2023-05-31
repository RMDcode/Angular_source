import {CountCapital} from './CountCapital';

// Write test suit
describe('CountCapital', ()=>{

    it('should return Count of Capital words', ()=>{
        const ret = CountCapital("STRING");
        expect(ret).toBe(6);
    })
})