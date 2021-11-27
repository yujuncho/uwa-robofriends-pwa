import { shallow } from "enzyme";
import SearchBox from "./SearchBox";

describe("SearchBox", () => {
  it("renders", () => {
    expect(shallow(<SearchBox />)).toMatchSnapshot();
  });
});
