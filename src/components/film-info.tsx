import React from "react";
import { FunctionComponent } from "react";

interface Props {
	title: string;
	seasonsCount: number;
	genre: "comedy" | "horror"; 
}

export const FilmInfo: FunctionComponent<Props> = ({
	title,
	genre,
	seasonsCount
}) => {
	return (
		//React.Fragment
		<>
			<p>{title || "Unknown"}</p>
			{genre
				? <p>{genre}</p>
				: null
			}
			<p>
				{seasonsCount > 0 
					? `count ${seasonsCount}`
					: "No" 
				}
			</p>
		</>
	);
}