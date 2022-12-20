import React,{useState,useEffect, useRef} from 'react';
import '../App.css';

function Items({itemlisttype}) {
     let nextId=10;
     let i = 0;
     const effectRan = useRef(false);
     const [arrayItemlist, setGlidedRoseList]= useState([{
                id:0,
                name: "Jay Chander",
                sellin: null,
                quality:null,
            }]);
    const [rerender, setRerender] = useState(false);
     useEffect(()=>
     {
         if (!effectRan.current) {
             totallist(setGlidedRoseList);
             setRerender(!rerender); 
             console.log('i fire once');
         }
     
       return () => {effectRan.current = true};
         
         
     },[]);
     function totallist(setGlidedRoseList) {
        for (let k = 0; k < 20; k++)
        {
            i=i+1;
            let tl="";
            console.log("Day"+i)
            console.log("name,sellin,quality")
            arrayItemlist.push({
                id:nextId++,
                name:"Day : "+i,
                sellin: null,
                quality:null,
            },{
                id:nextId++,
                name:"Name, SellIn, Quality",
                sellin: null,
                quality:null,
            })
            
            for(let i=0;i<itemlisttype.length;i++)
            {
                if(itemlisttype[i].name !=="Aged Brie" && itemlisttype[i].name !=="Backstage passes to a TAFKAL80ETC concert")
                {
                    if(itemlisttype[i].quality>0)
                    {
                      if(itemlisttype[i].name!=="Sulfuras,Hand of Ragnaros")
                       {
                        itemlisttype[i].quality = itemlisttype[i].quality-1;
                       }
                    }
                }
                else
                {
                    if(itemlisttype[i].quality < 50)
                    {
                        itemlisttype[i].quality = itemlisttype[i].quality + 1;
                        if(itemlisttype[i].name === "Backstage passes to a TAFKAL80ETC concert")
                        {
                            if(itemlisttype[i].sellin < 11 || itemlisttype[i].sellin < 6)
                            {
                                if(itemlisttype[i].quality < 50)
                                {
                                    itemlisttype[i].quality = itemlisttype[i].quality + 1;
                                } 
                            }
                        }
                    }
                }
                if(itemlisttype[i].name !== "Sulfuras,Hand of Ragnaros")
                {
                  itemlisttype[i].sellin = itemlisttype[i].sellin - 1 ;
                }
                if(itemlisttype[i].sellin < 0)
                {
                    if(itemlisttype[i].name !== "Aged Brie")
                    {
                       if(itemlisttype[i].name !== "Backstage passes to a TAFKAL80ETC concert")
                       {
                          if(itemlisttype[i].quality > 0)
                          {
                            if(itemlisttype[i].name !== "Sulfuras,Hand of Ragnaros")
                             {
                                itemlisttype[i].quality = itemlisttype[i].quality-1;
                             }
                          }
                      } else {
                         itemlisttype[i].quality = itemlisttype[i].quality-itemlisttype[i].quality;
                      }
                    }else {
                        if(itemlisttype[i].quality < 50)
                        {
                            itemlisttype[i].quality = itemlisttype[i].quality+1;
                        }
                    }
                }
                tl=tl+itemlisttype[i].name+","+itemlisttype[i].quality+","+itemlisttype[i].sellin+"    ";
                 
                arrayItemlist.push({
                    id:nextId++,
                    name:itemlisttype[i].name,
                    quality:itemlisttype[i].quality,
                    sellin:itemlisttype[i].sellin,
                })
                
                
            }
            console.log(tl)
            console.log("end");
           
        }
        
        return arrayItemlist;
        
     }
     return(
         <div>
            {arrayItemlist.map(item=>(
                item.sellin===null ? <h4 key={item.id}>{item.name}</h4> : <p key={item.id}>{item.name},{item.sellin},{item.quality}</p>
            ))}
         </div>
      );
}
export default Items;











