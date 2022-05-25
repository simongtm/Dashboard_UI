export const getHeaders=(config:object|undefined)=>{
        const defaultHeaders: any = {
          "Accept": 'application/json, text/plain',
          'Content-type': 'application/json',
          "Authorization": `Basic ${getToken()}`
        };
 return Object.assign(defaultHeaders, config);
}
export const getToken=()=>{
  return sessionStorage?.getItem("userToken");
}