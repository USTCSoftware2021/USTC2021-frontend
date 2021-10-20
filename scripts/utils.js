function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(response => response.json())
}

function getData(url) {
    return fetch(url).then(res => res.json())
}


// 首先尝试访问一次 url，看是否已经有结果，如果没有，则先等待一段时间（timeBeforeRequest）
//（不同的方法需要不同的初始等待时间）
// 随后进行一定间隔（interval）的有限次数（retry）的请求
function waitUntilSuccess(url, timeBeforeRequest, interval, retry) {
    return new Promise((resolve, reject) => {
        recurseRequest(url, 0, 0, resolve, () => {
            setTimeout(() => {
                recurseRequest(url, interval, retry, resolve, reject)
            }, timeBeforeRequest)
        })
    })
}

function recurseRequest(url, interval, times, resolve, reject) {
    fetch(url).then(res => res.json())
        .then((obj) => {
            if (obj.status == "Success") {
                resolve(obj)
                return
            }
            else if (obj.status == "Failed" | times == 0) {
                reject()
            }
            else if (times > 0) {
                setTimeout(() => {
                    recurseRequest(url, interval, times - 1, resolve, reject)
                }, interval);
            }
        })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitUntilSuccessAsync(url, timeBeforeRequest, interval, retry) {
    let obj = await (await fetch(url)).json()
    if (obj.status == "Success") {
        return obj
    } else {
        await sleep(timeBeforeRequest)
        while (obj.status != "Success" && retry > 0) {
            await sleep(interval)
            obj = await (await fetch(url)).json()
        }
        if (obj.status == "Success") {
            return obj
        } else {
            throw Error()
        }
    }
}
