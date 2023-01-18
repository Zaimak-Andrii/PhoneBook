import { useToast } from '@chakra-ui/react';

export const useAppToast = () => {
  const toast = useToast({
    duration: 2000,
    position: 'bottom-left',
    isClosable: true,
  });

  return toast;
};
