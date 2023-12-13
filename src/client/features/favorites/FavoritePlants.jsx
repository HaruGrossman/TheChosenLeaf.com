import { useGetFavoritePlantsQuery, useDeleteFavoritePlantMutation } from "../../store/FavoriteSlice";
import { selectToken } from "../auth/authSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './favorite.css';

function PlantCard({ plant }) {

    const [deleteFavorite] = useDeleteFavoritePlantMutation();
    const plantNotes = plant.notes[0];

    
    // delete an existing favorite
    const deleteFav = async (evt) => {
        evt.preventDefault();
        deleteFavorite(plant.id);
    };

    console.log(plant);

    return(
        <div className="fav-plant-card">
            <li>
                <Link to={`/search/${plant.plant.id}`}>
                    <img src={plant.plant.image} className="fav-plant-img" />
                </Link>
                <h3>{plant.plant.name}</h3>
                <h3>My Plant Name: {plantNotes?.name}</h3>
                <h3>Plant Notes: {plantNotes?.note}</h3>
                <button onClick={deleteFav} className="delete-btn"
                >
                Unfavorite
                <input
                type="checkbox" typeof="hidden" id="checkbox" defaultChecked="checked"
                />
                </button>
            </li>
        </div>
    )
}

export default function MyPlants() {
    const token = useSelector(selectToken);
    const { data: plants, isLoading } = useGetFavoritePlantsQuery();

    if (!token) {
        return <p>You must be logged in to see your favorite plants.</p>
    }

    return (
        <div>
            <h2>My Plants:</h2>
            {isLoading && <p>Loading plants...</p>}
            {plants && (
                <ul>
                    {plants.map((plant) => (
                        <PlantCard key={plant.id} plant={plant} />
                    ))}
                </ul>
            )}
        </div>
    )
};