import React from 'react'
import { useParams } from 'react-router-dom'
import { HomeProps } from '../../types'
import { SillaBobardi } from '../Projects/SillaBobardi/SillaBobardi'
import { TabureteBobardi } from '../Projects/TabureteBobardi/TabureteBobardi'


export const OneProject: React.FC<HomeProps> = ({data}) => {
  const {id} = useParams()
  const oneProject = data?.find((elem)=>elem.id === Number(id)) 
  return (
    <div>
        {id === "1" && <SillaBobardi/>}
        {id === "2" && <TabureteBobardi/>}
    </div>
  )
}
