import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
    const { data, error } = usePlatforms();

    if (error) return null;
    
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Platforms
            </MenuButton>
            <MenuList>
                {data.map((plat) => (
                    <MenuItem key={plat.id}>{plat.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
