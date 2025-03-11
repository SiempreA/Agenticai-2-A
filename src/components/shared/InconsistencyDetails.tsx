import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogCloseTrigger,
  DialogBody,
} from "@/components/ui/dialog";
import { inconsistencyDetails } from "@/constants";
import {
  Portal,
  Button,
  HStack,
  VStack,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";

const InconsistencyDetails = ({
  agent,
  avatar,
}: {
  agent: string;
  avatar: string;
}) => {
  return (
    <DialogRoot placement="center" motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
        <Button
          size="sm"
          ml={2}
          variant="ghost"
          height={9}
          border="1px solid #E0E0DE"
          borderRadius={50}
          fontSize="12px"
        >
          Check
        </Button>
      </DialogTrigger>
      <Portal>
        <DialogContent borderRadius={16} maxW="580px">
          <DialogHeader pt={8} px={8}>
            <DialogTitle fontSize="2xl" fontWeight="light">
              Details about the inconsistency
            </DialogTitle>
            <DialogCloseTrigger size="2xl" insetEnd={2} top={4} />
          </DialogHeader>
          <DialogBody py="19px" px={0}>
            <VStack
              gap={0}
              alignItems="left"
              borderBottom="1px solid #E0E0DE"
              px={8}
            >
              <HStack mb={4}>
                <Image src={avatar} borderRadius={50} />
                <Text fontSize="sm">{agent}</Text>
              </HStack>
              <Text mb={4}>
                We have identified an inconsistency in the photos you provided,
                as they do not match the description of the accident. The
                accident apparently resulted in more damage than the customer
                mentioned.
              </Text>
              <VStack
                alignItems="left"
                border="solid 1px #E0E0DE"
                borderRadius={16}
                p="24px 0px 24px 24px"
                gap={5}
                mb={2.5}
              >
                <HStack alignItems="left" width="100%" gap={4}>
                  <VStack alignItems="left" gap={3} minWidth="253px">
                    <Text fontWeight="medium">Description</Text>
                    <Box
                      p="22px 0 22px 16px"
                      maxWidth="253px"
                      backgroundColor="#F5F5F5"
                      borderRadius={12}
                    >
                      <Text color="#4B4949">
                        Customer reported a{" "}
                        <strong>minor side collision</strong>. Submitted a
                        detailed accident report, including damage photos and
                        the claims form for review. Requested updates on claim
                        processing and repair timeline.
                      </Text>
                    </Box>
                  </VStack>
                  <VStack alignItems="left">
                    <Text fontWeight="medium">Photos</Text>
                    <HStack>
                      {inconsistencyDetails.photos.map((photo) => (
                        <Image
                          key={photo}
                          src={photo}
                          borderRadius={12}
                          width="165px"
                          height="165px"
                        />
                      ))}
                    </HStack>
                  </VStack>
                </HStack>
                <Text>
                  Front collision with more <strong>destructive damage</strong>{" "}
                  to both vehicles.
                </Text>
              </VStack>
              <HStack
                p={3}
                backgroundColor="#FFF9ED"
                borderRadius={12}
                fontSize="xs"
                mb={2.5}
              >
                <Text color="#D10001" fontWeight="semibold">
                  Not covered:
                </Text>
                <Text fontWeight="light">
                  Inconsistencies were found, preventing the claim from being
                  approved
                </Text>
              </HStack>
            </VStack>
            <VStack alignItems="left" px={8} pt={5} gap={0} mb={2}>
              <Text fontWeight="medium" fontSize="sm">
                Possible actions
              </Text>
              <Box as="ul" listStyleType="disc" pl={4}>
                {inconsistencyDetails.actions.map((action) => (
                  <li key={action}>
                    <Text fontSize="sm" fontWeight="light">
                      {action}
                    </Text>
                  </li>
                ))}
              </Box>
            </VStack>
          </DialogBody>
        </DialogContent>
      </Portal>
    </DialogRoot>
  );
};

export default InconsistencyDetails;
