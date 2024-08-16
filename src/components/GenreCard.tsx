import { Genre } from "../hooks/useGenres";
import { HStack, Image, Text } from "@chakra-ui/react";
import getCroppedIMageUrl from "../services/image-url";


interface Props {
    genre: Genre;
}

const GenreCard = ({ genre } : Props) => {
    return (
        <HStack>
            <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedIMageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
        </HStack>

    );
};

export default GenreCard;
