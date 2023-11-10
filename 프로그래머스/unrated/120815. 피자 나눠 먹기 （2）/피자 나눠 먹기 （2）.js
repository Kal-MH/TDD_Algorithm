function solution(n) {
    let i = 1;
    
    while (i <= 1000) {
        if ((n * i) % 6 === 0) break;
        i++;
    }
    
    return parseInt((n * i) / 6);
}