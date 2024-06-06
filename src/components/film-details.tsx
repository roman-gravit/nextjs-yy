import { useCount } from "@/hooks/useCount";
import { FunctionComponent } from "react"
import { FilmInfo } from "./film-info";

interface Props {
	title: string;
	seasonsCount: number;
	genre: "comedy" | "horror"; 
}

export const FilmDetails: FunctionComponent<Props> = ( { 
	title, 
	seasonsCount, 
	genre
}) => {

	let { count, decrement, increment } = useCount(0);

	return (
		<div>
			<FilmInfo
				title= { title}
				genre= { genre}
				seasonsCount= { seasonsCount}
			/>
			<div>
				<button onClick={ decrement }>-</button>
				{count}
				<button onClick={ increment }>+</button>
			</div>
		</div>
	);
}