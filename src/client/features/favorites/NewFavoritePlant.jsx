import { useCreateFavoritePlantMutation, useDeleteFavoritePlantMutation } from "../../store/FavoriteSlice";
import { useGetPlantQuery } from "../plants/plantSlice";
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Switch from "../components/FavoriteSwitch";
import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import { createAction } from "@reduxjs/toolkit";

export default function NewFavoritePlant( plant ){
    const token = useSelector(selectToken);
    const navigate = useNavigate();
    const { id } = useParams();
    const { data } = useGetPlantQuery(id);
    const plantId = data.id;

    const [favorite, setFavorite] = useState("");
    const [createFavorite] = useCreateFavoritePlantMutation();

    const loginNavigate = () => {
        navigate("/login");
    };

    console.log(data)
    //create a new favorite
    const createFav = async (evt) => {
        evt.preventDefault();
        await createFavorite({ id: plantId });
    };

    const [unfavorite, setUnfavorite] = useState("");
    const [deleteFavorite] = useDeleteFavoritePlantMutation();

    // delete an existing favorite
    const deleteFav = async (evt) => {
        evt.preventDefault();
        deleteFavorite(plant.id);
    };

    if (!token) {
        return <button onClick={loginNavigate}>Login to add to favorites</button>
    };
        
    if (!favorite) {
        return (
         <div>
            
                <button onClick={createFav}>♡
                    <input
                    type="hidden"
                    value={favorite}
                    onChange={(e) => setFavorite(e.target.value)}
                    />
                </button>

         </div>
        )
        };

    return (
        <div>
            
        <button onClick={deleteFav}>❤️
            <input
            type="button"
            value={unfavorite}
            onChange={(e) => setUnfavorite(e.target.value)}
            />
        </button>

        </div>
    )
};


