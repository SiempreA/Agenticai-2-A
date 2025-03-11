
import { VStack, HStack, Box, Text } from "@chakra-ui/react";
import CheckIcon from "../../../public/assets/icons/check";

import { mockedFailAnalysisStatus } from "@/constants";
import XIcon from "../../../public/assets/icons/XIcon";
import EmptyStatusIcon from "../../../public/assets/icons/emptyStatus";

const StatusList = () => {
  let encounteredFailure = false;

  
  const rows = [];
  for (let i = 0; i < mockedFailAnalysisStatus.length; i += 3) {
    rows.push(mockedFailAnalysisStatus.slice(i, i + 3));
  }

  return (
    <VStack p="24px" width="100%" borderBottom="1px solid #E0E0DE" gap={4}>
      {rows.map((row, rowIndex) => (
        <HStack key={rowIndex} width="100%" justify="space-between">
          {row.map((status, i) => {
            let icon;
            if (!encounteredFailure && status.state) {
              icon = <CheckIcon width="36px" height="36px" />;
            } else if (!encounteredFailure && !status.state) {
              icon = <XIcon width="36px" height="36px" />;
              encounteredFailure = true;
            } else {
              icon = <EmptyStatusIcon width="36px" height="36px" />;
            }

            return (
              <HStack key={i} gap={2} width="100%" alignItems="center">
                {icon}
                <Text fontSize="sm" flexShrink={0}>
                  {status.label}
                </Text>
                
                {i < row.length - 1 && (
                  <Box flexGrow={1} height="1px" borderBottom="1px solid #E0E0DE" mx={2} />
                )}
              </HStack>
            );
          })}
        </HStack>
      ))}
    </VStack>
  );
};

export default StatusList;
