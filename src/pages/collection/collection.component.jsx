import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';
import withRouter from '../../components/with-router/withRouter.component';

import CollectionsContext from '../../contexts/collections/collections.context';

import './collection.styles.scss';

const CollectionPage = ({ params }) => {
  // METHOD 1: using ConextAPI as wrapper component
  // if we don't provide a context provider to the parent component of the CollectionPage component
  //  then we can't access the modified value of the context just by using consumer in child
  // return (
    // <CollectionsContext.Consumer>
    //   {
    //     collections => { //to access object we have access to function
    //       const collection = collections[params.collectionId];
    //       const { title, items } = collection;
    //       return (
    //         <div className='collection-page'>
    //           <h2 className='title'>{title}</h2>
    //           <div className='items'>
    //             {items.map(item => (
    //               <CollectionItem key={item.id} item={item} />
    //             ))}
    //           </div>
    //         </div>
    //       );
    //     }
    //   }

    // </CollectionsContext.Consumer>

  // );

  // METHOD 2: using useContext hook
  const collections = useContext(CollectionsContext);
  const collection = collections[params.collectionId];
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
};

export default withRouter(CollectionPage);
