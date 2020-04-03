function getData(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            }
            else {
                reject({
                    status: this.status,
                    statusText: this.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: this.statusText
            });
        };
        xhr.send();
    });
}
function printData(data) {
    console.log(JSON.parse(data));
}
getData("GET", "https://jsonplaceholder.typicode.com/users").then(printData);
