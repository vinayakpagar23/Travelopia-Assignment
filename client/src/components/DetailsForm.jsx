import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  CheckIcon,
} from "@chakra-ui/react";
import React, { useState } from "react";

const DetailsForm = () => {
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState();
  const [numTravellers, setNumTravellers] = useState(1);
  const [budgetPerPerson, setBudgetPerPerson] = useState(0);

 
  const submitHandler = () => {};
  return (
    <Box width={"50%"} margin={"auto"}>
      <VStack spacing={"5px"} color="black">
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="destination" isRequired>
          <FormLabel>Destination</FormLabel>
          <Select placeholder="Select country" onChange={(e)=>setDestination(e.target.value)}>
            <option value="India">India</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
          </Select>
        </FormControl>
        <FormControl id="travellers" isRequired>
          <FormLabel>No. of travellers</FormLabel>
          <Input
            type="number"
            placeholder="Enter No. of travellers"
            onChange={(e) => setNumTravellers(e.target.value)}
          />
        </FormControl>

        <FormControl id="budget" isRequired>
          <FormLabel>Budget Per Person</FormLabel>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="$"
            />
            <Input placeholder="Enter amount" type="number" onChange={(e)=>setBudgetPerPerson(e.target.value)} />
          </InputGroup>
        </FormControl>

        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
        >
          Submit Data
        </Button>
      </VStack>
    </Box>
  );
};

export default DetailsForm;
