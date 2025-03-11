import { useEffect, useState } from "react";
import { Text, VStack } from "@chakra-ui/react";

import ChatBox from "./ChatBox";
import ChatBubble from "./ChatBubble";
import CaseAnalysis from "./CaseAnalysis";
import AnalysisConclusion from "./AnalysisConclusion";
import FraudAnalysis from "./FraudAnalysis";
import { mockedFailAnalysisStatus, mockFailAnalysisCard } from "@/constants";
import { useAppContext } from "@/context/AppContext";

const AIAnalysis = ({ showAnalysis }: { showAnalysis: boolean }) => {
  const { setUserActiveState } = useAppContext();

  const [showAnalysisConclusion, setShowAnalysisConclusion] = useState(false);
  const [showFraudAnalysis, setShowFraudAnalysis] = useState(false);

  const anyConditionFalse =
    mockedFailAnalysisStatus.some((item) => !item.state) ||
    mockFailAnalysisCard.some((card) =>
      card.assessments.some((assessment) => !assessment.state),
    );

  const failingCard = mockFailAnalysisCard.find((card) =>
    card.assessments.some((assessment) => !assessment.state),
  );

  useEffect(() => {
    if (showAnalysis) {
      setShowAnalysisConclusion(false);
      setShowFraudAnalysis(false);

      const timer = setTimeout(() => {
        if (anyConditionFalse) {
          setShowFraudAnalysis(true);
          setUserActiveState(false);
        } else {
          setShowAnalysisConclusion(true);
        }
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setShowAnalysisConclusion(false);
      setShowFraudAnalysis(false);
    }
  }, [showAnalysis, anyConditionFalse]);

  return (
    <VStack
      p="24px 0"
      alignItems="left"
      backgroundColor="#F8F8F6"
      borderRadius={16}
      h="100%"
      justifyContent="space-between"
      gap={0}
    >
      <Text fontSize={20} fontWeight="light" p="0 24px">
        Agentic AI Analysis
      </Text>
      {showAnalysis ? (
        <>
          <VStack
            flex="1"
            alignItems="left"
            width="100%"
            overflowY="scroll"
            overflowX="none"
          >
            {anyConditionFalse ? (
              showFraudAnalysis && failingCard ? (
                <FraudAnalysis card={failingCard} />
              ) : (
                <CaseAnalysis />
              )
            ) : showAnalysisConclusion ? (
              <AnalysisConclusion />
            ) : (
              <CaseAnalysis />
            )}
          </VStack>
        </>
      ) : (
        <>
          <VStack flex="1" alignItems="left" width="100%" pt={9}>
            <ChatBubble />
          </VStack>
        </>
      )}
    </VStack>
  );
};

export default AIAnalysis;
