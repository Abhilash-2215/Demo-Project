import React from "react";

function MemberCard({name,role})
{
    console.log(name,role)
    return(
        <>
        <h1>Name:{name}</h1>
        <h1>Role:{role}</h1>
        </>
    )
}
export default MemberCard;