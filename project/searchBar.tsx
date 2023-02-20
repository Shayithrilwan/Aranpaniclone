import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import ProjectService from './projectlistservice';
import { Value } from 'sass';
import { useState } from 'react';
import { FaKiss } from 'react-icons/fa';
import ProjectTable from './projectTable';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
        width:8,
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
  
  
  
const Searchapi = function() {
 
 
  }

const SearchBar: React.FC = () => (
 
  <Space direction="vertical">
     
    <Search placeholder="Search by reg no,name,locations"   onChange={(Value)=>(Searchapi())} enterButton />
    
  </Space>
);

export default SearchBar;