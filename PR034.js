// 피로도
function solution(k, dungeons) {
    let visited = [];
    let answer = 0;
    for (let i = 0; i < dungeons.length; i++) {
        visited.push(0);
    }
    function DFS(fatigue, count) {
        if (answer <= count) {
            answer = count;
        }
        for (let i = 0; i < dungeons.length; i++) {
            if (fatigue >= dungeons[i][0] && visited[i] === 0) {
                visited[i] = 1;
                DFS(fatigue - dungeons[i][1], count + 1);
                visited[i] = 0;
            }
        }
    }
    DFS(k, 0);
    return answer;
}
