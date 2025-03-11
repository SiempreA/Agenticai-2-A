import { Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

const ChatBox = () => {
  return (
    <Box px={6} pt={6}>
      <HStack
        height={52}
        width="100%"
        backgroundColor="#ffffff"
        h="52px"
        border="1.5px solid #dadada"
        borderRadius={50}
        pl={2}
        gap="10px"
      >
        <HStack h={10} bg="#000000" borderRadius={50} width="170px" gap={0}>
          <Button
            borderRadius={50}
            width="40px"
            height="40px"
            minWidth={0}
            p={0}
            minHeight={0}
            bgGradient="to-r"
            gradientFrom="#000000"
            gradientTo="#666666"
          >
            <Icon icon="lucide:user" />
          </Button>
          <Text fontSize="xs" color="#ffffff" pr="12px" pl="8px">
            All Agents
          </Text>
        </HStack>
        <Input
          placeholder="Ask to agent"
          border="none"
          _focus={{ outline: "none", boxShadow: "none", border: "none" }}
          p="0px"
        />
        <Button borderRadius={50} width="48px" height="48px">
          <Icon icon="tabler:send" />
        </Button>
      </HStack>
    </Box>
  );
};

export default ChatBox;
