import { useState } from 'react';
import {
	Stack,
	Heading,
	Switch,
	Text,
	Button,
	Link,
	useMediaQuery,
	Spinner,
} from '@chakra-ui/react';
import TypewriterComponent from './typed';
import useAIOutcome from './useAIOutcome';
import './App.css';
import ModalConditions from './Components/Modal';
import { Analytics } from '@vercel/analytics/react';

function App() {
	const [critical, setCritical] = useState(true);
	const [value, setValue] = useState(null);
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	const [outcomeText, setOutcomeText] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	console.log('Analytics: ', Analytics);

	const fetchOutcome = useAIOutcome(); // useAIOutcome ahora retorna la función fetchOutcome

	const handleRollClick = async () => {
		if (!value) {
			alert('Selecciona un tipo de arma primero.');
			return;
		}

		setIsLoading(true);

		const result = await fetchOutcome(
			`Describe a ${
				critical ? 'critical (natural 20)' : 'critical fail (natural 1)'
			} attack roll with a ${value} weapon attack in a game of Dungeons and Dragons.`
		);
		setOutcomeText(result);
		setIsLoading(false);
	};

	return (
		<Stack
			h='100dvh'
			overflow='hidden'
			align='center'
			justify='center'
			position='relative'
			background={
				critical
					? 'radial-gradient(circle at center, #081026, #0A0C0F)'
					: 'radial-gradient(circle, rgba(2,0,36,1) 50%, rgba(61,0,0,1) 100%)'
			}
		>
			<Stack
				maxW={isMobile ? '90%' : '36em'}
				justify='center'
				align='center'
				gap='1.5em'
			>
				<Stack align='center'>
					<Heading as='h1' size='xl' color='terciario' textAlign='center'>
						Critical Hit and Fumble Table
					</Heading>
				</Stack>
				<Stack direction='row' align='center' gap='1em'>
					<Heading as='h2' size='lg' color='primario'>
						Critical
					</Heading>
					<Switch size='lg' onChange={() => setCritical(!critical)} />
					<Heading as='h2' size='lg' color='primario'>
						Fumble
					</Heading>
				</Stack>
				<Stack gap='1.5em' w={isMobile && '100%'}>
					<Stack
						direction={isMobile ? 'column' : 'row'}
						justify='space-between'
					>
						<Button
							w={isMobile ? '100%' : '12em'}
							bgColor={value == 'slashing' ? '#1B1959' : 'transparent'}
							_hover={{ bgColor: '#1B1959' }}
							p='0.5em 0.8em'
							variant={value == 'slashing' ? 'filled' : 'outline'}
							borderRadius={5}
							borderColor='#1B1959'
							onClick={() => setValue('slashing')}
						>
							<Text fontSize='lg' color='terciario'>
								Slashing
							</Text>
						</Button>
						<Button
							w={isMobile ? '100%' : '12em'}
							bgColor={value == 'piercing' ? '#1B1959' : 'transparent'}
							_hover={{ bgColor: '#1B1959' }}
							p='0.5em 0.8em'
							variant={value == 'piercing' ? 'filled' : 'outline'}
							borderRadius={5}
							borderColor='#1B1959'
							onClick={() => setValue('piercing')}
						>
							<Text fontSize='lg' color='terciario'>
								Piercing
							</Text>
						</Button>
						<Button
							w={isMobile ? '100%' : '12em'}
							bgColor={value == 'bludgeoning' ? '#1B1959' : 'transparent'}
							_hover={{ bgColor: '#1B1959' }}
							p='0.5em 0.8em'
							variant={value == 'bludgeoning' ? 'filled' : 'outline'}
							borderRadius={5}
							borderColor='#1B1959'
							onClick={() => setValue('bludgeoning')}
						>
							<Text fontSize='lg' color='terciario'>
								Bludgeoning
							</Text>
						</Button>
					</Stack>
					<Stack w='100%'>
						<Button
							bgColor='#1B1959'
							_hover={{ bgColor: '#26246e' }}
							color='terciario'
							p='0.5em 0.8em'
							size='lg'
							onClick={handleRollClick}
						>
							{isLoading ? <Spinner color='white' /> : '¡Roll!'}
						</Button>
					</Stack>
					<Stack h='5em' w='100%' display='inline' textAlign='center'>
						<TypewriterComponent outcomeText={outcomeText} />
					</Stack>
				</Stack>
			</Stack>
			<Text
				fontSize='sm'
				color='terciario'
				position='fixed'
				bottom={!isMobile && '2em'}
				top={isMobile && '2em'}
			>
				Created with ♥ by{' '}
				<Link href='https://nicopicotto.com/' target='_blank'>
					Nico Picotto
				</Link>
				.
			</Text>

			<ModalConditions />
			<Analytics />
		</Stack>
	);
}

export default App;
