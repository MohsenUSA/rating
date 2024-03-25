// Emojis.js
import React from 'react';
import { Box } from '@chakra-ui/react';
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
      <EmojiButton selected={selected === 1} onSelect={() => onSelect(1)}>
        <FaSadTear style={{ fontSize: '3rem', color: 'red' }} />
      </EmojiButton>
      <EmojiButton selected={selected === 2} onSelect={() => onSelect(2)}>
        <FaFrown style={{ fontSize: '3rem', color: 'orange' }} />
      </EmojiButton>
      <EmojiButton selected={selected === 3} onSelect={() => onSelect(3)}>
        <FaMeh style={{ fontSize: '3rem', color: 'yellow' }} />
      </EmojiButton>
      <EmojiButton selected={selected === 4} onSelect={() => onSelect(4)}>
        <FaSmile style={{ fontSize: '3rem', color: 'lightgreen' }} />
      </EmojiButton>
      <EmojiButton selected={selected === 5} onSelect={() => onSelect(5)}>
        <FaGrinStars style={{ fontSize: '3rem', color: 'green' }} />
      </EmojiButton>
    </Box>
  );
};

const EmojiButton = ({ children, selected, onSelect }) => {
  return (
    <Box
      as="button"
      onClick={onSelect}
      mr={{ base: 2, md: 4 }}
      mb={{ base: 4, md: 0 }}
      bg={selected ? 'gray.200' : 'transparent'}
      borderRadius="50%"
      p="7px"
      border={selected ? '3px solid green' : 'none'} // Add green border when selected
    >
      {children}
    </Box>
  );
};

export default Emojis;
