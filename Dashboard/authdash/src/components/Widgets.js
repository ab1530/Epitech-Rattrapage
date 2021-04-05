import React from 'react'
import WidgetCard from './Weather/WidgetCard'
import {Col} from "reactstrap"
import '../Pages/lg.css'


export default ({ widgetList, onDelete }) => <div>{
      
      widgetList.map((Component, index) => 
      <WidgetCard onDelete={() => onDelete(index)}> <Component/></WidgetCard>)
      
}</div>

