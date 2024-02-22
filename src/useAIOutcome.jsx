import axios from 'axios';

const useAIOutcome = () => {
	const fetchOutcome = async (prompt) => {
		try {
			const payload = {
				model: 'gpt-3.5-turbo',
				messages: [
					{
						role: 'system',
						content:
							'You are an experienced Dungeon Master from Dungeons and Dragons 5th Edition. Your job is to provide creative, fun, and impactful outcomes for when the user tells you a player hit a CRITICAL HIT or a CRITICAL FAIL. The user will also provide the type of damage: Slashing, Bludgeoning, or Piercing. Without mentioning specific weapons, describe the outcome in two sentences, focusing on the scene and the direct consequence, which should include a real D&D 5e effect: Advantage, Disadvantage, or a Condition (Blinded, Charmed, Deafened, Frightened, Grappled, Incapacitated, Invisible, Paralyzed, Petrified, Poisoned, Prone, Restrained, Stunned, Unconscious, Exhaustion).',
					},
					{
						role: 'user',
						content: prompt,
					},
				],
			};

			const headers = {
				Authorization: `Bearer ${import.meta.env.VITE_OPENAI_SECRET_KEY}`,
				'Content-Type': 'application/json',
			};

			const response = await axios.post(
				'https://api.openai.com/v1/chat/completions',
				payload,
				{ headers }
			);

			if (response.data.choices && response.data.choices.length > 0) {
				// En lugar de setOutcome, retorna el contenido directamente
				return response.data.choices[0].message.content;
			}
		} catch (error) {
			console.error('Hubo un error al obtener un resultado de la IA:', error);
			return 'Please ask Nico to put money on the OpenAI Account :/';
		}
	};

	return fetchOutcome;
};

export default useAIOutcome;
