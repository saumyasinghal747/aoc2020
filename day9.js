//const INPUT = require('./day9.json').SAMPLE
const {INPUT} = require('./day9.json')
const N = 5;
function main() {
    const nums = INPUT.split('\n').map(a=>+a);
    for (let i = N; i < nums.length; i++) {
        const target = nums[i];
        const addends = nums.slice(i-N,i);
        //console.log(addends)
        if (addends.filter(function (a){
            return addends.includes(target-a) && a*2!==target
        }).length===0){
            return target
        }
    }

}

module.exports = main;
if (require.main === module) {
    console.log(main())
}