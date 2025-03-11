import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";

import { customer } from "@/constants";
import UserDetails from "./UserDetails";

const UserCard = () => {
  return (
    <HStack>
      <Avatar.Root size="md" key="md">
        <Avatar.Fallback name="Carlos Client" />
        <Avatar.Image src="../../assets/images/avatar-1.png" />
      </Avatar.Root>
      <VStack alignItems={"start"} gap={0}>
        <Text fontWeight="light">
          {customer.name}, {customer.age}
        </Text>
        <UserDetails />
      </VStack>
    </HStack>
  );
};

export default UserCard;
