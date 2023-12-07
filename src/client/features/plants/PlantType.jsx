import { useGetPlantTypeQuery } from "./plantSlice";
import { Link, useParams } from "react-router-dom";
import "./plants.css";

//display results for selected image's plant type from carousel
export default function PlantType() {
  const id = useParams();
  const { data: plant, isLoading } = useGetPlantTypeQuery(id.id);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main className="plantType-container">
      <div>
        <h1>Welcome!! </h1>
        {plant?.map((plant) => (
          <li key={plant.id} className="plantType-card">
            <Link to={`/search/${plant.id}`}>
              <img src={plant.image} />
            </Link>
            <h5 className="plantType-name">{plant.name}</h5>
          </li>
        ))}
      </div>
    </main>
  );
}
