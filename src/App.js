// App.js
import React, { useState } from 'react';
import { ChakraProvider, Box, Heading, Button, Textarea, useToast } from '@chakra-ui/react';
import Emojis from './Emojis';

function App() {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState('');
  const toast = useToast();

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating === null) {
      toast({
        title: 'Please select a rating!',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    } else {
      // You can handle the submission here
      console.log('Rating:', rating);
      console.log('Comment:', comment);
      // Reset the rating and comment state after submission
      setRating(null);
      setComment('');
      toast({
        title: 'Feedback submitted!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <ChakraProvider>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Box width="90%" maxWidth="400px">
          <Heading mb={4}>Rate your experience</Heading>
          <Emojis selected={rating} onSelect={handleRating} />
          <Textarea
            mt={4}
            placeholder="Optional: Add your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button mt={4} colorScheme="teal" textAlign="center" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
