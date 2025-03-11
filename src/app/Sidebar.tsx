import { NavLink } from "react-router-dom";
import { VStack, Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import BrandIcon from "../../public/assets/icons/brand";
import MonitorIcon from "../../public/assets/icons/monitor";

export default function Sidebar() {
  return (
    <VStack
      as="nav"
      p={4}
      bg="#000000"
      color="white"
      width="72px"
      borderRadius="0px 12px 12px 0px"
      padding="27px 16px"
      mb={6}
      justifyContent="space-between"
    >
      <VStack gap={5}>
        <NavLink to="/home">
          {({ isActive }) => (
            <Button
              variant="ghost"
              width="40px"
              height="38px"
              borderRadius={12}
              background={isActive ? "white" : "#000000"}
            >
              <Icon
                icon="carbon:home"
                width={24}
                height={24}
                color={isActive ? "black" : "white"}
                style={{ opacity: isActive ? 1 : 0.5 }}
              />
            </Button>
          )}
        </NavLink>

        <NavLink to="/dashboard">
          {({ isActive }) => (
            <Button
              variant="ghost"
              width="40px"
              height="38px"
              borderRadius={12}
              background={isActive ? "white" : "#000000"}
            >
              <BrandIcon
                fill={isActive ? "black" : "white"}
                opacity={isActive ? 1 : 0.5}
              />
            </Button>
          )}
        </NavLink>

        <NavLink to="/files">
          {({ isActive }) => (
            <Button
              variant="ghost"
              width="40px"
              height="38px"
              borderRadius={12}
              background={isActive ? "white" : "#000000"}
            >
              <Icon
                icon="carbon:box"
                width={24}
                height={24}
                color={isActive ? "black" : "white"}
                style={{ opacity: isActive ? 1 : 0.5 }}
              />
            </Button>
          )}
        </NavLink>

        <NavLink to="/monitor">
          {({ isActive }) => (
            <Button
              variant="ghost"
              width="40px"
              height="38px"
              borderRadius={12}
              background={isActive ? "white" : "#000000"}
            >
              <MonitorIcon
                fill={isActive ? "black" : "white"}
                opacity={isActive ? 1 : 0.5}
              />
            </Button>
          )}
        </NavLink>
      </VStack>
      <NavLink to="/#">
        {({ isActive }) => (
          <Button
            variant="ghost"
            width="40px"
            height="38px"
            borderRadius={12}
            background={isActive ? "white" : "#000000"}
          >
            <Icon
              icon="carbon:settings"
              width={24}
              height={24}
              color={isActive ? "black" : "white"}
              style={{ opacity: isActive ? 1 : 0.5 }}
            />
          </Button>
        )}
      </NavLink>
    </VStack>
  );
}
