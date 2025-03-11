import { VStack, Box, Text, Button, HStack } from "@chakra-ui/react";
import AudioPlayer from "../shared/AudioPlayer";
import ImageCard from "../shared/ImageCard";
import { useAppContext } from "@/context/AppContext";

const mockCards = [
  {
    image: "../../assets/images/accident-1.png",
    title: "Accident Picture.PNG",
    weight: "168kb",
  },
  {
    image: "../../assets/images/accident-2.png",
    title: "Accident Picture.PNG",
    weight: "168kb",
  },
];

const IncidentDetails = ({
  setShowAnalysis,
}: {
  setShowAnalysis: (item: boolean) => void;
}) => {
  const { userActiveState } = useAppContext();

  const handleShowAnalysis = () => {
    setShowAnalysis(true);
  };

  return (
    <VStack alignItems="left" p="24px 24px 0px 24px" gap={0}>
      <Text fontSize={20} fontWeight="light" mb={7}>
        Incident Details
      </Text>
      <VStack gap={0} alignItems="left" mb={6}>
        <Text fontWeight="medium" mb={3}>
          Description
        </Text>
        <Text color="black">
          Concerned customer. Provided a detailed account of the accident
          involving his vehicle, attaching photos of the damage along with the
          claims form for the insurer's review.
        </Text>
        <HStack>
          <Text as="span" color="#4B4949" fontWeight="bold">
            Date:
          </Text>{" "}
          01/15/2025{" "}
          <Text as="span" color="#4B4949" fontWeight="bold">
            Hour:
          </Text>{" "}
          3PM Local:{" "}
          <Text as="span" color="#4B4949" fontWeight="bold">
            Avenue
          </Text>{" "}
          Providencia
        </HStack>
      </VStack>
      <VStack gap="12px" alignItems="left" mb={6}>
        <Text fontWeight="medium">Audio</Text>
        <Box p={4} border="1px solid #E0E0DE" borderRadius={12}>
          <VStack color="black" alignItems="left" gap={1}>
            <AudioPlayer />
          </VStack>
        </Box>
      </VStack>
      <VStack alignItems="left" gap={0}>
        <Text fontWeight="medium" mb={3}>
          Documents
        </Text>
        <HStack alignItems="left" mb={9}>
          {mockCards.map((card, i) => (
            <ImageCard
              key={i}
              src={card.image}
              fileName={card.title}
              fileSize={card.weight}
            />
          ))}
        </HStack>
        <Button
          backgroundColor="#313030"
          height="60px"
          borderRadius={50}
          onClick={handleShowAnalysis}
          disabled={!userActiveState}
        >
          Analyze the case
        </Button>
      </VStack>
    </VStack>
  );
};

export default IncidentDetails;
