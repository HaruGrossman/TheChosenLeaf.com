import { useState } from "react";
import Popup from "../components/Popup";
import {
  useDeleteReviewMutation,
  useEditReviewMutation,
} from "../../store/reviewSlice";

export default function ReviewPop({ review }) {
  const [data] = useEditReviewMutation(review.id);
  const [deleteReview] = useDeleteReviewMutation();
  const [editedReview, setEditedReview] = useState(review.editedReview);
  const [buttonPopup, setButtonPopup] = useState(false);

  // save edited review
  const onClickSave = async (e) => {
    e.preventDefault();
    const id = review.id;
    const plantId = review.plantId;
    const reviews = editedReview;
    const eReview = { reviews, id, plantId };
    try {
      await data({ id: id, data: eReview });
    } catch (err) {
      console.log(err);
    }
  };

  // delete note
  const onDelete = async (e) => {
    e.preventDefault();
    deleteReview(review.id);
  };

  return (
    <li>
      <h3>{review.reviews}</h3>
      <button onClick={() => setButtonPopup(true)}>Edit Review</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h4>Edit existing review: {review.reviews} </h4>
        <form>
          <input
            type="text"
            value={editedReview}
            onChange={(e) => setEditedReview(e.target.value)}
            required
          />
          <button className="save-btn" onClick={onClickSave}>
            Save
          </button>
          <button className="delete-btn" onClick={onDelete}>
            Delete
          </button>
        </form>
      </Popup>
    </li>
  );
}
