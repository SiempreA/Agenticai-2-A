import { VStack, HStack, Box, Text, Image, Button } from "@chakra-ui/react";
import CheckIcon from "../../../public/assets/icons/check";
import XIcon from "../../../public/assets/icons/XIcon";
import StatusList from "./StatusList";
import { Icon } from "@iconify/react/dist/iconify.js";
import FraudDetails from "./FraudDetails";
import { FraudAnalysisProps } from "@/types";

const FraudAnalysis: React.FC<FraudAnalysisProps> = ({ card }) => {
  const falseAssessments = card.assessments.filter(
    (assessment) => !assessment.state,
  );

  return (
    <VStack alignItems="left" width="100%">
      <StatusList />
      <VStack
        px={6}
        pt={5}
        pb={8}
        key={card.title}
        alignItems="flex-start"
        borderBottom="1px solid #E0E0DE"
      >
        <HStack>
          <Image src={card.person.image} borderRadius="50%" />
          <Text fontSize="sm">{card.title}</Text>
        </HStack>
        <VStack alignItems="flex-start" width="100%">
          {falseAssessments.map((assessment) => {
            let icon;
            let extraMessage = null;
            let stateButton = null;

            if (assessment.state) {
              icon = <CheckIcon width="36px" height="36px" />;
            } else {
              icon = <XIcon width="36px" height="36px" />;
              extraMessage = (
                <Text fontSize="xs" color="#F31710" fontWeight="bold">
                  An inconsistency was identified
                </Text>
              );
              stateButton = (
                <FraudDetails agent={card.title} avatar={card.person.image} />
              );
            }

            return (
              <VStack
                key={assessment.label}
                alignItems="flex-start"
                width="100%"
              >
                <HStack
                  width="100%"
                  alignItems="center"
                  justifyContent="space-between"
                  gap={5}
                >
                  <VStack alignItems="left" gap={1}>
                    <Text>{assessment.label}</Text>
                    {extraMessage}
                  </VStack>
                  <Box
                    flex="1"
                    border="0.5px dashed transparent"
                    borderImage="repeating-linear-gradient(
                      90deg,
                      #A2A2A1,
                      #A2A2A1 5px,
                      transparent 5px,
                      transparent 10px
                    ) 1"
                  />
                  <HStack alignItems="center">
                    {stateButton}
                    {icon}
                  </HStack>
                </HStack>
              </VStack>
            );
          })}
        </VStack>
      </VStack>
      <VStack px={6} pt={10} alignItems="flex-start">
        <Box p={4} bg="#EBEBE8" borderRadius={16}>
          <Box mb={2}>
            <Icon
              icon="pajamas:cancel"
              color="#F31710"
              width={24}
              height={24}
            />
          </Box>
          <Text mb={4}>
            A potential <strong>fraud has been identified</strong> in the claims
            request process. Please review the details carefully and take the
            necessary actions according to the protocols.{" "}
            <strong>
              All other analyses have been paused until resolution
            </strong>
            , as this is a high-risk alert.
          </Text>
          <Button width="100%" borderRadius={50} bg="#313030" height="60px">
            Report possible fraud
          </Button>
        </Box>
      </VStack>
      ;
    </VStack>
  );
};

export default FraudAnalysis;
