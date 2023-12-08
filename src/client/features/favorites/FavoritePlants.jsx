import { useGetFavoritePlantsQuery } from "../../store/FavoriteSlice";
import { useGetPlantQuery } from "../plants/plantSlice";
import { selectToken } from "../auth/authSlice";
import { useSelector } from "react-redux";
// import NewFavoritePlant from "./NewFavoritePlant";
import { useState } from 'react';

function PlantCard({ plant }) {
    const { data: plants } = useGetFavoritePlantsQuery();

    console.log(plant);
    return(
        <li>
            <h3>{plant.plantId}</h3>
            <h3>{plant.note}</h3>
        </li>

    )
}


export default function MyPlants () {
    const token = useSelector(selectToken);
    const { data: plants, isLoading } = useGetFavoritePlantsQuery();

    if (!token) {
        return <p>You must be logged in to see your favorite plants.</p>
    }

        return (
            <div>
            <h2>My Plants</h2>
            {isLoading && <p>Loading plants...</p>}
            {plants && (
                <ul>
                    {plants.map((plant) => (
                    <PlantCard key={plants.id} plant={plant} />
                    ))}
                    </ul>
            )}
            </div>
        )
    };