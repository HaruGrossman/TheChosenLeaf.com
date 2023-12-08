import { useGetFavoritePlantsQuery } from "../plants/plantSlice";
import { selectToken } from "../auth/authSlice";
import { useSelector } from "react-redux";
import NewFavoritePlant from "./NewFavoritePlant";
import { useState } from 'react';

function plantCard({ plant }) {
    const { data: plants } = useGetFavoritePlantsQuery();

    console.log(plants);
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
            <h3>{plants}</h3>
            </div>
        )
    };