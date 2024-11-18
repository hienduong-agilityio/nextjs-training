// Libraries
import React, { memo } from 'react';

// Components
import { Button, InputField } from '@/components';

// Enums
import { BUTTON_COLORS, BUTTON_VARIANTS } from '@/enums';

const SearchBox = () => {
  return (
    <div className="flex">
      <InputField
        placeholder="SearchBox query..."
        customClass={{
          container: 'border-blue-300 rounded-r-none',
          input: 'h-16 w-[520px] text-gray-700',
        }}
      />
      <Button
        customClass="px-7 rounded-l-none"
        color={BUTTON_COLORS.PRIMARY}
        variant={BUTTON_VARIANTS.SOLID}
      >
        SearchBox
      </Button>
    </div>
  );
};

export default memo(SearchBox);
