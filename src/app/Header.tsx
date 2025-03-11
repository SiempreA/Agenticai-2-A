import BrandIcon from "../../public/assets/icons/brand";
import { Avatar, Box, HStack, Image, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <HStack
      height="93px"
      padding="32px 24px 26px 24px"
      width="100%"
      justifyContent="space-between"
    >
      <HStack>
        <Box
          width="35px"
          height="35px"
          border="1px solid #E7E7E4"
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <BrandIcon width="22px" />
        </Box>
        <Text fontWeight="medium" fontSize="22px" letterSpacing="-1.1px">
          Agentic{" "}
          <Text as="span" color="#D10001">
            AI
          </Text>
        </Text>
      </HStack>
      <Avatar.Root size="xs" key="xs">
        <Avatar.Fallback name="Carlos Client" />
        <Avatar.Image src="../../assets/images/user-avatar.png" />
      </Avatar.Root>
    </HStack>
  );
};

export default Header;
