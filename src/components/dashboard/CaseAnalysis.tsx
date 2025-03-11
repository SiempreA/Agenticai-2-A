import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import CheckIcon from "../../../public/assets/icons/check";
import XIcon from "../../../public/assets/icons/XIcon";
import SquareStatusIcon from "../../../public/assets/icons/squareStatus";
import { mockFailAnalysisCard } from "@/constants";
import StatusList from "./StatusList";
import InconsistencyDetails from "../shared/InconsistencyDetails";

const CaseAnalysis = () => {
  let failureCardIndex = -1;

  return (
    <VStack gap={0} width="100%">
      <StatusList />
      <VStack px={6} pt={5} gap={8} alignItems="left" width="100%">
        {mockFailAnalysisCard.map((card, cardIndex) => {
          const cardHasFailure = card.assessments.some(
            (assessment) => !assessment.state,
          );
          if (failureCardIndex === -1 && cardHasFailure) {
            failureCardIndex = cardIndex;
          }
          return (
            <VStack key={card.title} alignItems="flex-start">
              <HStack>
                <Image src={card.person.image} borderRadius={50} />
                <Text fontSize="sm">{card.title}</Text>
              </HStack>
              <VStack alignItems="flex-start" width="100%">
                {card.assessments.map((assessment) => {
                  let icon;
                  let extraMessage = null;
                  let stateButton = null;
                  if (failureCardIndex !== -1 && cardIndex > failureCardIndex) {
                    icon = <SquareStatusIcon width="36px" height="36px" />;
                  } else {
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
                        <InconsistencyDetails
                          agent={card.title}
                          avatar={card.person.image}
                        />
                      );
                    }
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
                          borderImage="repeating-linear-gradient(90deg, #A2A2A1, #A2A2A1 5px, transparent 5px, transparent 10px) 1"
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
          );
        })}
      </VStack>
    </VStack>
  );
};

export default CaseAnalysis;
