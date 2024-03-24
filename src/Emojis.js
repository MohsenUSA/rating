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
        icon={<FaSadTear style={{ fontSize: '4rem', color: selected === 1 ? 'red' : 'red' }} />}
        aria-label="sad"
        onClick={() => onSelect(1)}
        colorScheme={selected === 1 ? 'gray' : ''}
        size="xlg"
        mb={{ base: 4, md: 0 }}
        mr={{ base: 0, md: 4 }}
      />
      <IconButton
        icon={<FaFrown style={{ fontSize: '4rem', color: selected === 2 ? 'orange' : 'orange' }} />}
        aria-label="unhappy"
        onClick={() => onSelect(2)}
        colorScheme={selected === 2 ? 'gray' : ''}
        size="xlg"
        mb={{ base: 4, md: 0 }}
        mr={{ base: 0, md: 4 }}
      />
      <IconButton
        icon={<FaMeh style={{ fontSize: '4rem', color: selected === 3 ? 'yellow' : 'yellow' }} />}
        aria-label="neutral"
        onClick={() => onSelect(3)}
        colorScheme={selected === 3 ? 'gray' : ''}
        size="xlg"
        mb={{ base: 4, md: 0 }}
        mr={{ base: 0, md: 4 }}
      />
      <IconButton
        icon={<FaSmile style={{ fontSize: '4rem', color: selected === 4 ? 'lightgreen' : 'lightgreen' }} />}
        aria-label="happy"
        onClick={() => onSelect(4)}
        colorScheme={selected === 4 ? 'gray' : ''}
        size="xlg"
        mb={{ base: 4, md: 0 }}
        mr={{ base: 0, md: 4 }}
      />
      <IconButton
        icon={<FaGrinStars style={{ fontSize: '4rem', color: selected === 5 ? 'darkgreen' : 'darkgreen' }} />}
        aria-label="very-happy"
        onClick={() => onSelect(5)}
        colorScheme={selected === 5 ? 'gray' : ''}
        size="xlg"
      />
    </Box>
  );
};

export default Emojis;





// // Emojis.js
// import React from 'react';
// import { HStack, IconButton } from '@chakra-ui/react';
// import { FaSadTear, FaFrown, FaMeh, FaSmile, FaGrinStars } from 'react-icons/fa';

// const Emojis = ({ selected, onSelect }) => {
//   return (
//     <HStack spacing={4}>
//       <IconButton
//         icon={<FaSadTear style={{ color: selected === 1 ? 'red' : 'red' }} />}
//         aria-label="sad"
//         onClick={() => onSelect(1)}
//         colorScheme={selected === 1 ? 'gray' : ''}
//         fontSize="4xl"
//       />
//       <IconButton
//         icon={<FaFrown style={{ color: selected === 2 ? 'orange' : 'orange' }} />}
//         aria-label="unhappy"
//         onClick={() => onSelect(2)}
//         colorScheme={selected === 2 ? 'gray' : ''}
//         fontSize="4xl"
//       />
//       <IconButton
//         icon={<FaMeh style={{ color: selected === 3 ? 'yellow' : 'yellow' }} />}
//         aria-label="neutral"
//         onClick={() => onSelect(3)}
//         colorScheme={selected === 3 ? 'gray' : ''}
//         fontSize="4xl"
//       />
//       <IconButton
//         icon={<FaSmile style={{ color: selected === 4 ? 'lightgreen' : 'lightgreen' }} />}
//         aria-label="happy"
//         onClick={() => onSelect(4)}
//         colorScheme={selected === 4 ? 'gray' : ''}
//         fontSize="4xl"
//       />
//       <IconButton
//         icon={<FaGrinStars style={{ color: selected === 5 ? 'darkgreen' : 'darkgreen' }} />}
//         aria-label="very-happy"
//         onClick={() => onSelect(5)}
//         colorScheme={selected === 5 ? 'gray' : ''}
//         fontSize="4xl"
//       />
//     </HStack>
//   );
// };

// export default Emojis;
