// Emojis.js
import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { FaSadTear, FaFrown, FaMeh, FaSmile, FaGrinStars } from 'react-icons/fa';

const Emojis = ({ selected, onSelect }) => {
  return (
    <Box
      d="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={{ base: 'column', md: 'row' }}
      textAlign="center"
    >
      <IconButton
        icon={<FaSadTear style={{ fontSize: '3rem', color: 'red', height: '3rem' }} />}
        aria-label="sad"
        onClick={() => onSelect(1)}
        colorScheme="gray"
        size="xlg"
        mb={{ base: 4, md: 0 }}
        mr={{ base: 2, md: 4 }}
        variant={selected === 1 ? 'solid' : 'outline'}
        borderRadius="50%"
        p="7px"
      />
      <IconButton
        icon={<FaFrown style={{ fontSize: '3rem', color: 'orange', height: '3rem' }} />}
        aria-label="unhappy"
        onClick={() => onSelect(2)}
        colorScheme="gray"
        size="xlg"
        mb={{ base: 4, md: 0 }}
        mr={{ base: 2, md: 4 }}
        variant={selected === 2 ? 'solid' : 'outline'}
        borderRadius="50%"
        p="7px"
      />
      <IconButton
        icon={<FaMeh style={{ fontSize: '3rem', color: 'yellow', height: '3rem' }} />}
        aria-label="neutral"
        onClick={() => onSelect(3)}
        colorScheme="gray"
        size="xlg"
        mb={{ base: 4, md: 0 }}
        mr={{ base: 2, md: 4 }}
        variant={selected === 3 ? 'solid' : 'outline'}
        borderRadius="50%"
        p="7px"
      />
      <IconButton
        icon={<FaSmile style={{ fontSize: '3rem', color: 'lightgreen', height: '3rem' }} />}
        aria-label="happy"
        onClick={() => onSelect(4)}
        colorScheme="gray"
        size="xlg"
        mb={{ base: 4, md: 0 }}
        mr={{ base: 2, md: 4 }}
        variant={selected === 4 ? 'solid' : 'outline'}
        borderRadius="50%"
        p="7px"
      />
      <IconButton
        icon={<FaGrinStars style={{ fontSize: '3rem', color: 'green', height: '3rem' }} />}
        aria-label="very-happy"
        onClick={() => onSelect(5)}
        colorScheme="gray"
        size="xlg"
        variant={selected === 5 ? 'solid' : 'outline'}
        borderRadius="50%"
        p="7px"
      />
    </Box>
  );
};

export default Emojis;