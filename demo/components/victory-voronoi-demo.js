import React from "react";
import {VictoryVoronoi, VictoryVoronoiTooltip} from "../../src/index";
import { range, random } from "lodash";

const getData = () => {
  return range(20).map((index) => {
    return {
      x: random(600),
      y: random(600),
      label: `label-${index}`,
      opacity: 0.1
    };
  });
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: getData()
    };
  }

  componentDidMount() {
    /* eslint-disable react/no-did-mount-set-state */
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        data: getData()
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  render() {
    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center"
    };

    const parentStyle = {border: "1px solid #ccc", margin: "2%", maxWidth: "40%"};
    const visible = {fill: "gray", opacity: 0.1, stroke: "black", strokeWidth: 2};
    const invisible= {stroke: "none", fill: "none"};

    return (
      <div className="demo">
        <div style={containerStyle}>
          <VictoryVoronoi
            style={{parent: parentStyle, data: visible}}
            data={[
              {x: 1, y: 1},
              {x: 2, y: 2},
              {x: 3, y: 3},
              {x: 4, y: 2},
              {x: 5, y: 1}
            ]}
          />

          <VictoryVoronoi
            style={{parent: parentStyle, data: visible}}
            size={40}
            data={[
              {x: 1, y: 1},
              {x: 2, y: 2},
              {x: 3, y: 3},
              {x: 4, y: 2},
              {x: 5, y: 1}
            ]}
          />

          <VictoryVoronoiTooltip
            style={{parent: parentStyle, data: visible}}
            size={40}
            labels={(d) => d.y}
            data={[
              {x: 1, y: 1},
              {x: 2, y: 2},
              {x: 3, y: 3},
              {x: 4, y: 2},
              {x: 5, y: 1}
            ]}
          />

          <VictoryVoronoiTooltip
            animate={{duration: 2000}}
            style={{parent: parentStyle, data: visible}}
            size={20}
            data={this.state.data}
          />

          <VictoryVoronoiTooltip
            animate={{duration: 2000}}
            style={{parent: parentStyle, data: visible}}
            data={this.state.data}
            flyoutProps={{cornerRadius: 0}}
          />
        </div>
      </div>
    );
  }
}

export default App;
