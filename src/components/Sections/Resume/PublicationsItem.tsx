import {FC, memo} from 'react';

import {PublicationsItem} from '../../../data/dataDef';

const PublicationsItem: FC<{item: PublicationsItem}> = memo(({item}) => {
  const {title, authors, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1  font-medium italic sm:flex-none">{authors}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

PublicationsItem.displayName = 'PublicationsItem';
export default PublicationsItem;
