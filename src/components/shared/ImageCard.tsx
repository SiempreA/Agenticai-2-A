import { Box, HStack, Image, Text, Portal } from "@chakra-ui/react";
import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogCloseTrigger,
  DialogBody,
} from "@/components/ui/dialog";

interface ImageCardProps {
  src: string;
  alt?: string;
  fileName: string;
  fileSize: string;
}

const ImageCard = ({
  src,
  alt = "image",
  fileName,
  fileSize,
}: ImageCardProps) => {
  return (
    <HStack
      width="auto"
      borderRadius={16}
      overflow="hidden"
      p="7px"
      backgroundColor={"#F8F8F6"}
    >
      <DialogRoot placement="center">
        <DialogTrigger>
          <Image src={src} alt={alt} width={12} height={12} borderRadius={11} />
        </DialogTrigger>
        <Portal>
          <DialogContent borderRadius={16}>
            {/* <DialogHeader></DialogHeader> */}
            <DialogBody p={6}>
              <Image
                src={src}
                alt={alt}
                width="464px"
                height="464px"
                borderRadius={11}
              />
            </DialogBody>
          </DialogContent>
        </Portal>
      </DialogRoot>
      <Box justifyContent="center">
        <Text fontSize="sm">{fileName}</Text>
        <Text fontSize="sm" color="#7D7D7C">
          {fileSize}
        </Text>
      </Box>
    </HStack>
  );
};

export default ImageCard;
