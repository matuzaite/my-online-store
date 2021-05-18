import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './OverviewCollections.scss';
import PreviewCollection from '../preview-collection/PreviewCollection';
import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors';


const OverviewCollections = ({ collections }) => {
  return (
    <div className='overview-collections'>
      {
        collections.map(({ id, ...collectionProps }) => (
          <PreviewCollection key={id} {...collectionProps} />
        ))
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(OverviewCollections);
