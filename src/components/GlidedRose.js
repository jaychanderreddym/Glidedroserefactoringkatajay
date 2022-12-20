import React from 'react';
import ItemList from './Items';
function GlidedRose(){
    const ItemListType=[
        {id:1,name:'+5 Dexterity Vest',sellin:10,quality:20},
        {id:2,name:'Aged Brie',sellin:2,quality:0},
        {id:3,name:'Elixir of the Mongoose',sellin:5,quality:7},
        {id:4,name:'Sulfuras,Hand of Ragnaros',sellin:0,quality:80},
        {id:5,name:'Sulfuras,Hand of Ragnaros',sellin:-1,quality:80},
        {id:6,name:'Backstage passes to a TAFKAL80ETC concert',sellin:15,quality:20},
        {id:7,name:'Backstage passes to a TAFKAL80ETC concert',sellin:10,quality:49},
        {id:8,name:'Backstage passes to a TAFKAL80ETC concert',sellin:5,quality:49},
        {id:9,name:'Conjured Mana Cake',sellin:3,quality:6}

    ];
  
    return (
        <div>
          <ItemList  itemlisttype={ItemListType}/>
        </div>  
      );

}
export default GlidedRose;