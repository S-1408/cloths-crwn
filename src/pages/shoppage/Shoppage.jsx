import React from 'react' ;
import CollectionPreview from '../../components/preview-collection/preview-collection';
 import SHOP_DATA from './shop.data';

 const Shoppage =()=>{

    const  collections  = SHOP_DATA

    return(
        <div className="shop-page">
           {
               collections.map(({id, ...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps}/>
               ))
           }
       </div>
    )
 }
export default Shoppage;