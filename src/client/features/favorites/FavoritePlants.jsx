import { useGetFavoritePlantsQuery, useDeleteFavoritePlantMutation } from "../../store/FavoriteSlice";
// import { useGetPlantQuery } from "../plants/plantSlice";
import { selectToken } from "../auth/authSlice";
import { useSelector } from "react-redux";
// import NewFavoritePlant from "./NewFavoritePlant";
import { useState } from 'react';
import { Link } from "react-router-dom";
// import DeleteFavPlant from "./DeleteFavoritePlant";

function PlantCard({ plant }) {

    const [deleteFavorite] = useDeleteFavoritePlantMutation();
    
    // delete an existing favorite
    const deleteFav = async (evt) => {
        evt.preventDefault();
        deleteFavorite(plant.id);
    };

    console.log(plant)

    return(
        <div className="fav-plant-card">
            <li>
                <Link to={`/search/${plant.plant.id}`}>
                    <img src={plant.plant.image} className="fav-plant-img" />
                </Link>
                <h3>{plant.plant.name}</h3>
                <h3>Favorite Plant Id: {plant.id}</h3>
                <button onClick={deleteFav} 
                >
                ❤️
                <input
                type="hidden"
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