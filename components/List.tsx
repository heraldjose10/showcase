import * as React from 'react'
import { Item } from '../interfaces'

type Props = {
  items: Item[]
}

const List = ({ items }: Props) => (
  <ul className='flex flex-col gap-2 mb-8'>
    {
      items.map(item => (
        <p key={item.id}>{item.name}</p>
      ))
    }
  </ul>
)

export default List
