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
        icon={<FaSadTear style={{ fontSize: '3rem', color: 'red' }} />}
        aria-label="sad"
        onClick={() => onSelect(1)}
        colorScheme="gray"
        size="xlg"
        mb={{ base: 4, md: 0 }}
        mr={{ base: 0, md: 4 }}
        variant={selected === 1 ? 'solid' : 'outline'}
        borderRadius="50%"
        p="7px" // Adjust padding here
      />
      <IconButton
        icon={<FaFrown style={{ fontSize: '3rem', color: 'orange' }} />}
        aria-label="unhappy"
        onClick={() => onSelect(2)}
        colorScheme="gray"
        size="xlg"
        mb={{ base: 4, md: 0 }}
        mr={{ base: 0, md: 4 }}
        variant={selected === 2 ? 'solid' : 'outline'}
        borderRadius="50%"
        p="7px" // Adjust padding here
      />
      <IconButton
        icon={<FaMeh style={{ fontSize: '3rem', color: 'yellow' }} />}
        aria-label="neutral"
        onClick={() => onSelect(3)}
        colorScheme="gray"
        size="xlg"
        mb={{ base: 4, md: 0 }}
        mr={{ base: 0, md: 4 }}
        variant={selected === 3 ? 'solid' : 'outline'}
        borderRadius="50%"
        p="7px" // Adjust padding here
      />
      <IconButton
        icon={<FaSmile style={{ fontSize: '3rem', color: 'lightgreen' }} />}
        aria-label="happy"
        onClick={() => onSelect(4)}
        colorScheme="gray"
        size="xlg"
        mb={{ base: 4, md: 0 }}
        mr={{ base: 0, md: 4 }}
        variant={selected === 4 ? 'solid' : 'outline'}
        borderRadius="50%"
        p="7px" // Adjust padding here
      />
      <IconButton
        icon={<FaGrinStars style={{ fontSize: '3rem', color: 'green' }} />}
        aria-label="very-happy"
        onClick={() => onSelect(5)}
        colorScheme="gray"
        size="xlg"
        variant={selected === 5 ? 'solid' : 'outline'}
        borderRadius="50%"
        p="7px" // Adjust padding here
      />
    </Box>
  );
};

export default Emojis;
