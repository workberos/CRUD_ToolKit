//BANG HIEN THI DANH SACH

import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Heading, IconButton, Text } from '@chakra-ui/react';

import { useAppDispatch } from '../hooks';
import { deleteBook } from '../redux/bookSlice';
import { useHistory } from 'react-router-dom';

const BookInfo = ({
  title,
  author,
  id,
  ...rest
}: {
  title: string | undefined;
  author: string | undefined;
  id: string;
}) => {
  const dispatch = useAppDispatch(); //can tim hieu
  const history = useHistory(); //can tim hieu

  //funtion push id vao history
  const redirect = (id: string) => {
    history.push(`/update-book/${id}`);
  }; 

  return (
    <Box
      p={5}
      justifyContent="space-between"
      d="flex"
      shadow="md"
      borderWidth="1px"
      {...rest}
    >
      <Box d="flex" flexDirection="column">
        {/* hien thi tieu de sach tieu de sach */}
        <Heading fontSize="xl">{title}</Heading>
        {/* hien thi ten tac gia */}
        <Text mt={4}>{author}</Text>
      </Box>
      <Box>
        <IconButton
          color="#1a202c"
          aria-label=""
          icon={<DeleteIcon />}
          marginRight="1rem"
          //khi click se filter nhung thang !== id thang nay
          onClick={() => dispatch(deleteBook({ id }))}
        />
        <IconButton
          color="#1a202c"
          aria-label=""
          icon={<EditIcon />}
          //Chuyen huong
          onClick={() => redirect(id)}
        />
      </Box>
    </Box>
  );
};

export default BookInfo;
