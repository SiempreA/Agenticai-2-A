import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { AppContextProvider } from "@/context/AppContext";

const UIContainer = () => {
  return (
    <AppContextProvider>
      <Flex height="100vh" width="100vw" direction="column">
        <Header />
        <Flex flex="1">
          <Sidebar />
          <Flex flex="1" p="0px 24px 26px 16px">
            <Outlet />
          </Flex>
        </Flex>
      </Flex>
    </AppContextProvider>
  );
};

export default UIContainer;
