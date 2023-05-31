import {Summation} from './ArrayAdd';

// Write test suit
describe('ArrayAdd', ()=>{

    it('should return sum of total array ', ()=>{
        const arr=[1,2,3,4,5];
        const ret = Summation(arr);
        expect(ret).toBe(15);
    })
})