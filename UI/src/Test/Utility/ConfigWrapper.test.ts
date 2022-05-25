import { getHeaders, getToken } from "../../Utility/ConfigWrapper";

describe('ConfigWrapper test cases', () => {
    beforeEach(()=>{
        sessionStorage.setItem("userToken","test")
    })
    afterEach(()=>{
        sessionStorage.removeItem("userToken");
    })
    test('Should get return the parameter headers and defaulted one', () => {
      const configHeader: any = {
        testHeader: 'test',
      };
      sessionStorage.setItem("userToken","test")
      let result = {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
        'Authorization':`Basic ${getToken()}`,
        testHeader: 'test',
      };
      expect(getHeaders(configHeader)).toEqual(result);
    });
    test('Should get return defaulted header if parameter is undefined', () => {
      let result = {
        Accept: 'application/json, text/plain',
        'Content-type': 'application/json',
        'Authorization':`Basic ${getToken()}`,
      };
      expect(getHeaders(undefined)).toEqual(result);
    });
  });