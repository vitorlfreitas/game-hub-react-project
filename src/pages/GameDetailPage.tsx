import React from 'react'
import { Link, useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Spinner } from '@chakra-ui/spinner';
import { Heading, Text } from '@chakra-ui/react';

const GameDetailPage = () => {

  const {slug} = useParams();
  const {data: game, isLoading, error} = useGame(slug!);

  if (isLoading) return <Spinner />

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
      <Link to={'/'}>Home</Link>
    </>
  )
}

export default GameDetailPage