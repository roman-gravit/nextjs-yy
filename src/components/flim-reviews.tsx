import { Review } from "@/app/page";
import React from "react";
import { FunctionComponent } from "react";
import { FilmReview } from "./review";

interface Props {
	reviews: Review[];
}

export const FilmReviews: FunctionComponent<Props> = ({reviews}) => {
	return (
		<div>
			{
				Boolean(reviews.length) && reviews.map((review) => (
					<FilmReview
						key = {review.id}
						author = {review.author}
						rating = {review.rating}
						text = {review.text}
					/>
				))
			}
		</div>
	);
}