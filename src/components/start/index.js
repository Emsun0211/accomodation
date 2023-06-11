import StarRatings from "react-star-ratings";
import React from "react";

function Star() {
	return (
		<div>
			<div className='hidden sm:block'>
				<StarRatings
					rating={4.5}
					starRatedColor='#FCA82B'
					numberOfStars={5}
					name='rating'
					starDimension={"23px"}
					starSpacing={"4"}
				/>
			</div>
			<div className='sm:hidden'>
				<StarRatings
					rating={4.5}
					starRatedColor='#FCA82B'
					numberOfStars={5}
					name='rating'
					starDimension={"14px"}
					starSpacing={"4"}
				/>
			</div>
		</div>
	);
}

export default Star;
