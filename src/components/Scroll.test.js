import { shallow } from "enzyme";
import Scroll from "./Scroll";

describe("Scroll", () => {
  it("renders", () => {
    expect(shallow(<Scroll />)).toMatchSnapshot();
  });
});
