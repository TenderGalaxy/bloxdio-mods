/*
Runtime tester: Check the amount of time it takes to run code in microseconds
2025
*/

`
Theory: Add operations until it halts at 5000 IU
`
tu = {
  a: [0],
  func(){
    return 0
  },
  step1(){
    while(1){;}
  },
  step2(){
    tu.func()
    tu.i = 1000
    tu.interruptions = tu.i * 3 + 6
    while(tu.i--){tu.a.copyWithin(0,1)}
    while(true){tu.interruptions++}
  },
  step3(){
    tu.func()
    tu.i = 4999 - tu.interruptions
    while(tu.i--){;}
    tu.t = 0
    while(true){
      tu.i = 4997
      while(tu.i--){;}
      eval('tu.t=0,tu.t++' + ',tu.t++'.repeat(1000))
    }
  },
  get(){
    return tu.t
  }
}
for(let i = 0; i < 12; i++){
  tu.a = tu.a.concat(tu.a)
}
/*
Code Block 1:
tu.func = (FUNCTION)
tu.init()
Code Block 2:
(Run Code)
tu.measure()
Code Block 3:
*/
