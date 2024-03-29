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

	const fetchOutcome = useAIOutcome();

	const handleRollClick = async () => {
		if (!value) {
			alert('Select a weapon type first.');
			return;
		}

		setIsLoading(true);

		// Adjust the prompt to fit the new requirements
		const prompt = `You are an experienced Dungeon Master from Dungeons and Dragons 5th Edition. Describe the outcome of a ${
			critical ? 'critical hit (natural 20)' : 'critical fail (natural 1)'
		} with a ${value} type damage (Slashing, Bludgeoning, or Piercing) attack. Focus on the scene and the direct consequence, which should include a real D&D 5e effect: Advantage, Disadvantage, or a Condition (Blinded, Charmed, Deafened, Frightened, Grappled, Incapacitated, Invisible, Paralyzed, Petrified, Poisoned, Prone, Restrained, Stunned, Unconscious, Exhaustion). Keep the description brief, ideally a short paragraph.`;

		// Fetch the outcome using the revised prompt
		const result = await fetchOutcome(prompt);
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
				<Link href='https://nicopicotto.dev/' target='_blank'>
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
