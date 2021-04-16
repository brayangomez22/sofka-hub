import React from 'react'

import stars from '../assets/img/home/stars.png'
import moon from '../assets/img/home/moon.png'
import mountains_behind from '../assets/img/home/mountains_behind.png'
import mountains_front from '../assets/img/home/mountains_front.png'

const Welcome = () => {
	return (
		<section>
			<img src={stars} id="stars" alt="stars" />
			<img src={moon} id="moon" alt="moon" />
			<img src={mountains_behind} id="mountains_behind" alt="mountains_behind" />
			<img src={mountains_front} id="mountains_front" alt="mountains_front" />
		</section>
	)
}

export default Welcome
