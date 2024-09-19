import { Heading, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreCard from "./GenreCard";
import GenreCardSkeleton from "./GenreCardSkeleton";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
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
                        <GenreCard
                            selectedGenreId={selectedGenreId}
                            genre={genre}
                            onSelectGenre={onSelectGenre}
                        />
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
