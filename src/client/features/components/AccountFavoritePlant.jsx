import { useGetFavoritePlantsQuery } from "../plants/plantSlice";

function myPlants ({ plant }) {
    const { data: plants, isLoading } = useGetFavoritePlantsQuery();


}

export default function AccountFavoritePlant() {

    return (
        <>
        <h2>My Plants</h2>
        <ul>{favoritePlant.plantId}</ul>
        </>

    )

}