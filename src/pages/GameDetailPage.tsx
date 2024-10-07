import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshot from "../components/GameScreenshot";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data: game, isLoading, error } = useGame(slug!);

    if (isLoading) return <Spinner />;

    if (error || !game) throw error;

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            <GridItem>
                <Heading>{game.name}</Heading>
                <ExpandableText children={game.description_raw} />
                <GameAttributes game={game} />
            </GridItem>
            <GridItem>
                <GameTrailer gameId={game.id} />
            </GridItem>
        </SimpleGrid>
    );
};

export default GameDetailPage;
