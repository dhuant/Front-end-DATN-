export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('res'));
    console.log(user.token);
    if (user.token) {
        return {
            "Access-Control-Allow-Origin": "*",
            'authorization': 'Bearer ' + user.token 
        };
    } else {
        return {};
    }
}