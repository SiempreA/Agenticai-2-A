import { Text } from "@chakra-ui/react";

export const highlightWord = (text: string, word: string) => {
  let color: string;
  if (word.toLowerCase().includes("gold")) {
    color = "#907324";
  } else if (word.toLowerCase().includes("green")) {
    color = "#57744A";
  } else {
    color = "inherit";
  }

  const regex = new RegExp(`(${word})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === word.toLowerCase() ? (
      <Text as="span" key={index} color={color} fontWeight="semibold">
        {part}
      </Text>
    ) : (
      part
    ),
  );
};
