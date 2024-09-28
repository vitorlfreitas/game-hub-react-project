import { Heading, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreCard from "./GenreCard";
import GenreCardSkeleton from "./GenreCardSkeleton";

const GenreList = () => {

    const { data, isLoading } = useGenres();

    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <ListItem key={skeleton} paddingY="5px">
                            <GenreCardSkeleton />
                        </ListItem>
                    ))}

                {data?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <GenreCard genre={genre} />
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
