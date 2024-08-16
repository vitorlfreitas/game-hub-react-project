import { CardBody, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreCardSkeleton = () => {
    return (
        <HStack spacing="4px">
            <Skeleton height="32px" width="32px" borderRadius={8} />
            <SkeletonText noOfLines={2} width="70px" />
        </HStack>
    );
};

export default GenreCardSkeleton;
