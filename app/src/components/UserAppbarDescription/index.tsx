import { HStack, VStack, Text, Avatar, Box } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

interface Props {
  url: string;
  name: string;
}

export default (props: Props) => {
  return (
    <HStack>
      <Avatar size={"sm"} src={props.url} />
      <VStack
        display={{ base: "none", md: "flex" }}
        alignItems="flex-start"
        spacing="1px"
        ml="2"
      >
        <Text fontSize="md">{props.name}</Text>
        <Text fontSize="xs" color="gray.600">
          Admin
        </Text>
      </VStack>
      <Box display={{ base: "none", md: "flex" }}>
        <FiChevronDown />
      </Box>
    </HStack>
  );
};
