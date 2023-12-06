import { useCreateFavoritePlantMutation } from "../plants/plantSlice";
import { useState } from 'react';

export default function FavoritePlant(){
    const [favorite, setFavorite] = useState("");
    const [createFavorite] = useCreateFavoritePlantMutation();

    const create = async (evt) => {
        evt.preventDefault();
        createFavorite({ favorite });
    }

    return (
    <div>
        <form onSubmit={create}>
            <input
            type="checkbox"
            value={favorite}
            onChange={(e) => setFavorite(e.target.value)}
            />
        </form>
    </div>
    )
};