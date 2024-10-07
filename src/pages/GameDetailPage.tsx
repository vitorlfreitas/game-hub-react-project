import React from "react";
import { Link, useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Spinner } from "@chakra-ui/spinner";
import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshot from "../components/GameScreenshot";

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data: game, isLoading, error } = useGame(slug!);

    if (isLoading) return <Spinner />;

    if (error || !game) throw error;

    return (
        <>
            <Heading>{game.name}</Heading>
            <ExpandableText children={game.description_raw} />
            <GameAttributes game={game} />
            <GameTrailer gameId={game.id} />
            <GameScreenshot gameId={game.id} />
            <Link to={"/"}>Home</Link>
        </>
    );
};

export default GameDetailPage;
