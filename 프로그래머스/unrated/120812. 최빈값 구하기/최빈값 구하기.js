function solution(array) {
    const m = new Map();
    for(const a of array) m.set(a, (m.get(a) || 0) + 1);
    
    const mArr = [...m].sort((a, b) => b[1] - a[1])
    return mArr.length === 1 || mArr[0][1] > mArr[1][1] ? mArr[0][0] : -1;
}