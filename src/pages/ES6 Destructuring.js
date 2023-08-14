const cars = [
  {
    model: "Honda Civic",
    coloursByPopularity: ["black", "silver"],
    speedStats: {
      topSpeed: 140,
      zeroToSixty: 8.5,
    },
  },
  {
    model: "Tesla Model 3",
    coloursByPopularity: ["red", "white"],
    speedStats: {
      topSpeed: 150,
      zeroToSixty: 3.2,
    },
  },
];

function App() {
  const [honda, tesla] = cars;

  const {
    speedStats: { topSpeed: teslaTopSpeed },
  } = tesla;

  const {
    coloursByPopularity: [teslaTopColour],
  } = tesla;

  const {
    speedStats: { topSpeed: hondaTopSpeed },
  } = honda;

  const {
    coloursByPopularity: [hondaTopColour],
  } = honda;

  return (
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>
  );
}

export default App;
