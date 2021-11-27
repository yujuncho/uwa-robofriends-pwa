import { shallow } from "enzyme";
import ErrorBoundary from "./ErrorBoundry";

describe("ErrorBoundary", () => {
  it("renders children when there is no error", () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <div>Hello!</div>
      </ErrorBoundary>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("sets hasError to true when componentDidCatch", () => {
    const wrapper = shallow(<ErrorBoundary />);
    const instance = wrapper.instance();

    expect(instance.state.hasError).toBe(false);

    instance.componentDidCatch();
    expect(instance.state.hasError).toBe(true);
  });

  it("renders error message when there is an error", () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <div>Hello!</div>
      </ErrorBoundary>
    );
    wrapper.setState({ hasError: true });
    expect(wrapper).toMatchSnapshot();
  });
});
