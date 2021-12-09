import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import nock from "nock";

import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from "./constants";
import * as actions from "./actions";

describe("setSearchField", () => {
  it("should create an action to search robots", () => {
    const text = "woo";
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

// export const requestRobots = () => dispatch => {
//   dispatch({ type: REQUEST_ROBOTS_PENDING });
//   apiCall("https://jsonplaceholder.typicode.com/users", fetch)
//     .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
//     .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
// };
describe("requestRobots", () => {
  const mockStore = configureMockStore([thunkMiddleware]);

  afterEach(() => {
    nock.cleanAll();
    nock.restore();
  });

  it("dispatches pending before the request is complete", () => {
    expect.assertions(2);
    const robots = [
      {
        id: 1,
        name: "Kurtis",
        email: "kurtis@gmail.com"
      }
    ];
    const scope = nock("https://jsonplaceholder.typicode.com")
      .get("/users")
      .reply(
        200,
        { robots },
        {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json"
        }
      );
    const store = mockStore();
    const request = store.dispatch(actions.requestRobots());
    const storeActions = store.getActions();
    expect(storeActions[0]).toEqual({ type: REQUEST_ROBOTS_PENDING });
    return request.then(data => {
      expect(data).toEqual({ 
        type: REQUEST_ROBOTS_SUCCESS,
        payload: { robots }
      });
    });
  });
});
