function solution(numer1, denom1, numer2, denom2) {
    const answer = [];
    
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;
    
    const bound = numer < denom ? numer : denom;
    let maxDivisor = 1;
    for(let i = 2; i <= bound; i++) {
        if (numer % i === 0 && denom % i === 0) {
            maxDivisor = i;
        }
    }
    
    return [numer/maxDivisor, denom/maxDivisor];
}