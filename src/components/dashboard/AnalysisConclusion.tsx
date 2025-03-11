import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { claimDetails, claimSections, claimSummaryList } from "@/constants";

import StatusList from "./StatusList";
import BrandIcon from "../../../public/assets/icons/brand";
import { Icon } from "@iconify/react/dist/iconify.js";

const AnalysisConclusion = () => {
  return (
    <VStack alignItems="left" gap={8} height="100%">
      <StatusList />
      <Box px={6} width="100%">
        <BrandIcon width="35" height="35" />
      </Box>
      <VStack alignItems="left" px={6} gap={6} flex={1}>
        <Text fontWeight="bold" color="#4B4949">
          Claim Analysis Conclusion
        </Text>
        <Text fontWeight="light">
          The provided evidence confirms that the submitted photo aligns with
          the customer's description. No indications of fraud or inconsistencies
          were found.
        </Text>
        <Text fontWeight="bold" color="#4B4949">
          Claim Summary:
        </Text>
        <Box px={6} as="ul" listStyleType="disc">
          {claimSummaryList.map((item) => (
            <li key={item.title}>
              <HStack>
                <Text fontWeight="semibold" color="#4B4949">
                  {item.title}:
                </Text>
                <Text fontWeight="light" color="#4B4949">
                  {item.description}
                </Text>
              </HStack>
            </li>
          ))}
        </Box>
        <HStack bg="#edf3e8" width="100%" borderRadius={12} p={4}>
          <Text color="#57744A">Covered:</Text>
          <Text color="#000000">
            Proceeding with claim approval based on the verified details.
          </Text>
        </HStack>
      </VStack>
      <DialogRoot
        placement="center"
        motionPreset="slide-in-bottom"
        scrollBehavior="inside"
      >
        <Box px={6}>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              height="60px"
              border="1px solid #E0E0DE"
              borderRadius={50}
              width="100%"
            >
              Complete Claim and Generate a Document
            </Button>
          </DialogTrigger>
        </Box>
        <DialogContent borderRadius={16} maxW="580px">
          <DialogHeader px={8}>
            <HStack justifyContent="space-between">
              <DialogTitle fontSize="xl" fontWeight="light">
                Claim Final Details
              </DialogTitle>
              <HStack>
                <Box pr={14}>
                  <Icon icon="carbon:download" width={24} height={24} />
                </Box>
                <DialogCloseTrigger size="2xl" insetEnd={6} />
              </HStack>
            </HStack>
          </DialogHeader>
          <DialogBody px={8}>
            <VStack border="1px solid #E0E0DE" p={6} borderRadius={16}>
              <Box>
                <Text mb={6} fontWeight="bold" fontSize="lg">
                  FINAL CLAIM ACTIVATION AGREEMENT
                </Text>
                <Box mb={6}>
                  {claimDetails.map((detail, index) => (
                    <Text key={index}>
                      <Text as="span">{detail.label}:</Text> {detail.value}
                    </Text>
                  ))}
                </Box>

                {claimSections.map((section, index) => (
                  <Box key={index} mb={6}>
                    <Text as="span" fontWeight="bold" fontSize="lg">
                      {section.title}
                    </Text>
                    <br />
                    <Text>{section.content}</Text>
                  </Box>
                ))}
              </Box>
            </VStack>
          </DialogBody>
        </DialogContent>
      </DialogRoot>
    </VStack>
  );
};

export default AnalysisConclusion;
