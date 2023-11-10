function solution(slice, n) {
    let pizzaCnt = 1;
    
    while (true) {
        if ((slice * pizzaCnt) / n >= 1) break;
        pizzaCnt++;
    }
    
    return pizzaCnt;
}