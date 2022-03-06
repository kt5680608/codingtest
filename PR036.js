// 오픈채팅방
function solution(record) {
    let answer = [];
    let answers = [];
    let users = {};
    for (let i = 0; i < record.length; i++) {
        let order = record[i].split(" ");
        let action = order[0];
        if (action === "Enter") {
            let uid = order[1];
            let nickname = order[2];
            answer.push([uid, "님이 들어왔습니다."]);
            users[uid] = nickname;
        } else if (action === "Leave") {
            let uid = order[1];
            answer.push([uid, "님이 나갔습니다."]);
        } else if (action === "Change") {
            let uid = order[1];
            let nickname = order[2];
            users[uid] = nickname;
        }
    }
    for (let i = 0; i < answer.length; i++) {
        let nick = users[answer[i][0]];
        answers.push(nick + answer[i][1]);
    }
    return answers;
}

function solution(record) {
    let users = {};
    let answers = [];
    let tmp = [];
    for (let i = 0; i < record.length; i++) {
        let splited = record[i].split(" ");
        let action = splited[0];
        let uid = splited[1];
        let nickname = splited[2];
        // enter
        if (action === "Enter" || action === "Change") {
            users[uid] = nickname;
        }
    }
    for (let i = 0; i < record.length; i++) {
        let splited = record[i].split(" ");
        let action = splited[0];
        let uid = splited[1];
        if (action === "Enter") {
            answers.push(users[uid] + "님이 들어왔습니다.");
        }
        if (action === "Leave") {
            answers.push(users[uid] + "님이 나갔습니다.");
        }
    }
    return answers;
}
