import { shallow } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  it("render", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it("shouldComponentUpdate returns false", () => {
    const wrapper = shallow(<Header />);
    const instance = wrapper.instance();
    expect(instance.shouldComponentUpdate()).toBe(false);
  });
});
