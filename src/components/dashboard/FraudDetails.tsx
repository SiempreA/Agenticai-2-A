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
  VStack,
  Box,
  Text,
  Image,
  HStack,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

const FraudDetails = ({ agent, avatar }: { agent: string; avatar: string }) => {
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
        <DialogContent borderRadius={16} maxW="593px">
          <DialogHeader pt={8} px={8}>
            <DialogTitle fontSize="2xl" fontWeight="light">
              Details about the possible fraud
            </DialogTitle>
            <DialogCloseTrigger size="2xl" insetEnd={2} top={4} />
          </DialogHeader>
          <DialogBody py="19px" px={0}>
            <VStack gap={0} alignItems="left" px={8}>
              <HStack mb={4}>
                <Image src={avatar} borderRadius={50} />
                <Text fontSize="sm">{agent}</Text>
              </HStack>
              <Text fontWeight="bold" mb={4}>
                Fraud Analysis – Forged Document in Auto Insurance Claim
              </Text>
              <VStack alignItems="flex-start" mb={6} gap={6}>
                <VStack
                  color="#4B4949"
                  fontWeight="bold"
                  alignItems="flex-start"
                  gap={1}
                >
                  <Text>Claim Details:</Text>
                  <Box
                    as="ul"
                    listStyleType="disc"
                    pl={5}
                    className="custom-grey-list"
                  >
                    <li>
                      <HStack gap={1}>
                        <Text color="#7D7D7C" fontWeight="light">
                          Claim Number:
                        </Text>
                        <Text fontWeight="normal">123456789</Text>
                      </HStack>
                    </li>
                  </Box>
                  <Box
                    as="ul"
                    listStyleType="disc"
                    pl={5}
                    className="custom-grey-list"
                  >
                    <li>
                      <HStack gap={1}>
                        <Text color="#7D7D7C" fontWeight="light">
                          Policyholder:
                        </Text>
                        <Text fontWeight="normal">John Smith</Text>
                      </HStack>
                    </li>
                  </Box>
                  <Box
                    as="ul"
                    listStyleType="disc"
                    pl={5}
                    className="custom-grey-list"
                  >
                    <li>
                      <HStack gap={1}>
                        <Text color="#7D7D7C" fontWeight="light">
                          Vehicle:
                        </Text>
                        <Text fontWeight="normal">
                          Toyota Corolla 2020 - Licence Plate ABC- 1234
                        </Text>
                      </HStack>
                    </li>
                  </Box>
                </VStack>
                <VStack
                  color="#4B4949"
                  fontWeight="bold"
                  alignItems="flex-start"
                >
                  <Text>Fraud Indicators:</Text>
                  <Box
                    as="ul"
                    listStyleType="disc"
                    pl={5}
                    className="custom-list"
                  >
                    <VStack gap={1} alignItems="flex-start">
                      <li>
                        <Text fontWeight="normal">
                          Chassis number mismatch with DMV records.
                        </Text>
                      </li>
                      <li>
                        <Text fontWeight="normal">
                          Signs of document tampering in ownership details.
                        </Text>
                      </li>
                      <li>
                        <Text fontWeight="normal">
                          Vehicle still registered to a third party.
                        </Text>
                      </li>
                    </VStack>
                  </Box>
                </VStack>
                <VStack
                  color="#4B4949"
                  fontWeight="bold"
                  alignItems="flex-start"
                >
                  <Text>Actions Taken:</Text>
                  <Box
                    as="ul"
                    listStyleType="disc"
                    pl={5}
                    className="custom-list"
                  >
                    <VStack gap={1} alignItems="flex-start">
                      <li>
                        <Text fontWeight="normal">
                          Claim Suspended due to high fraud risk.
                        </Text>
                      </li>
                      <li>
                        <Text fontWeight="normal">
                          Escalated to Compliance for further review.
                        </Text>
                      </li>
                      <li>
                        <Text fontWeight="normal">
                          Policyholder Contacted for original document
                          verification.
                        </Text>
                      </li>
                    </VStack>
                  </Box>
                </VStack>
                <VStack
                  color="#4B4949"
                  fontWeight="bold"
                  alignItems="flex-start"
                >
                  <Text>Next Steps:</Text>
                  <Text fontWeight="normal">
                    Awaiting response. Investigation timeframe:{" "}
                    <strong>5 business days.</strong>
                  </Text>
                </VStack>
              </VStack>
              <VStack alignItems="flex-start" mb={6}>
                <HStack p={5} bg="#F1F1F0" borderRadius={12} width="100%">
                  <Icon
                    icon="pajamas:cancel"
                    color="#F31710"
                    width={24}
                    height={24}
                  />
                  <Text>
                    <strong>Risk Level:</strong>{" "}
                    <Text as="span" color="#F31710" fontWeight="bold">
                      HIGH
                    </Text>{" "}
                    - Possible document fraud.
                  </Text>
                </HStack>
              </VStack>
              <Button width="100%" borderRadius={50} bg="#313030" height="60px">
                Report possible fraud
              </Button>
            </VStack>
          </DialogBody>
        </DialogContent>
      </Portal>
    </DialogRoot>
  );
};

export default FraudDetails;
