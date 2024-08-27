import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreCardSkeleton from "./GenreCardSkeleton";
import GenreCard from "./GenreCard";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
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
                    <GenreCard
                        selectedGenre = {selectedGenre}
                        genre = {genre}
                        onSelectGenre = {onSelectGenre}
                    />
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
