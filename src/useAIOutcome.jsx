import axios from "axios";
import outcomesList from "./outcomes.jsx";

const useAIOutcome = () => {
   const fetchOutcome = async (prompt) => {
      try {
         // Obtener ejemplos aleatorios
         const examples = getRandomExamples(
            critical ? "critico" : "pifia",
            value
         );

         const systemMessage = `Eres un Dungeon Master experimentado en Dungeons and Dragons 5ta Edición. Tu objetivo es proporcionar resultados únicos y creativos para ${
            critical ? "golpes críticos" : "fallos críticos"
         } con ataques de daño ${value}. Aquí tienes algunos ejemplos:
  
  ${examples.map((ex, index) => `Ejemplo ${index + 1}: "${ex}"`).join("\n")}
  
  Ahora, genera una descripción nueva y única basada en la información del usuario. Evita repetir los ejemplos anteriores.`;

         const payload = {
            model: "gpt-4",
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
