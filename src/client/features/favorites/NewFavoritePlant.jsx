import { useCreateFavoritePlantMutation, useDeleteFavoritePlantMutation, useGetPlantQuery } from "../plants/plantSlice";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Switch from "../components/FavoriteSwitch";
import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";

export default function NewFavoritePlant(){
    const token = useSelector(selectToken);
    const navigate = useNavigate();

    const [favorite, setFavorite] = useState("");
    const [createFavorite] = useCreateFavoritePlantMutation();

    const [unfavorite, setUnfavorite] = useState("");
    const [deleteFavorite] = useDeleteFavoritePlantMutation();

    const loginNavigate = () => {
        navigate("/login");
    };

    //create a new favorite
    const createFav = async (evt) => {
        evt.preventDefault();
        await createFavorite({ plantId, favorite });
    };

    //delete an existing favorite
    const deleteFav = async (evt) => {
        evt.preventDefault();
        deleteFavorite(favoritePlant.id);
    };

    if (!token) {
        return <button onClick={loginNavigate}>Login to add to favorites</button>
    };
        return (
         <div>
            <Switch onToggle={createFav} isToggled={deleteFav}>
                <button onClick={createFav}>
                    <input
                    type="checkbox"
                    value={favorite}
                    onChange={(e) => setFavorite(e.target.value)}
                    />
                </button>
            </Switch>

         </div>
        )
};