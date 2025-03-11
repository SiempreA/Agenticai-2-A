import { customer } from "@/constants";
import { highlightWord } from "@/utils";
import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogCloseTrigger,
  DialogBody,
} from "@/components/ui/dialog";
import {
  Portal,
  Button,
  HStack,
  AvatarGroup,
  Avatar,
  VStack,
  Box,
  Slider,
  Text,
} from "@chakra-ui/react";
import { useAppContext } from "@/context/AppContext";
const UserDetails = () => {
  const { userActiveState } = useAppContext();

  return (
    <DialogRoot placement="center" motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
        <Button
          color="#7D7D7C"
          fontWeight="semibold"
          fontSize="12px"
          textDecoration="underline"
          letterSpacing={-0.5}
          variant="outline"
          size="sm"
          border={"none"}
          p={0}
          _hover={{ bg: "transparent", textDecoration: "underline" }}
        >
          ID:{customer.customerId} - See more details
        </Button>
      </DialogTrigger>
      <Portal>
        <DialogContent borderRadius={16} maxW="580px">
          <DialogHeader borderBottom="1px solid #E0E0DE">
            <HStack alignItems="left">
              <AvatarGroup>
                <Avatar.Root size="2xl">
                  <Avatar.Fallback />
                  <Avatar.Image src={customer.avatarImage} />
                </Avatar.Root>
              </AvatarGroup>
              <VStack alignItems="left" gap={2} justifyContent="center" p={0}>
                <DialogTitle fontWeight="light" fontSize="2xl">
                  {customer.name}, {customer.age}
                </DialogTitle>
                <Text fontWeight="light">
                  Member since {customer.memberSince}
                </Text>
              </VStack>
            </HStack>
            <DialogCloseTrigger />
          </DialogHeader>
          <DialogBody py="19px">
            <HStack
              p={3}
              backgroundColor="#F8F8F6"
              width="fit"
              borderRadius={50}
              marginBottom="19px"
              fontWeight="light"
            >
              Coverage: {userActiveState ? "Active" : "Paused"}
              <Box
                width={2.5}
                height={2.5}
                borderRadius={10}
                backgroundColor={userActiveState ? "#11CD31" : "#D10001"}
              />
            </HStack>
            <VStack alignItems="left" gap={0}>
              <Text fontWeight="semibold">Overall</Text>
              <HStack
                justifyContent="space-between"
                borderBottom="solid 1px #E0E0DE"
                fontWeight="light"
                py={6}
              >
                <Text>Customer ID / Policy Number</Text>
                <Text>
                  {customer.customerId} / {customer.policyNumber}
                </Text>
              </HStack>
              <HStack
                justifyContent="space-between"
                borderBottom="solid 1px #E0E0DE"
                fontWeight="light"
                py={6}
              >
                <Text>Current Plan</Text>
                <Text>{highlightWord(customer.currentPlan, "Gold Plan")}</Text>
              </HStack>
              <HStack
                justifyContent="space-between"
                borderBottom="solid 1px #E0E0DE"
                fontWeight="light"
                py={6}
              >
                <Text>Payment Status</Text>
                <Text>{customer.paymentStatus}</Text>
              </HStack>
              <HStack
                justifyContent="space-between"
                fontWeight="light"
                paddingTop={6}
                paddingBottom={14}
              >
                <Text>Alert flags</Text>
                <Text>{highlightWord(customer.alertFlags, "Green")}</Text>
              </HStack>
            </VStack>
            <VStack alignItems="left" gap={0}>
              <Text fontWeight="semibold">Contact informations</Text>
              <HStack
                justifyContent="space-between"
                borderBottom="solid 1px #E0E0DE"
                fontWeight="light"
                py={6}
              >
                <Text>Phone Number</Text>
                <Text>{customer.phoneNumber}</Text>
              </HStack>
              <HStack
                justifyContent="space-between"
                borderBottom="solid 1px #E0E0DE"
                fontWeight="light"
                py={6}
              >
                <Text>E-mail Address</Text>
                <Text>{customer.email}</Text>
              </HStack>
              <HStack
                justifyContent="space-between"
                fontWeight="light"
                paddingTop={6}
                paddingBottom={14}
              >
                <Text>Last Contacted</Text>
                <HStack>
                  <Text>{customer.lastContacted}</Text>
                  <Text textDecoration="underline" cursor="pointer">
                    More details
                  </Text>
                </HStack>
              </HStack>
            </VStack>
            <VStack alignItems="left" gap={0}>
              <Text fontWeight="semibold">Policy & Coverage Details</Text>
              <HStack
                justifyContent="space-between"
                borderBottom="solid 1px #E0E0DE"
                fontWeight="light"
                py={6}
              >
                <Text>Policy Expiration Date</Text>
                <Text>{customer.policyExpiration}</Text>
              </HStack>

              <HStack justifyContent="space-between" py={6} fontWeight="light">
                <Text>Payment Status</Text>
                <HStack>
                  <Text>{customer.claimLimit}%</Text>
                  <Box pointerEvents="none">
                    <Slider.Root
                      width="156px"
                      defaultValue={[customer.claimLimit]}
                    >
                      <Slider.Control>
                        <Slider.Track>
                          <Slider.Range />
                        </Slider.Track>
                      </Slider.Control>
                    </Slider.Root>
                  </Box>
                </HStack>
              </HStack>
            </VStack>
          </DialogBody>
        </DialogContent>
      </Portal>
    </DialogRoot>
  );
};

export default UserDetails;
