import React, { useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import "./project.scss";
import ProjectService from './projectlistservice';
import { Value } from 'sass';
import { Project } from '../models/project/projectmodel';



interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}


const columns: ColumnsType<Project> = [ 
  {
   title: 'S.No',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Reg Number',
    dataIndex: 'regNumber',
    key: 'regNumber',
  },
  {
    title: 'Temple Name',
    dataIndex: 'templeNameTamil',
    key: 'templeNameTamil',
  },
  {
    title: 'Location',
    key: 'location',
    dataIndex: 'location',
    
  },
  {
    title: 'Created On',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    
  },
  
];

const data: DataType[] = [ 
  
];

const ProjectTable = ({paramsvalue}: {paramsvalue: string }) => {
  const {listdata, listUser}=ProjectService()
 
  
  useEffect(()=>{
    console.log(paramsvalue)
    listUser(paramsvalue || "proposed")
  },[paramsvalue])
  return (
  <div>  <Table  columns={columns} dataSource={
    listdata
  }
  
  /> 
  
  </div>

  
  )
}

export default ProjectTable;