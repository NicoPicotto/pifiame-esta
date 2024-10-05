/* eslint-disable react/prop-types */
import {
   AccordionButton,
   AccordionItem,
   Box,
   AccordionPanel,
   AccordionIcon,
   Text,
} from "@chakra-ui/react";

const ConditionItem = ({ item }) => {
   return (
      <AccordionItem  marginBottom={0} border="none">
         <AccordionButton
            _expanded={{ bg: "secundario" }}
            borderBottom='1px solid gray'
            fontSize="sm"
            _hover={{ bg: "secundario" }}
         >
            <Box as='span' flex='1' textAlign='left'>
               <Text as='b'>{item.name}</Text>
            </Box>
            <AccordionIcon />
         </AccordionButton>
         <AccordionPanel
            pb={4}
            whiteSpace='pre-line'
            fontSize='sm'
            bgColor='secundario'
            _expanded={{ bg: "secundario" }}
         >
            {item.description}
         </AccordionPanel>
      </AccordionItem>
   );
};

export default ConditionItem;
