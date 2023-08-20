import { useState } from 'react';
import {
	Stack,
	Heading,
	Switch,
	Text,
	Button,
	Link,
	useMediaQuery,
} from '@chakra-ui/react';
import outcomes from './outcomes';
import TypewriterComponent from './typed';

function App() {
	const [critical, setCritical] = useState(true);
	const [value, setValue] = useState(null);
	const [outcomeText, setOutcomeText] = useState('');
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	function getRandomOutcome() {
		const actionType = critical ? 'critico' : 'pifia';
		if (!value) return 'Selecciona un tipo de arma primero.';

		const possibleOutcomes = outcomes[actionType][value];
		const randomIndex = Math.floor(Math.random() * possibleOutcomes.length);
		return possibleOutcomes[randomIndex];
	}

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
					: 'radial-gradient(circle at center, #111026, #160C0F)'
			}
		>
			<Stack
				maxW={isMobile ? '90%' : '36em'}
				justify='center'
				align='center'
				gap='1.5em'
			>
				<Stack align='center'>
					<Heading as='h1' size='2xl' color='terciario' textAlign='center'>
						Tabla de Críticos y Pifias
					</Heading>
				</Stack>
				<Stack direction='row' align='center' gap='1em'>
					<Heading as='h2' size='lg' color='primario'>
						Crítico
					</Heading>
					<Switch size='lg' onChange={() => setCritical(!critical)} />
					<Heading as='h2' size='lg' color='primario'>
						Pifia
					</Heading>
				</Stack>
				<Stack gap='1.5em' w={isMobile && '100%'}>
					<Stack
						direction={isMobile ? 'column' : 'row'}
						justify='space-between'
					>
						<Button
							w={isMobile ? '100%' : '12em'}
							bgColor={value == 'cortante' ? '#1B1959' : 'transparent'}
							_hover={{ bgColor: '#1B1959' }}
							p='0.5em 0.8em'
							variant={value == "cortante" ? "filled" : "outline"}
							borderRadius={5}
							borderColor="#1B1959"
							onClick={() => setValue('cortante')}
						>
							<Text fontSize='lg' color='terciario'>
								Cortante
							</Text>
						</Button>
						<Button
							w={isMobile ? '100%' : '12em'}
							bgColor={value == 'perforante' ? '#1B1959' : 'transparent'}
							_hover={{ bgColor: '#1B1959' }}
							p='0.5em 0.8em'
							variant={value == "perforante" ? "filled" : "outline"}
							borderRadius={5}
							borderColor="#1B1959"
							onClick={() => setValue('perforante')}
						>
							<Text fontSize='lg' color='terciario'>
								Perforante
							</Text>
						</Button>
						<Button
							w={isMobile ? '100%' : '12em'}
							bgColor={value == 'contundente' ? '#1B1959' : 'transparent'}
							_hover={{ bgColor: '#1B1959' }}
							p='0.5em 0.8em'
							variant={value == "contundente" ? "filled" : "outline"}
							borderRadius={5}
							borderColor="#1B1959"
							onClick={() => setValue('contundente')}
						>
							<Text fontSize='lg' color='terciario'>
								Contundente
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
							onClick={() => setOutcomeText(getRandomOutcome())}
						>
							¡Roll!
						</Button>
					</Stack>
					<Stack h='5em' w='100%'>
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
				Creado con ♥ por{' '}
				<Link href='https://nicopicotto.com/' target='_blank'>
					Nico Picotto
				</Link>
				.
			</Text>
		</Stack>
	);
}

export default App;
