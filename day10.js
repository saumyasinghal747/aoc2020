//const INPUT = require('./day10.json').SAMPLE
const {INPUT} = require('./day10.json')
function main(){
    const nums = INPUT.split('\n').map(a=>+a).sort((a,b)=>a-b).map(function (value, index,array) {
        if (index===0){
            return value
        }
        return value-array[index-1]
    })
    console.log(nums);
    console.log((nums.filter(a=>a===1).length)*(nums.filter(a=>a===3).length+1))
}

module.exports = main;
if (require.main === module) {
    console.log(main())
}