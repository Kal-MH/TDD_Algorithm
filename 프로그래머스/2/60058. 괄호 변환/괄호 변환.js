function parse(pArr) {
    let left = 0, right = 0;
    let correct = true;
    const stack = [];
    
    for(let i = 0; i < pArr.length; i++) {
        if (pArr[i] === '(') {
            left++;
            stack.push('(')
        } else {
            right++;
            if (stack.length === 0) {
                correct = false;
            } else {
                stack.pop();
            }
        }
        
        if (left === right) {
            return [i + 1, correct]
        }
    }
    
    return [0, false];
}


function solution(p) {
    if (p.length === 0) return '';
    
    const [index, correct] = parse(p);
    
    const u = p.slice('').slice(0, index);
    const v = p.slice('').slice(index, p.length);
    
    
    if (correct) return u + solution(v);
    
    let answer = '(' + solution(v) + ')';
    for(const c of u.slice(1, u.length - 1)) {
        if (c === '(') {
            answer += ')'
        } else {
            answer += '('
        }
    }
    
    return answer;
}