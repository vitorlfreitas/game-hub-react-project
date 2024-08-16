import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreCardSkeleton from "./GenreCardSkeleton";
import GenreCard from "./GenreCard";

const GenreList = () => {
    
    const { data, isLoading } = useGenres();

    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <List>
            {isLoading &&
                skeletons.map((skeleton) => (
                    <ListItem key={skeleton} paddingY="5px">
                        <GenreCardSkeleton />
                    </ListItem>
                ))}

            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <GenreCard genre={genre} />
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
