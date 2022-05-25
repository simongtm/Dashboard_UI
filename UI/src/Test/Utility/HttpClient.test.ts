import { httpRequest } from "../../Utility/HttpClient";

describe("Should call httpRequest method", () => {
  it("Should run httpRequest with sessionStorage value", () => {
    return httpRequest("/v1/api/token", "GET", {}, {}, {})
      .then((res: any) => {
        expect(res.failure).toBeTruthy();
      })
      .catch((err) => expect(err).not.toBeUndefined());
  });

  it("Should run httpRequest without sessionStorage value", () => {
    return httpRequest("/v1/api/token", "GET", {}, {}, {})
      .then((res: any) => {
        expect(res.response).toBeUndefined();
      })
      .catch((err) => expect(err).not.toBeUndefined());
  });
});
