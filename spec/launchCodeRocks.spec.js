const launchOutput = require('../launchCodeRocks.js');
const assert = require('assert');

describe("launchOutput", function(){

  //testing code here...
  it("returns 'Launch!' when passed a number that is only divisible by 2", function(){
    let outPut = launchOutput(2);
    assert.strictEqual(outPut,"Launch!")
  });
  it("returns 'Code!' when passed a number that is only divisible by 3",function(){
    let outPut = launchOutput(3);
    assert.strictEqual(outPut,"Code!")
  });
  it("returns 'Code!' when passed a number that is only divisible by 3",function(){
    let outPut = launchOutput(3);
    assert.strictEqual(outPut,"Code!")
  });
  it("returns 'LaunchCode!' when passed a number that is only divisible by 2 and 3",function(){
    let outPut = launchOutput(6);
    assert.strictEqual(outPut,"LaunchCode!")
  });
  //3&5
  it("returns 'Code Rocks!' when passed a number that is only divisible by 3&5",function(){
    let outPut = launchOutput(15);
    assert.strictEqual(outPut,"Code Rocks!");
  });
  //2&5
  it("returns 'Launch Rocks!' when passed a number that is only divisible by 2 &5",function(){
    let outPut = launchOutput(10);
    assert.strictEqual(outPut,"Launch Rocks! (CRASH!!!!)");
  });
  //2,3&5
  it("returns 'LaunchCode Rocks!' when passed a number that is only divisible by 2,3&5",function(){
    let outPut = launchOutput(30);
    assert.strictEqual(outPut,"LaunchCode Rocks!");
  });
  it("returns 'Rutabagas' when passed a number Not divisible by 2,3 or 5",function(){
    let outPut = launchOutput(7);
    assert.strictEqual(outPut,"Rutabagas! That doesn't work.");
  });
});