class HttpRequest {

    static get(url, params = {}) {
        return HttpRequest.request('GET', url, params);
    }
    static post(url, params = {}) {
        console.log(params);
        return HttpRequest.request('POST', url, params);
    }
    static put(url, params = {}) {
        return HttpRequest.request('PUT', url, params);
    }
    static delete(url, params = {}) {
        return HttpRequest.request('DELETE', url, params);
    }

    static request(method, url, params = {}) {

        return new Promise((resolve, reject) => {
            const ajax = new XMLHttpRequest();

            ajax.open(method.toUpperCase(), url);

            ajax.onerror = event => {
                reject(event);
            }

            ajax.onload = event => {
                try {
                    resolve(JSON.parse(ajax.responseText));
                } catch (err) {
                    reject(err);
                }
            }

            ajax.setRequestHeader('Content-Type', 'application/json');

            ajax.send(JSON.stringify(params));
        })


    }

}