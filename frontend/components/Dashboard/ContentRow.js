// components/ContentRow.js

import ContentItem from './ContentItem';

const ContentRow = ({ items, rowTitle }) => {
  return (
    <div className="content-row">
      <h3 className="title is-4">{rowTitle}</h3>
      <div className="columns is-multiline">
        {items.map((item) => (
          <div className="column is-one-quarter" key={item.id}>
            <ContentItem
              title={item.title}
              username={item.username}
              thumbnailUrl={item.thumbnailUrl}
              tags={item.tags}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentRow;
