import React from 'react';

const ItemPanel = ({mainUrl, item, onChangeUrl}) => {

    const changeUrl = url => onChangeUrl(url)

    return(
        <div className="card" 
             style={{width:"10rem", textAlign:"center", borderBottomLeftRadius:"30rem", borderBottomRightRadius:"30rem", borderTopLeftRadius:"30rem", borderTopRightRadius:"30rem"}} 
             onClick={() => changeUrl(mainUrl + item.url)}> 
             {item.name}
        </div>
    )
}

export default ItemPanel;