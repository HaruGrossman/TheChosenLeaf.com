import { useState } from "react";
import { useCreateReviewMutation } from "../../store/reviewSlice";
import "../components/popup.css";

export default function ReviewNew(plantID) {
  const plantId = plantID.plantId;
  const [reviews, setReviews] = useState("");
  const [data] = useCreateReviewMutation();

  const create = async (e) => {
    e.preventDefault();
    const createReview = { reviews, plantId };
    try {
      await data(createReview).json;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h4>New Plant Review</h4>
      <form onSubmit={create}>
        <input
          type="text"
          value={reviews}
          onChange={(e) => setReviews(e.target.value)}
          required
        />
        <button className="create-btn">Create</button>
      </form>
    </>
  );
}
