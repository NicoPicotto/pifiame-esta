import React, { useState } from 'react';
import {
	ModalOverlay,
	Button,
	ModalBody,
	ModalContent,
	Modal,
	useDisclosure,
	useMediaQuery,
	ModalHeader,
	Heading,
	ModalCloseButton,
	Tooltip,
	Accordion,
} from '@chakra-ui/react';
import ConditionItem from '../AccordionItem';
import conditions from '../ConditionList';

const ModalConditions = () => {
	const OverlayOne = () => (
		<ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
	);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [overlay, setOverlay] = useState(<OverlayOne />);
	const [isDesktop] = useMediaQuery('(min-width: 600px)');

	return (
		<>
			<Tooltip
				placement='left'
				label='Conditions'
				hasArrow
				bgColor='#1B1959'
				color='terciario'
			>
				<Button
					onClick={() => {
						setOverlay(<OverlayOne />);
						onOpen();
					}}
					variant='unstyled'
					target='_blank'
					position='fixed'
					top='2em'
					right='2em'
					fontSize='sm'
					color='terciario'
					cursor='pointer'
					_hover={{ textDecor: 'none' }}
				>
					&#129396;
				</Button>
			</Tooltip>

			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				{overlay}
				<ModalContent
					overflow='hidden'
					justifyContent='center'
					alignItems='center'
					bgColor='#26246e'
					color='white'
					maxW={!isDesktop ? '90%' : '40em'}
				>
					<ModalBody padding={5} w='100%'>
						{conditions && (
							<Accordion allowToggle>
								{conditions.map((item) => (
									<ConditionItem key={item.name} item={item} />
								))}
							</Accordion>
						)}
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalConditions;
