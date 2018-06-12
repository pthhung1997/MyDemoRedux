
const URL = 'http://10.168.1.46:8080/app/';
export const getAccessToken = (username = 'admin', password = 'admin') => {
    let details= {
        'grant_type': 'password',
        'username': username,
        'password': password
    };
    let formBody = [];
    for (let property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return fetch(URL + 'rest/v2/oauth/token', {
        method: 'POST',
        headers: {
            'Host': '10.168.1.46:8080',
            'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:formBody
    })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson['access_token'])
        })
        .catch((error) => {
            console.error('err: ' + error);
        });
}
