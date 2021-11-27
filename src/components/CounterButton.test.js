import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

describe("CounterButton", () => {
  it("expects to render", () => {
    const wrapperCounterButton = shallow(<CounterButton />);
    expect(wrapperCounterButton).toMatchSnapshot();
  });

  it("expects initial count of 1", () => {
    const wrapperCounterButton = shallow(<CounterButton />);
    const instanceCounterButton = wrapperCounterButton.instance();
    expect(instanceCounterButton.state.count).toBe(1);
    expect(instanceCounterButton.state.count).toBeLessThan(2);
  });

  it("expects button click to increment count by 1", () => {
    const wrapperCounterButton = shallow(<CounterButton />);
    const instanceCounterButton = wrapperCounterButton.instance();
    expect(instanceCounterButton.state.count).toBe(1);

    wrapperCounterButton.find("button").simulate("click");

    expect(instanceCounterButton.state.count).toBe(2);
  });

  it("expects shouldComponentUpdate to be false when the count remains the same", () => {
    const wrapperCounterButton = shallow(<CounterButton />);
    const shouldUpdate = wrapperCounterButton
      .instance()
      .shouldComponentUpdate({}, { count: 1 });
    expect(shouldUpdate).toBe(false);
  });
});
