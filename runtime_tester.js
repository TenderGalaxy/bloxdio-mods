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
    tu.interruptions = 4983 - tu.i * 3
    while(tu.i--){tu.a.copyWithin(0,1)}
    while(true){tu.interruptions--}
  },
  step3(){
    tu.func() // tu.inter
    tu.i = 5000 - tu.interruptions
    while(tu.i--){;} // 1
    tu.t = 0
    while(true){
      eval(tu.ex) //5000
      tu.t++
	  eval('') // Interruption point
    }
  },
  get(){
    return tu.t
  }
}
tu.ex = ';'.repeat(4998)
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
