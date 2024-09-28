import { Button, HStack, Image } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getCroppedIMageUrl from "../services/image-url";
import useGameQueryStore from "../store";

interface Props {
    genre: Genre;
}

const GenreCard = ( {genre} : Props) => {

    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);
    
    return (
        <HStack>
            <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedIMageUrl(genre.image_background)}
            />
            <Button
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                whiteSpace={"normal"}
                textAlign={"left"}
            >
                {genre.name}
            </Button>
        </HStack>
    );
};

export default GenreCard;
