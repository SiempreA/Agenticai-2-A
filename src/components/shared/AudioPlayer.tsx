import { HStack, Button, Text } from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/slider";
import { useState } from "react";
import { Icon } from "@iconify/react";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => setIsPlaying((prev) => !prev);

  return (
    <HStack alignItems="center" height={8}>
      <Button
        onClick={togglePlayPause}
        variant="ghost"
        borderRadius={20}
        width={8}
        height={8}
        backgroundColor="#F8F8F6"
        minWidth={0}
        p={0}
      >
        {isPlaying ? (
          <Icon icon="mdi:pause" width="24" height="24" />
        ) : (
          <Icon icon="mdi:play" width="24" height="24" />
        )}
      </Button>

      <Slider aria-label="audio-progress" flex="1" defaultValue={30}>
        <SliderTrack bg="#BBBBB9" h={4}>
          <SliderFilledTrack bg="#000000" />
        </SliderTrack>
        <SliderThumb boxSize={4} />
      </Slider>

      <Text fontSize="xs" textAlign="right" fontWeight="light">
        5:32
      </Text>
    </HStack>
  );
};

export default AudioPlayer;
