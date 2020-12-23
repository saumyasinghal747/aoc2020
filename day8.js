//const INPUT = require('./day8.json').SAMPLE
const {INPUT} = require('./day8.json')

function main() {
    let accumulator = 0;
    /** different cases for instruction: acc, jmp, nop
     * acc is change the accumulator, we need to keep track of this. use += parseInt(..)
     * store the instructions in an array. this way they are ordered and identifiable.
     * define an interface called command
     *  command consists of three fields;
     *      visited (bool)
     *      type (acc|jmp|nop)
     *      param (number)
     * Parse all of the commands into the DS
     * Then, simulate command execution, updating the visited field.
     * Check the visited field before changing the accumulator, and return as necessary.
     */
    const commands = INPUT.split('\n').map((line) => {let a = line.split(' '); return {
        visited: false,
        type:a[0],
        param: parseInt(a[1])
    }})
    function execute(index, indexToChange){
        /**
         * executes the command at given index
         */
        let command = commands[index];
        if (!command) return [true, accumulator];
        if (command.visited) return [false, accumulator];
        commands[index].visited = true;
        let type;
        if (index === indexToChange) {
            //console.log('hi')
            if (command.type === 'nop') {
                type = 'jmp';
            }
            else if (command.type === 'jmp') {
                type = 'nop';
            } else {
                type = 'acc';
            }

        } else {
            type = command.type;
        }
        switch (type){
            case 'acc':
                accumulator += command.param;
                return execute(index+1,indexToChange);
            case 'jmp':
                return execute(index+command.param,indexToChange)
            case 'nop':
                return execute(index+1, indexToChange);
            /*default:
                return JSON.stringify(command);*/
        }
        //return type
        //process.exit()
    }
    console.log(execute(0))
    //return commands;
    let term, acc;
    for (let i=0; i<commands.length; i++){
        commands.forEach(function(command){command.visited=false})
        accumulator = 0;
        let t = execute(0, i);
        [term, acc] = t;
        if (term===true){
            return acc
        }
        /*if (term!==false){
            console.log(t);
        }*/
        console.log(i, [term, acc])
    }
    //return commands.length

}

module.exports = main;
if (require.main === module) {
    console.log(main())
}