function intersection(arrA:Array<any>,arrB:Array<any>){return arrA.filter(x => arrB.includes(x))}
function intersectionMultiple(arrs:Array<Array<any>>){
    return arrs.reduce(intersection)
}
function main(n:number,m:number,d:number,s:number,mlog:Array<Array<number>>,slog:Array<Array<number>>): void{
    // for each sick person
    let suspects = [];
    for (let i = 0; i < slog.length; i++) {
        // determine what milks they drank before the time that they got sick
        const [person, time] = slog[i];
        const milksBefore = mlog.filter(function ([p,m,t]){
            if (p!==person) return false;
            return t < time;
        }).map(log=>log[1])
        suspects.push(milksBefore);

    }
    // find the intersection of those arrays
    const suspicious = intersectionMultiple(suspects)
    //console.log(suspicious)
    // find out how many people drank each milk
    const pcount = suspicious.map(function (milk){
        return mlog.filter(([p,m,t])=>m===milk).length
    })
    // return the max
    console.log( Math.max(...pcount));
}
main(3,4,7,2,[[1,1,1],[1,4,1],[1,3,4],[1,2,2],[3,1,3],[2,1,5],[2,2,7]],[[1,3],[2,8]])