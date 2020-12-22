function intersection(arrA, arrB) { return arrA.filter(function (x) { return arrB.includes(x); }); }
function intersectionMultiple(arrs) {
    return arrs.reduce(intersection);
}
function main(n, m, d, s, mlog, slog) {
    // for each sick person
    var suspects = [];
    var _loop_1 = function (i) {
        // determine what milks they drank before the time that they got sick
        var _a = slog[i], person = _a[0], time = _a[1];
        var milksBefore = mlog.filter(function (_a) {
            var p = _a[0], m = _a[1], t = _a[2];
            if (p !== person)
                return false;
            return t < time;
        }).map(function (log) { return log[1]; });
        suspects.push(milksBefore);
    };
    for (var i = 0; i < slog.length; i++) {
        _loop_1(i);
    }
    // find the intersection of those arrays
    var suspicious = intersectionMultiple(suspects);
    //console.log(suspicious)
    // find out how many people drank each milk
    var pcount = suspicious.map(function (milk) {
        return mlog.filter(function (_a) {
            var p = _a[0], m = _a[1], t = _a[2];
            return m === milk;
        }).length;
    });
    // return the max
    console.log(Math.max.apply(Math, pcount));
}
main(3, 4, 7, 2, [[1, 1, 1], [1, 4, 1], [1, 3, 4], [1, 2, 2], [3, 1, 3], [2, 1, 5], [2, 2, 7]], [[1, 3], [2, 8]]);
//# sourceMappingURL=cows.js.map