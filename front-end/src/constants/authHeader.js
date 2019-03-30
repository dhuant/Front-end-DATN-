export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user.accessToken);
    if (user && user.token){
        return {
            "Access-Control-Allow-Origin": "*",
            'authorization': 'Bearer ' + user.token 
        };
    } else if (user && user.accessToken){
        return {
            "Access-Control-Allow-Origin": "*",
            'authorization': 'Bearer ' + user.accessToken
        };
    }
}