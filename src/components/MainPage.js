import React, { Component } from "react";

import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundry";
import Header from "./Header";

import "./MainPage.css";

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots(robots, searchField) {
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  }

  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;
    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundry>
              <CardList robots={this.filteredRobots(robots, searchField)} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
