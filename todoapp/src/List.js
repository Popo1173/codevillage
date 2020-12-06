import React from 'react'
import Item from './Item'

const List = () => {
    return(
        <ul>
            <Item content={'課題をする'} />
            <Item content={'洗濯をする'} />
            <Item content={'電話をする'} />
        </ul>
    )
}
export default List