import React from 'react';
import {
	AccordionButton,
	AccordionItem,
	Box,
	AccordionPanel,
	AccordionIcon,
	Text,
	UnorderedList,
	ListItem,
} from '@chakra-ui/react';

const ConditionItem = ({ item }) => {
	return (
		<AccordionItem borderBottom='none' marginBottom={0}>
			<AccordionButton _expanded={{ bg: 'secundario' }}>
				<Box as='span' flex='1' textAlign='left'>
					<Text as='b'>{item.name}</Text>
				</Box>
				<AccordionIcon />
			</AccordionButton>
			<AccordionPanel pb={4} _expanded={{ bg: 'secundario' }}>
				{item.description}
			</AccordionPanel>
		</AccordionItem>
	);
};

export default ConditionItem;
