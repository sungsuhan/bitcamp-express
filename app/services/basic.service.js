exports.bmi = (payload) => {
    const {name, height, weight} = payload
    console.log(' ### 진입 ### ')
    let _height = Number(height);
    let _weight = Number(weight);
    
    let bmi = _weight*10000/Math.pow(_height,2);
  
    let output = Math.round(bmi);
    var result = {name, height, weight}
  
    console.log(`계산중인 값들 : ${JSON.stringify(result)}`)
    if (output < 18.5)
      result.bmi = "저체중"
    if (output >= 18.5 && output<= 25)
      result.bmi = "보통"
    if (output > 25 && output <= 30)
      result.bmi = "과체중"
    if (output > 30)
      result.bmi = "비만"
      console.log(`계산 끝난 값들 : ${JSON.stringify(result)}`)
  
    return result
  }
  
exports.calc = (payload) => {
    const {num1, opcode, num2} = payload
    console.log(' ### 진입 ### ')
    let _num1 = Number(num1);
    let _num2 = Number(num2);
    let res = 0;
    var result = {num1, opcode, num2, res}
  
    console.log(`계산중인 값들 : ${JSON.stringify(result)}`)
    if(opcode == '+') {
      result.res = _num1 + _num2;
    }
    else if(opcode == '-') {
      result.res = _num1 - _num2; 
    }
    else if(opcode == '*') {
      result.res = _num1 * _num2; 
    }
    else if(opcode == '/') {
      result.res = _num1 / _num2; 
    }
    if (opcode == '%') {
      result.res = _num1 % _num2
    }
    console.log(`계산 끝난 값들 : ${JSON.stringify(result)}`)
    
    return result
  }
