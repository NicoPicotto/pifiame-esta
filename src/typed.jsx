import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Text } from '@chakra-ui/react';

function TypewriterComponent({ outcomeText }) {
	const typeTargetRef = useRef(null);

	const options = {
		strings: [outcomeText],
		typeSpeed: 15,
		backSpeed: 50,
		backDelay: 1000,
		startDelay: 300,
		loop: false,
	};

	useEffect(() => {
		if (typeTargetRef.current && outcomeText) {
			const typed = new Typed(typeTargetRef.current, options);

			return () => {
				typed.destroy();
			};
		}
	}, [outcomeText]);

	return (
		<Text
			fontSize='lg'
			color='terciario'
			textAlign='center'
			display="inline"
			ref={typeTargetRef}
		></Text>
	);
}

export default TypewriterComponent;
