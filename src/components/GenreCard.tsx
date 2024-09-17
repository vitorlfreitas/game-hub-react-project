import { Button, HStack, Image } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getCroppedIMageUrl from "../services/image-url";


interface Props {
    genre: Genre;
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreCard = ({ genre, onSelectGenre, selectedGenre }: Props) => {
    return (
        <HStack>
            <Image
                boxSize="32px"
                borderRadius={8}
                objectFit='cover'
                src={getCroppedIMageUrl(genre.image_background)}
            />
            <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                whiteSpace={'normal'}
                textAlign={'left'}
            >
                {genre.name}
            </Button>
        </HStack>
    );
};

export default GenreCard;
