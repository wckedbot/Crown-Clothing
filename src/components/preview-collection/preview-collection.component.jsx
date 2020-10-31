import React from 'react';
import './preview-collection.style.scss';
//import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, index) => index < 4).map(({id,...itemProps}) => (
            <div className = 'collection-item' key={id}>
            <div className='image' style={{backgroundImage: `url(${itemProps.imageUrl})`}}/>
                <div className='collection-footer' key={id}>
                    <span className='name'>{itemProps.name}</span>
                    <span className='price'>{itemProps.price}</span>
                </div>
            </div>
                ))
            }
        </div>
    </div>
)

export default PreviewCollection;