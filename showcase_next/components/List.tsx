import * as React from 'react'
import { Item } from '../interfaces'

type Props = {
  items: Item[]
}

const List = ({ items }: Props) => (
  <ul className='flex flex-col gap-2 list-inside list-disc font-Noto'>
    {
      items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))
    }
  </ul>
)

export default List
