const  lib  =  require('../../lib')
const  Message  =  require('../../src/Message')

test('Hello Message' , () =>{
      expect(Message.greet()).toBe('Hello')
})

test('lib Hello Message' , () =>{
      expect(lib.greet('Kalidas')).toMatch(/Welcome/);
})


test('Hello MessageWithName' , () =>{
      expect(Message.greetName('KK')).toBe('Hello KK');
})