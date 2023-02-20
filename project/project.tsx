import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PlusCircleOutlined } from '@ant-design/icons'
import Modal from './projectmodal'
import Tab from './projectTab'
import Filter from './projectfilter'
import SearchBar from './searchBar'
import "./project.scss";
import ProjectTable from './projectTable'
import ModalComponent from './projectmodal'
import { Value } from 'sass'
import ProjectService from './projectlistservice'


function Project() {
  const [modal1Open, setModal1Open] = useState(false);
  const [paramsvalue, setparamsvalue] = useState("");
const {countvalue, ...rest}=ProjectService();
console.log(rest, countvalue);

  const closemodal = function () {
    setModal1Open(false);
  }
  const Paramspass = function (key:string) {
   setparamsvalue(key)
  }


  
  return (
    <div className='dashboard'>
      <div className='sidenav'>
        <h1 className='sidenav__heading'>Aran Pani</h1>
        <nav className='sidenav__contents'>
          <li >< Link className='link1' to="/dashboard">Dashboard</Link> </li>
          <li >< Link className='link1' to="/project">Projects</Link> </li>
          <li>< Link className='link1' to="/donors">Donors</Link> </li>
          <li>< Link className='link1' to="/representation">Representations</Link></li>
          <li>< Link className='link1' to="/payment">Payment</Link></li>
          <li>< Link className='link1' to="/internalusers">Internal  users</Link></li>
          <li>< Link className='link1' to="/subscriptions">Subscriptions</Link></li>
          <li>< Link className='link1' to="/contactdeatils">Contact Details</Link></li>
        </nav>
      </div>
      <div className='dashboard__content '>
        <h1 className='dashboard__content__heading' >Projects <PlusCircleOutlined onClick={() => setModal1Open(true)} /></h1>
        <ModalComponent closemodule={closemodal} visible={modal1Open}
        />
        <p className='project__suggestion'></p>
        <Tab paramspassing={Paramspass} />
        <div className='project__Filters'>
          <h1 className='project__count'>{countvalue}</h1>
          <p className='project__count__para'>{paramsvalue}</p>
         
          <SearchBar />
        </div>
        <ProjectTable paramsvalue={paramsvalue}   />
      </div>
    </div>
  )
}

export default Project
