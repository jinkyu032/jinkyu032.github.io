
// import {FC, memo} from 'react';
// import Icon, {IconProps} from './Icon';

// /**
//  * Google Scholar Icon component.
//  * Renders an SVG icon for Google Scholar.
//  */
// const GoogleScholarIcon: FC<IconProps> = memo(props => (
//   <Icon {...props}>
//     <path
//       d="m213 111-107 94h69c5 45 41 64 78 67-7 18-4 27 7 39-43 1-103 26-103 67 4 45 63 54 92 54 38 1 81-19 90-54 4-35-10-54-31-71-23-18-28-28-21-40 15-17 35-27 39-51 2-17-2-28-6-43l45-38-1 16c-3 2-5 6-5 9v103c2 13 22 11 23 0v-103c0-3-2-7-5-8v-25l16-16zm58 141c-61 10-87-87-38-99 56-11 83 86 38 99zm-5 73c60 13 61 63 10 78-44 9-82-4-81-30 0-25 35-48 71-48z"
//       fill="currentColor"
//     ></path>
//   </Icon>
// ));

// export default GoogleScholarIcon;
// import {FC, memo} from 'react';

// import Icon, {IconProps} from './Icon';

// const GoogleScholarIcon: FC<IconProps> = memo(props => (
//   <Icon {...props}>
//     <path
//       d="M40.254 127.637c48.305 0 74.719-48.957 74.719-91.403 0-1.39 0-2.777-.075-4.156 5.141-4.547 9.579-10.18 13.102-16.633-4.79 2.602-9.871 4.305-15.078 5.063 5.48-4.02 9.582-10.336 11.539-17.774-5.156 3.743-10.797 6.38-16.68 7.801-8.136-10.586-21.07-13.18-31.547-6.32-10.472 6.86-15.882 21.46-13.199 35.617C41.922 38.539 22.246 26.336 8.915 6.27 1.933 20.94 5.487 39.723 17.022 49.16c-4.148-.172-8.207-1.555-11.832-4.031v.41c0 15.273 8.786 28.438 21.02 31.492a21.596 21.596 0 01-11.863.543c3.437 13.094 13.297 22.07 24.535 22.328-9.305 8.918-20.793 13.75-32.617 13.72-2.094 0-4.188-.15-6.266-.446 12.008 9.433 25.98 14.441 40.254 14.422"
//       fill="currentColor"></path>
//   </Icon>
// ));

// export default GoogleScholarIcon;


import { FC, memo } from 'react';
import Icon, { IconProps } from './Icon';

/**
 * Google Scholar Icon component.
 * Renders an SVG icon for Google Scholar.
 */
const GoogleScholarIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <svg viewBox="120 100 300 330" xmlns="http://www.w3.org/2000/svg" width="128">
      <path
        d="m213 111-107 94h69c5 45 41 64 78 67-7 18-4 27 7 39-43 1-103 26-103 67 4 45 63 54 92 54 38 1 81-19 90-54 4-35-10-54-31-71-23-18-28-28-21-40 15-17 35-27 39-51 2-17-2-28-6-43l45-38-1 16c-3 2-5 6-5 9v103c2 13 22 11 23 0v-103c0-3-2-7-5-8v-25l16-16zm58 141c-61 10-87-87-38-99 56-11 83 86 38 99zm-5 73c60 13 61 63 10 78-44 9-82-4-81-30 0-25 35-48 71-48z"
        fill="currentColor"
      />
    </svg>
  </Icon>
));

export default GoogleScholarIcon;