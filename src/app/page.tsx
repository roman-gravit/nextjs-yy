"use client"; // This is a client component 

import { FilmDetails } from "@/components/film-details";
import { FilmReviews } from "@/components/flim-reviews";
import React from "react";

interface FilmInfo {
	title: string;
	genre: "comedy" | "horror";
	seasonsCount: number;
    reviews: Review[];
}

export interface Review {
    id: number;
	author: string;
	text: string;
	rating: number;
}

const review_info1: Review = {
    id: 123,
    author: "Mike",
    text: "good movie",
    rating: 85
}

const review_info2: Review = {
    id: 11,
    author: "Jack",
    text: "good movie",
    rating: 90
}

const film_info: FilmInfo = {
    title: "The Simpsons",
    genre: "comedy",
    seasonsCount: 33,
    reviews: [review_info1, review_info2]
}





export default function Home() {
    return (
        <div>
            <header/>
            <FilmDetails 
                title={film_info.title}
                genre={film_info.genre}
                seasonsCount={film_info.seasonsCount}
                />
            <FilmReviews reviews={film_info.reviews}/>
            <footer/>
        </div>
    );
}
