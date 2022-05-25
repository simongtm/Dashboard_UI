const baseUrl="http://localhost:8081"
export const loginUrl=`${baseUrl}/api/userDetail/user`;
export const registrationUrl=`${baseUrl}/api/userDetail/user`;
export const getOrderDetailUrl=(limit:number,page:number)=>{return `${baseUrl}/api/productDetail/getOrderDetails/${limit}/${page}`}