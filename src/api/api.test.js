import { apiCall } from "./api";

describe("apiCall", () => {
  let mockData;
  let mockJson;
  let mockFetch;
  beforeEach(() => {
    mockData = {};

    mockJson = jest.fn();
    mockJson.mockReturnValue(Promise.resolve(mockData));

    mockFetch = jest.fn();
    mockFetch.mockReturnValue(
      Promise.resolve({
        json: mockJson
      })
    );
  });

  it("calls json() on the response of the fetch call", async () => {
    expect.assertions(1);
    await apiCall("", mockFetch);
    expect(mockJson).toBeCalled();
  });

  it("returns the data from response.json()", async () => {
    expect.assertions(1);
    const data = await apiCall("", mockFetch);
    expect(data).toEqual(mockData);
  });
});
