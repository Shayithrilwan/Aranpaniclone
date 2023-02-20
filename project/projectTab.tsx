import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import "./project.scss";
import ProjectService from './projectlistservice';
import { useState } from 'react';


const items = [
  {
    key: 'proposed',
    label: `Proposed`,
    
   
  },
  {
    key: 'planned',
    label: `Planned`,
    
  },
  {
    key: 'active',
    label: `Active`,
    
  },
  {
    key: 'completed',
    label: `Completed`,
    
  },
  {
    key: 'scrapped',
    label: `Scrapped`,
  
  },
];

const Tab = ({paramspassing}: {paramspassing: Function }) => {
const [params, setparams] = useState("")

const onChange = (key: string) => {
  paramspassing(key)
    
    
    // console.log(paramspassing)
};


     
  

  return <Tabs defaultActiveKey="proposed" items={items} onChange={onChange}    ></Tabs>
  
  
  
};

export default Tab;