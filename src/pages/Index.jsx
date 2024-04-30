import { Box, Flex, Input, Button, Text, Badge, VStack, HStack, Image, useColorModeValue } from "@chakra-ui/react";
import { FaSearch, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const developers = [
  { id: 1, name: "John Doe", location: "San Francisco, CA", technologies: ["React", "Node.js"] },
  { id: 2, name: "Jane Smith", location: "New York, NY", technologies: [".NET", "JavaScript"] },
  { id: 3, name: "Alice Johnson", location: "Austin, TX", technologies: ["Go", "React"] },
  { id: 4, name: "Bob Brown", location: "Seattle, WA", technologies: ["Node.js", "JavaScript"] },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const bg = useColorModeValue("gray.50", "gray.800");

  const filteredDevelopers = developers.filter((dev) => dev.name.toLowerCase().includes(searchTerm.toLowerCase()) || dev.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase())));

  return (
    <VStack spacing={8} p={5}>
      <Box w="full" p={5} bg={bg} borderRadius="lg" boxShadow="md">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Welcome to Particles!
        </Text>
        <Text fontSize="lg">Discover top software talent specialized in web technologies like React, Node.js, .NET, Go, and JavaScript. Connect with professionals and grow your projects.</Text>
      </Box>

      <Flex w="full" p={5} bg={bg} borderRadius="lg" boxShadow="md" alignItems="center">
        <Input placeholder="Search by name or technology..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} mr={2} />
        <Button leftIcon={<FaSearch />} onClick={() => {}}>
          Search
        </Button>
      </Flex>

      <VStack spacing={4} w="full">
        {filteredDevelopers.map((dev) => (
          <Flex key={dev.id} p={5} w="full" bg={bg} borderRadius="lg" boxShadow="md" alignItems="center" justifyContent="space-between">
            <HStack spacing={4}>
              <Image borderRadius="full" boxSize="50px" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQ0NjM2MzF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile image" />
              <VStack align="left">
                <Text fontWeight="bold">{dev.name}</Text>
                <Text fontSize="sm">{dev.location}</Text>
                <HStack>
                  {dev.technologies.map((tech) => (
                    <Badge key={tech} colorScheme="purple">
                      {tech}
                    </Badge>
                  ))}
                </HStack>
              </VStack>
            </HStack>
            <Button leftIcon={<FaEnvelope />} colorScheme="blue" onClick={() => alert(`Message sent to ${dev.name}`)}>
              Message
            </Button>
          </Flex>
        ))}
      </VStack>
    </VStack>
  );
};

export default Index;
