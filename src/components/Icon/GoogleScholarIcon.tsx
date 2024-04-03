import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

/**
 * Google Scholar Icon component.
 * Renders an SVG icon for Google Scholar.
 */
const GoogleScholarIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <svg viewBox="120 100 300 330" width="128" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m213 111-107 94h69c5 45 41 64 78 67-7 18-4 27 7 39-43 1-103 26-103 67 4 45 63 54 92 54 38 1 81-19 90-54 4-35-10-54-31-71-23-18-28-28-21-40 15-17 35-27 39-51 2-17-2-28-6-43l45-38-1 16c-3 2-5 6-5 9v103c2 13 22 11 23 0v-103c0-3-2-7-5-8v-25l16-16zm58 141c-61 10-87-87-38-99 56-11 83 86 38 99zm-5 73c60 13 61 63 10 78-44 9-82-4-81-30 0-25 35-48 71-48z"
        fill="currentColor"
      />
    </svg>
  </Icon>
));

export default GoogleScholarIcon;