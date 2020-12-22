const {INPUT} = require('./day7.json');
//const INPUT = require('./day7.json').SAMPLE;
function main(){
    let arules = INPUT.split('\n').map(function (line){
        const m = /(\w* \w*) bags contain ((?:\d* \w* \w* bags?(, )?)+|no other bags)./gm.exec(line);
        //if (m===null) console.log(line);
        return  [m[1],m[2].split(', ').map(phrase => phrase.split(' ')).map(words => [words[0],[words[1],words[2]].join(' ')] )]
    })
    // now we need to convert this to an object
    let rules = {};
    let winners = new Set();
    for (const arul of arules){
        let tmp = {};
        for (const i of arul[1]){
            if (i[1]==='other bags'){
                continue;
            }
            tmp[i[1]] = +i[0];

        }
        rules[arul[0]] = tmp;
    }
    function containsShinyGold(color){
        if (rules[color]==={}) return false;
        if (rules[color]['shiny gold']) return true;
        else return Object.keys(rules[color]).map(containsShinyGold).includes(true)
    }
    function countBags(color){
        if (rules[color]==={}) return 0;
        return  Object.keys(rules[color]).map(function (c){

            let a = (rules[color][c] * countBags(c)) +rules[color][c];
            //console.log(`${color} bags contain ${rules[color][c]} ${c} bags, for a total of ${a}`)
            return a;
        }).reduce((a,b) => a+b, 0);
    }

     //console.log(arules.map(a=>a[0]).filter(containsShinyGold).length);
    console.log(rules)
    return countBags('shiny gold');


}




console.dir(main())
//main()