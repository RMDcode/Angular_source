import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  it('create an instance', () => {
    const pipe = new MyMultPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('Pipe: My-MultPipe',()=>{
  it('should return multiplication of two numbers',()=>{
    let myMultPipe= new MyMultPipe();

    expect(myMultPipe.transform(7,3)).toEqual(21);

  });

});
