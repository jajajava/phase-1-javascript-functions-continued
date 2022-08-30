// code your solution here
function saturdayFun(activity='roller-skate'){
    console.log(`This Saturday, I want to ${activity}`)
}
saturdayFun("bathe my dog")

function mondayWork(activity= "go to the office"){
    console.log(`This Monday, I will ${activity}`)
}
mondayWork("work from home")


function wrapAdjective(s="*"){
    return function(phrase= "special"){
      const programmer = "programmer"
      return `You are ${s}a ${phrase} ${programmer}${s}! `
    }
  }  

console.log(wrapAdjective("||")("dedicated"))