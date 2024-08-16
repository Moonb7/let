class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    const response = await fetch(url);
    if (response.status == 200) { // 통신이 성공하여 데이터가 정상적인지 확인
        return response.json();
    } else {
        throw new HttpError(response);
    }
}

async function koreanMovie() {
    let res;
    try {
        res = await loadJson(`https://klassic-quote-api.mooo.com/v1/random-quote`) // 어쩃든 json형태의 데이터 객체를 반환합니다
    } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
            alert("무언가 에러가 발생했군요!");
            return koreanMovie(); // 메세지를 보내주고 다시 재실행
        }
        else {
            throw err; // 아에 문제가 생기면 해당 에러를 띄어 줍니다.
        }
    }

    if (res) {
        alert(`${res.author}: ${res.quote}`);
        return res;
    }

}
koreanMovie();

// 실제 정답 다소 내용이 조금 달랐다 while (true) 부분은 빼도 될 거 같다.
// async function loadJson(url) {
//     const response = await fetch(url);
//     if (response.status == 200) { // 통신이 성공하여 데이터가 정상적인지 확인
//         return response.json();
//     } else {
//         throw new HttpError(response);
//     }
// }
// async function koreanMovie() {
//     let res;
//     while (true) {
//         try {
//             res = await loadJson(`https://klassic-quote-api.mooo.com/v1/random-quote`);
//             break;
//         } catch (err) {
//             if (err instanceof HttpError && err.response.status == 404) {
//                 alert("무언가 에러가 발생했군요!");
//                 return koreanMovie(); // 메세지를 보내주고 다시 재실행
//             } else {
//                 throw err; // 아에 문제가 생기면 그냥 에러를 띄어 줍니다.
//             }
//         }
//     }
//     alert(`${res.author}: ${res.quote}`);
//     return res;
// }
// koreanMovie();