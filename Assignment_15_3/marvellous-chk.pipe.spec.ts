import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  it('create an instance', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe).toBeTruthy();
  });
});


describe('Pipe: MarvellousChkPipe',()=>{
  it('should return prime, perfect, even, odd',()=>{
    let myMultPipe= new MarvellousChkPipe();

    expect(myMultPipe.transform(6)).toContain("This number is even");
    expect(myMultPipe.transform(3)).toContain("This number is odd");
    //expect(myMultPipe.transform(2)).toContain("This number is prime");
   // expect(myMultPipe.transform(120)).toContain("It is a perfect number");
  });

});
