import { useState } from "react";
import {
   Stack,
   Heading,
   Switch,
   Text,
   Button,
   Link,
   useMediaQuery,
   Spinner,
} from "@chakra-ui/react";
import TypewriterComponent from "./typed";
import useAIOutcome from "./useAIOutcome";
import "./App.css";
import ModalConditions from "./Components/Modal";
import { Analytics } from "@vercel/analytics/react";

function App() {
   const [critical, setCritical] = useState(true);
   const [value, setValue] = useState(null);
   const [isMobile] = useMediaQuery("(max-width: 1100px)");
   const [outcomeText, setOutcomeText] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   const fetchOutcome = useAIOutcome();

   const handleRollClick = async () => {
      if (!value) {
         alert("Select a weapon type first.");
         return;
      }

      setIsLoading(true);

      const prompt = `Describe el resultado de un ${
         critical ? "golpe crítico (natural 20)" : "fallo crítico (natural 1)"
      } con un ataque de daño tipo ${value}.`;

      // Fetch the outcome using the revised prompt, critical, and value
      const result = await fetchOutcome(prompt, critical, value);
      setOutcomeText(result);
      setIsLoading(false);
   };

   return (
      <Stack
         h='100dvh'
         overflow='hidden'
         align='center'
         justify={isMobile ? "start" : "center"}
         position='relative'
         background={
            critical
               ? "radial-gradient(circle at center, #081026, #0A0C0F)"
               : "radial-gradient(circle, rgba(2,0,36,1) 50%, rgba(61,0,0,1) 100%)"
         }
      >
         <Stack
            maxW={isMobile ? "90%" : "36em"}
            w={isMobile && "90%"}
            justify='center'
            align='center'
            gap='1.5em'
            pt={isMobile && "30%"}
         >
            <Stack align='center'>
               <Heading as='h1' size='xl' color='terciario' textAlign='center'>
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
            <Stack gap='0.75rem' w={isMobile && "100%"}>
               <Stack
                  direction={isMobile ? "column" : "row"}
                  justify='space-between'
                  gap='0.75rem'
               >
                  <Button
                     w={isMobile ? "100%" : "12em"}
                     bgColor={value == "slashing" ? "#1B1959" : "transparent"}
                     _hover={{ bgColor: "#1B1959" }}
                     p='0.5em 0.8em'
                     variant={value == "slashing" ? "filled" : "outline"}
                     borderRadius={5}
                     borderColor='#1B1959'
                     onClick={() => setValue("slashing")}
                  >
                     <Text fontSize='lg' color='terciario'>
                        Cortante
                     </Text>
                  </Button>
                  <Button
                     w={isMobile ? "100%" : "12em"}
                     bgColor={value == "piercing" ? "#1B1959" : "transparent"}
                     _hover={{ bgColor: "#1B1959" }}
                     p='0.5em 0.8em'
                     variant={value == "piercing" ? "filled" : "outline"}
                     borderRadius={5}
                     borderColor='#1B1959'
                     onClick={() => setValue("piercing")}
                  >
                     <Text fontSize='lg' color='terciario'>
                        Perforante
                     </Text>
                  </Button>
                  <Button
                     w={isMobile ? "100%" : "12em"}
                     bgColor={
                        value == "bludgeoning" ? "#1B1959" : "transparent"
                     }
                     _hover={{ bgColor: "#1B1959" }}
                     p='0.5em 0.8em'
                     variant={value == "bludgeoning" ? "filled" : "outline"}
                     borderRadius={5}
                     borderColor='#1B1959'
                     onClick={() => setValue("bludgeoning")}
                  >
                     <Text fontSize='lg' color='terciario'>
                        Contundente
                     </Text>
                  </Button>
               </Stack>
               <Stack w='100%'>
                  <Button
                     bgColor='#1B1959'
                     _hover={{ bgColor: "#26246e" }}
                     color='terciario'
                     p='0.5em 0.8em'
                     onClick={handleRollClick}
                  >
                     {isLoading ? <Spinner color='white' /> : "¡Roll!"}
                  </Button>
               </Stack>
               <Stack h='5em' w='100%' display='inline' textAlign='center'>
                  <TypewriterComponent
                     outcomeText={outcomeText}
                     isMobile={isMobile}
                  />
               </Stack>
            </Stack>
         </Stack>
         <Text
            fontSize='sm'
            color='terciario'
            position='fixed'
            bottom={!isMobile && "2em"}
            top={isMobile && "2em"}
         >
            Creado con ♥ por{" "}
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
