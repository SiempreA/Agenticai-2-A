import { Box, Text, VStack } from "@chakra-ui/react";
import BrandIcon from "../../../public/assets/icons/brand";
import { useAppContext } from "@/context/AppContext";

const ChatBubble = () => {
  const { userActiveState } = useAppContext();

  return (
    <VStack alignItems="start" px={6}>
      <Box
        border="1px solid #E7E7E4"
        p="6px"
        width={9}
        height={9}
        borderRadius={20}
      >
        <BrandIcon width="22px" height="22px" />
      </Box>
      {userActiveState ? (
        <Text fontSize="sm">"I'm ready to help you!"</Text>
      ) : (
        <Text fontSize="sm">
          This customer is undergoing a high-risk fraud review. To find out
          more,{" "}
          <Text as="span" color="#6237DF" textDecoration="underline">
            access the history.
          </Text>
        </Text>
      )}
    </VStack>
  );
};

export default ChatBubble;
