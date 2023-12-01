import { useState } from "react";
import { useGetAllPlantsQuery } from "./plantSlice";
import "./plants.css";

export default function Plants() {
  const { data, isLoading } = useGetAllPlantsQuery();
  const [dropdown1Value, setDropdown1Value] = useState("");
  const [dropdown2Value, setDropdown2Value] = useState("");
  const [dropdown3Value, setDropdown3Value] = useState("");
  const [dropdown4Value, setDropdown4Value] = useState("");
  const [dropdown5Value, setDropdown5Value] = useState("");
  const [filteredPlants, setFilteredPlants] = useState(data);

  const handleDropdown1Change = (e) => {
    setDropdown1Value(e.target.value);
    //filterPlants(dropdown1Value, data);
  };
  const handleDropdown2Change = (e) => {
    setDropdown2Value(e.target.value);
    //filterPlants(dropdown2Value, data);
  };
  const handleDropdown3Change = (e) => {
    setDropdown3Value(e.target.value);
    //filterPlants(dropdown3Value, data);
  };
  const handleDropdown4Change = (e) => {
    setDropdown4Value(e.target.value);
    //filterPlants(dropdown4Value, data);
  };
  const handleDropdown5Change = (e) => {
    setDropdown5Value(e.target.value);
    //filterPlants(dropdown5Value, data);
  };

  const handleSubmit = async (e) => {
    //this is for making sure we are getting the right value from user selection
    e.preventDefault();
    const selectOption = [
      dropdown1Value,
      dropdown2Value,
      dropdown3Value,
      dropdown4Value,
      dropdown5Value,
    ];
    console.log("Selected values: ", selectOption);

    const searchPlants = [];
    for (const plant of data) {
      if (
        plant.category === selectOption[0] &&
        plant.watering === selectOption[1] &&
        plant.toleratedlight === selectOption[2] &&
        plant.tempmax <= selectOption[3] &&
        plant.tempmin >= selectOption[4]
      ) {
        searchPlants.push(plant);
      }
    }
    console.log(searchPlants);
    setFilteredPlants(searchPlants);
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <main>
        <h1>Search Plants</h1>
        <div>
          <label htmlFor="dropdown1">Type</label>
          <select
            className="selectOption"
            id="dropdown1"
            value={dropdown1Value}
            onChange={handleDropdown1Change}
          >
            <option value="all">All</option>
            <option value="Hanging">Hanging</option>
            <option value="Fern">Fern</option>
            <option value="Flower">Flower</option>
            <option value="Palm">Palm</option>
            <option value="Cactus And Succulent">Cactus And Succulent</option>
            <option value="Bromeliad">Bromeliad</option>
            <option value="Anthurium">Anthurium</option>
            <option value="Foliage plant">Foliage Plant</option>
          </select>
        </div>
        <div>
          <label htmlFor="dropdown2">Watering</label>
          <select
            className="selectOption"
            id="dropdown2"
            value={dropdown2Value}
            onChange={handleDropdown2Change}
          >
            <option value="all">All</option>
            <option value="infrequent">Infrequent</option>
            <option value="less frequent">Less Frequent</option>
            <option value="Frequent">Frequent</option>
            <option value="Average">Average</option>
          </select>
        </div>
        <div>
          <label htmlFor="dropdown3">Sunlight</label>
          <select
            className="selectOption"
            id="dropdown3"
            value={dropdown3Value}
            onChange={handleDropdown3Change}
          >
            <option value="all">All</option>
            <option value="Direct sunlight">Direct Sunlight</option>
            <option value="Partial shade">Partial Shade</option>
            <option value="Diffused">Diffused</option>
          </select>
        </div>
        <div>
          <label htmlFor="dropdown4">Max Temp</label>
          <select
            className="selectOption"
            id="dropdown4"
            value={dropdown4Value}
            onChange={handleDropdown4Change}
          >
            <option value="all">All</option>
            <option value="100">100℉</option>
            <option value="90">90℉</option>
            <option value="80">80℉</option>
            <option value="70">70℉</option>
            <option value="60">60℉</option>
          </select>
        </div>
        <div>
          <label htmlFor="dropdown5">Min Temp</label>
          <select
            className="selectOption"
            id="dropdown5"
            value={dropdown5Value}
            onChange={handleDropdown5Change}
          >
            <option value="all">All</option>
            <option value="20">20℉</option>
            <option value="30">30℉</option>
            <option value="40">40℉</option>
            <option value="50">50℉</option>
          </select>
        </div>
        <button onClick={handleSubmit}>Apply Changes</button>

        <div>
          <h1>Search Results</h1>
          <ul className="searchResult">
            {filteredPlants?.map((plant) => (
              <li key={plant.id}>
                <img src={plant.image} />
                <h5>CommonName: {plant.name}</h5>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
