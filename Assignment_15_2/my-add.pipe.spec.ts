import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  it('create an instance', () => {
    const pipe = new MyAddPipe();
    expect(pipe).toBeTruthy();
  });
});


describe('Pipe: My-AddPipe',()=>{
  it('should return addition of two numbers',()=>{
    let myAddPipe= new MyAddPipe();

    expect(myAddPipe.transform(8,3)).toEqual(11);

  });

});
