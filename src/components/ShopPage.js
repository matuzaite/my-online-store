import React from 'react';
import OverviewCollections from './overview-collections/OverviewCollections';
import { Route } from 'react-router-dom';
import Collection from './collection/Collection';


const ShopPage = ({ match }) =>
(
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={OverviewCollections} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default ShopPage;

