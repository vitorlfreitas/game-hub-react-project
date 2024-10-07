import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { SimpleGrid, Image } from "@chakra-ui/react";

interface Props {
    gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
    const { data, error, isLoading } = useScreenshots(gameId);

    if (isLoading) return;

    if (error) throw error;

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            {data?.results.map((file) => (
                <Image key={file.id} src={file.image} />
            ))}
        </SimpleGrid>
    );
};

export default GameScreenshot;
