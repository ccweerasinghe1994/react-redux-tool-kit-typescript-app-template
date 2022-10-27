import React from 'react';
import FilterButton from './FilterButton';

import { VisibilityFilter } from './visibilityFilterSlice';

export default function   Footer(): JSX.Element {
  return (
    <div>
      <span>Show: </span>
      <FilterButton visibilityFilter={VisibilityFilter.SHOW_ALL} text={'All'} />
      <FilterButton
        visibilityFilter={VisibilityFilter.SHOW_ACTIVE}
        text={'Active'}
      />
      <FilterButton
        visibilityFilter={VisibilityFilter.SHOW_COMPLETED}
        text={'Completed'}
      />
    </div>
  );
}
