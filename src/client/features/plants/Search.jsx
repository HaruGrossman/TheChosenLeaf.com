import { useState } from "react";
import { useGetAllPlantsQuery } from "./plantSlice";
import { Link } from "react-router-dom";
// import "./plants.css";
import "./Search.less"

export default function Plants() {
  const { data, isLoading } = useGetAllPlantsQuery();
  const [dropdown1Value, setDropdown1Value] = useState("");
  const [dropdown2Value, setDropdown2Value] = useState("");
  const [dropdown3Value, setDropdown3Value] = useState("");
  const [dropdown4Value, setDropdown4Value] = useState("");
  const [dropdown5Value, setDropdown5Value] = useState("");
  const [filteredPlants, setFilteredPlants] = useState(data);

  const handleDropdown1Change = (e) => {
    e.preventDefault();
    setDropdown1Value(e.target.value);
  };
  const handleDropdown2Change = (e) => {
    e.preventDefault();
    setDropdown2Value(e.target.value);
  };
  const handleDropdown3Change = (e) => {
    e.preventDefault();
    setDropdown3Value(e.target.value);
  };
  const handleDropdown4Change = (e) => {
    e.preventDefault();
    setDropdown4Value(e.target.value);
  };
  const handleDropdown5Change = (e) => {
    e.preventDefault();
    setDropdown5Value(e.target.value);
  };

  const handleSubmit = async (e) => {
    //this is for making sure we are getting the right value from user selection
    e.preventDefault();
    const searchPlants = [];

    for (const plant of data) {
      if (
        (dropdown1Value === "all" ||
          dropdown1Value === "" ||
          plant.category === dropdown1Value) &&
        (dropdown2Value === "all" ||
          dropdown2Value === "" ||
          plant.watering === dropdown2Value) &&
        (dropdown3Value === "all" ||
          dropdown3Value === "" ||
          plant.toleratedlight === dropdown3Value) &&
        (dropdown4Value === "all" ||
          dropdown4Value === "" ||
          plant.tempmax <= dropdown4Value) &&
        (dropdown5Value === "all" ||
          dropdown5Value === "" ||
          plant.tempmin >= dropdown5Value)
      ) {
        searchPlants.push(plant);
      }
    }
    setFilteredPlants(searchPlants);
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <main className="searchMain">
        <div className="sidenav">
          <h1 className="title">Search Plants</h1>
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
          <br />
          <button className="applyChangesButton" onClick={handleSubmit}>Apply Changes</button>
        </div>
        <div className="resultSection">
          <h1 className="title">Results:</h1>
          {filteredPlants?.map((plant) => (
            <li key={plant.id} className="searchResult">
              <Link to={`/search/${plant.id}`}>
                <img src={plant.image} />
              </Link>
              <h5 className="search-plantName">{plant.name}</h5>
            </li>
          ))}
        </div>
      </main>
    </>
  );
}
