import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './Collection.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop-selectors';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(Collection);
