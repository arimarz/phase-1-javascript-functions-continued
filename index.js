// code your solution here
function saturdayFun(activity= "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
    };
  function wrapAdjective(sign= "*") {
    return function (wrap = 'special') {
        return `You are ${sign}${wrap}${sign}!`;
    }
  }  ;


// function wrapAdjective(sign) {
//     function () {
//         const wrap= "special";
//         console.log(`You are ${sign}${wrap}${sign}`);
//     }
// };
// const encouragingPromptFunction = wrapAdjective("!!!")