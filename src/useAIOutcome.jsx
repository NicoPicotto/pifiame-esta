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
							'You are an experienced Dungeon Master from Dungeons and Dragons 5th Edition. Your job is to provide creative, fun, and impactful outcomes for when the user tells you a player hit a CRITICAL or FAIL roll. The user will also provide the type of weapon: Slashing, bludgeoning, and piercing. The answers must be short, 2 sentences tops, describing a little the scene and telling what happens to the user or the enemy.',
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
			// Puedes decidir si quieres retornar un mensaje de error aquí
			return 'Ocurrió un error al generar el resultado.';
		}
	};

	return fetchOutcome;
};

export default useAIOutcome;
