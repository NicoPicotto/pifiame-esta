import axios from "axios";
import outcomesList from "./outcomes.jsx";

const useAIOutcome = () => {
   const getRandomExamples = (type, damageType, count = 2) => {
      // Verificamos que existan resultados para el tipo de golpe y daño.
      if (!outcomesList[type] || !outcomesList[type][damageType]) return [];

      // Lista de posibles ejemplos
      const outcomesArray = outcomesList[type][damageType];

      // Seleccionar ejemplos aleatorios
      const shuffled = outcomesArray.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
   };

   const fetchOutcome = async (prompt, critical, value) => {
      try {
         // Obtener ejemplos aleatorios
         const type = critical ? "critico" : "pifia";
         const examples = getRandomExamples(type, value, 2); // Cambia el número de ejemplos si lo deseas

         // Construir el systemMessage con ejemplos incluidos
         const systemMessage = `Eres un Dungeon Master experimentado de Dungeons and Dragons 5ta Edición. Tu trabajo es describir resultados únicos y creativos para golpes críticos y fallos críticos en ataques de daño tipo Cortante, Contundente o Perforante.
  
  - En tus descripciones:
	- Enfócate en la escena y las consecuencias directas del ataque.
	- Incluye un efecto real de D&D 5e: Ventaja, Desventaja o una Condición (Cegado, Hechizado, Ensordecido, Aterrorizado, Agarrado, Incapacitado, Invisible, Paralizado, Petrificado, Envenenado, Derribado, Restringido, Aturdido, Inconsciente, Agotamiento).
	- Evita mencionar personajes o criaturas específicas; utiliza términos generales como "enemigo" o "criatura".
	- Mantén las descripciones breves, idealmente un párrafo corto.
  
  Ejemplos de resultados para ${type} con daño ${value}:
  ${examples.map((ex, index) => `Ejemplo ${index + 1}: "${ex}"`).join("\n")}
  `;

         // Construir el payload para OpenAI
         const payload = {
            model: "gpt-4o",
            temperature: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.5,
            messages: [
               {
                  role: "system",
                  content: systemMessage,
               },
               {
                  role: "user",
                  content: prompt,
               },
            ],
         };

         const headers = {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_SECRET_KEY}`,
            "Content-Type": "application/json",
         };

         const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            payload,
            { headers }
         );

         if (response.data.choices && response.data.choices.length > 0) {
            return response.data.choices[0].message.content;
         }
      } catch (error) {
         console.error(
            "Hubo un error al obtener un resultado de la IA:",
            error
         );
         return "Error al generar la respuesta. Por favor, intenta de nuevo más tarde.";
      }
   };

   return fetchOutcome;
};

export default useAIOutcome;
