import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
    gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
    
    const { data, error, isLoading } = useScreenshots(gameId);

    if (isLoading) return;

    if (error) throw error;

    if (data?.count === 0) return null;

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            {data?.results.map((file) => (
                <Image key={file.id} src={file.image} />
            ))}
        </SimpleGrid>
    );
};

export default GameScreenshot;
