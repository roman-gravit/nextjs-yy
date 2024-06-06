import { Review } from "@/app/page";
import React from "react";
import { FunctionComponent } from "react";

interface Props {
    key: number;
	author: string;
	text: string;
	rating: number;
}

export const FilmReview: FunctionComponent<Props> = ({key, author, text, rating}) => {
	return (
		<div key={key}>
			<span>{author}</span>
			<span>{text}</span>
			<span>{rating}</span>
		</div>
	);
}