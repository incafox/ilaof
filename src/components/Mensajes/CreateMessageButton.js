import React from 'react';

export default function CreateMessageButton({onChangeUrl}) {

    const mainUrl = "/messages";
    const url = "/createMessage";

    const changeUrl = url2 => onChangeUrl(url2)

    return (
        <button type="button" className="btn btn-primary" 
                style={{borderBottomLeftRadius:"30rem", borderBottomRightRadius:"30rem", borderTopLeftRadius:"30rem", borderTopRightRadius:"30rem"}}
                onClick={() => changeUrl(mainUrl + url)}>
                + Redactar
        </button>
    )
}
