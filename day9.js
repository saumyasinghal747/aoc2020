//const INPUT = require('./day9.json').SAMPLE
const {INPUT} = require('./day9.json')
const N = 25;
function main() {
    const nums = INPUT.split('\n').map(a=>+a);
    let n;
    for (let i = N; i < nums.length; i++) {
        const target = nums[i];
        const addends = nums.slice(i-N,i);
        //console.log(addends)
        if (addends.filter(function (a){
            return addends.includes(target-a) && a*2!==target
        }).length===0){
            n = target;
            break;
        }
    }
    // through all of the starting numbers
    for (let i = 0; i < nums.length-2; i++) {
        let addends = nums.slice(i,i+1);
        for (let j = i+1; j < nums.length;j++){
            addends.push(nums[j])
            // so now we have a list of length 2: nums[i], nums[i+1]
            const sum = addends.reduce((a,b)=>a+b,0);
            if (sum===n){
                // success!!!!
                return Math.max(...addends)+Math.min(...addends);
            }
            else if (sum > n){
                break;
                // no need to keep adding
            }

        }
    }

}

module.exports = main;
if (require.main === module) {
    console.log(main())
}