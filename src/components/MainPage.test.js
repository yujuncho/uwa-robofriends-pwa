import { shallow } from "enzyme";
import MainPage from "./MainPage";

describe("MainPage", () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn,
      robots: [],
      searchField: "",
      isPending: false
    };

    wrapper = shallow(<MainPage {...mockProps} />);
  });

  it("expects to render CardList", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("expects to render loading", () => {
    const mockProps = {
      onRequestRobots: jest.fn,
      robots: [],
      searchField: "",
      isPending: true
    };
    const wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("filters matching robots", () => {
    const robots = [{ name: "hello" }];
    expect(wrapper.instance().filteredRobots(robots, "h")).toEqual(robots);
    expect(wrapper.instance().filteredRobots(robots, "hello")).toEqual(robots);
  });

  it("returns empty when there are no matches", () => {
    expect(wrapper.instance().filteredRobots([])).toEqual([]);
    expect(wrapper.instance().filteredRobots([], "")).toEqual([]);

    const robots = [{ name: "hello" }];
    expect(wrapper.instance().filteredRobots(robots, "helloa")).toEqual([]);
    expect(wrapper.instance().filteredRobots(robots, "a")).toEqual([]);
  });
});
