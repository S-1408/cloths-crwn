import React from 'react';
import CollectionItem from '../collection-items/collection-item';
import './preview-collection.scss';
 const CollectionPreview =({title,items})=>(

     <div className="collection-preview">
         <h1 className="title"> {title.toUpperCase()}</h1>
             <div className="preview">
                 {
                     items
                     .filter((item,idx)=> idx<4)
                     .map(({id, ...otheritemProps})=>(
                        //  <div key={item.id}>{item.name}</div>
                        <CollectionItem key={id} {...otheritemProps}/>
                     ))
                 }
             </div>
        
     </div>
 )
 export default CollectionPreview;