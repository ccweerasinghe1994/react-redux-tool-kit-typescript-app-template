import React from 'react';

import { setVisibilityFilter, VisibilityFilter } from './visibilityFilterSlice';
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

interface FilterButtonProps {
  visibilityFilter: VisibilityFilter;
  text: string;
}
const FilterButton: React.FC<FilterButtonProps> = ({
  visibilityFilter,
  text,
}): JSX.Element => {
  const dispatch = useAppDispatch();

  const currentVisibilityFilter = useAppSelector(
    (state: RootState) => state.visibilityFilter
  );

  return (
    <button
      disabled={currentVisibilityFilter === visibilityFilter}
      onClick={() => dispatch(setVisibilityFilter(visibilityFilter))}
    >
      {text}
    </button>
  );
};

export default FilterButton;
