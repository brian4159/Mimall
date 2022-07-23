let baseURL;
switch(process.env.NODE_ENV){
    case 'dev':
        baseURL = 'http://dev-mall/'
}



export default {
    baseURL
}