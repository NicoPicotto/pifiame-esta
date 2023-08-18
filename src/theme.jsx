import { extendTheme } from '@chakra-ui/react';
import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// Define custom styles for the Switch component
const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(switchAnatomy.keys);

const switchBaseStyle = definePartsStyle({
	thumb: {
		bg: '#387A3D', // green when unchecked
		_checked: {
			bg: '#A03831', // red when checked
		},
	},
	track: {
		bg: 'gray.100',
		_checked: {
			bg: 'gray.100',
		},
	},
});

const switchCustomTheme = defineMultiStyleConfig({
	baseStyle: switchBaseStyle,
});

// Your existing theme colors and styles
const colors = {
	primario: '#6F8ABF',
	secundario: '#081026',
	terciario: '#9FB3BF',
};

// Integrate the custom Switch styles into the main theme
const components = {
	Switch: switchCustomTheme,
};

const theme = extendTheme({ colors, components });

export default theme;
