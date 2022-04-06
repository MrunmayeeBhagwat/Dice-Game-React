
import { Button } from "@chakra-ui/button";
import { List, ListItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Flex , Stack, Heading, Box, Text} from "@chakra-ui/layout";
import { useState } from "react";



const App = () => {

  const[gameStarted,setGameStarted]=useState(false);
  const[selectedNumber, setSelectedNumber]=useState();
  const[dice , setDice]=useState(1);
  const[error, setError]=useState(null);
  const[score, setScore]=useState(0);
  const numbers=[1,2,3,4,5,6];


  console.log(selectedNumber);

  const startGameHandler = () =>
  {
    setGameStarted(true)
  }

  const generateRandomNumber = () => {
    if(selectedNumber)
    {
    const generatedNumber= Math.ceil(Math.random() * 6);
    console.log(generatedNumber);
    setDice(generatedNumber);

    if(selectedNumber === generatedNumber)
    {
      setScore((prev) => prev + generatedNumber);
    }
    else{
      setScore((prev) => prev - 2);
    }

    }
    else{
      setError("Number not selected. Please select number");
    }
  }

  const onNumberClick = (value) =>{
    setSelectedNumber(value);
    setError(null);
  }

  return ( 
    <>
    { gameStarted ? ( 
      <>
    <Stack justifyContent="center" align="center" maxW="900px" mx="auto" h="100vh">
      <Heading as="h1" fontSize="6xl" mb="8" color={ error ? "red" : "black" }>
        { error ? error : "Select Number"}
      </Heading>
      <Button justifyContent="right" alignSelf="flex-end" bg="black" color="white" _hover={{bg:"grey"}} onClick={()=>setGameStarted(false)}>
        Back
      </Button>
      <Flex pb="16">{
        numbers.map((value)=> 
        ( <Flex justifyContent="center" align="center" h="50px" w="50px" bg={selectedNumber === value ? "green" : "black"}  color="white" fontSize="2xl" key={value} mr={4} borderRadius="md"  onClick={()=>onNumberClick(value) }>
        {value} 
      </Flex>))
     
      }</Flex>
      <Box h="150px" width="150px" onClick={generateRandomNumber}>
        <Image src={`/dice/dice${dice}.png`}/>
      </Box>
      <Text as="p">Click on dice to roll</Text>
      <Text color={score > 0 ? "green" : "red"}>{score}</Text>
      <Text>Total Score</Text>
      <Button onClick={()=>setScore(0)}>Reset Score</Button>
      <Text color={score > 0 ? "green" : "red"}>{ score > 0 ?  "You are winning" : "You are losing"}
      </Text>  
    </Stack> 
    <Stack maxW="900px" mx="auto">
    <Heading as="h2"> Game Rules:- </Heading>
    <List>
      <ListItem>1. Select any number</ListItem>
      <ListItem>2. Click on dice image to roll it</ListItem>
      <ListItem>3. If selected number equals the number on dice then you get the same points as dice</ListItem>
      <ListItem>4. Select any number</ListItem>
    </List>
    </Stack>
    </>
    ) 
    : (<Flex justify="center" align="center">  
    <Image width="50%" src="/dices.png"/>
    <Stack>
       <Heading fontSize="9xl" as="h1"> {" "} The Dice Game
       </Heading>
       <Button alignSelf="flex-end" bg="black" color="white" _hover={{bg:"grey"}} onClick={()=>setGameStarted(true)}>
        Start Game
       </Button>
    </Stack>
  </Flex> )}
  </>
  );
};

export default App;