import React, { forwardRef } from 'react';

import {
  Input, FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/core';

const FormControlInput = forwardRef(({ type, name, label, errors }, ref) => {
  return (
    <FormControl isInvalid={errors} mb="8" id={name}>
      <FormLabel color="gray.500" fontWeight="bold" fontSize="13px" mb="1">
        {label}
      </FormLabel>

      <Input name={name} ref={ref} height="40px" type={type} />

      {errors &&
        <FormErrorMessage fontWeight="bold" fontSize="xs">{errors.message || "Something happened"}</FormErrorMessage>
      }
    </FormControl>
  )
});

export default FormControlInput
