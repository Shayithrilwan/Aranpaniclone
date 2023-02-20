import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Formik, useFormik } from 'formik';
import { ProjectValidationSchema } from './projectValidationSchema';
import "./project.scss";
import UserService from './projectService';
import { useEffect } from 'react';
import axiosInstance from '../interceptor/axiosInstance';
import ProjectService from './projectlistservice';
import { LoginOutlined } from '@ant-design/icons';
import { CloseOutlined  } from '@ant-design/icons';



const ModalComponent = ({ visible, closemodule }: { visible: boolean, closemodule: Function }) => {
  

  
  const [modal1Open, setModal1Open] = useState(true)
  
  const ser = UserService()
  const {listUser, listdata,error}=ProjectService();
  const onSubmit = async (values: any) => {
    resetForm(values)
    console.log(values);
    const data = { ...values,status:"proposed" }




    const trial = await ser.createUser(data)
    if(!error){
    closemodule();}
    
    
    console.log(trial)


  };
  

  const {
    values,
    errors,
    touched,


    isSubmitting,
    handleBlur,
    resetForm,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",

      templeNameTamil: "",
      inchargeName: "",
      templeInchargeNameTamil: "",
      inchargeMobileNumber: "",
      Location: "",
      locationNameTamil: ""




    },

    onSubmit,
    validationSchema: ProjectValidationSchema,

  });
 


  return (
    <Modal
      className='modal__project'
      title="New Project"
      style={{ top: 20 }}
      closeIcon={<CloseOutlined onClick={()=>closemodule()} />}
      visible={visible} footer={null}>


      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="temple__name__block"><label htmlFor="templename">Temple Name</label>
          <input
            value={values.name}
            onChange={handleChange}
            id="temple__name"
            type="name"
            name='name'
            placeholder="Type name"
            onBlur={handleBlur}
            className="temple__name"

          />
        </div>
        {errors.name && touched.name && <span className="error">{errors.name}</span>}
        <div className="கோவில்__பெயர்__block"><label htmlFor="templename">கோவில் பெயர்</label>
          <input
            value={values.templeNameTamil}
            onChange={handleChange}
            id="கோவில்__பெயர்"
            type="name"
            name='templeNameTamil'
            placeholder="Type name"
            onBlur={handleBlur}
            className="கோவில்__பெயர்"


          />
        </div>
        {errors.templeNameTamil && touched.templeNameTamil && <span className="error">{errors.templeNameTamil}</span>}
        <div className="Temple__Incharge__block"><label htmlFor="templename">Temple Incharge</label>
          <input
            value={values.inchargeName}
            onChange={handleChange}
            id="Temple__Incharge__Name"
            name="inchargeName"
            type="inchargeName"
            placeholder="Type name"
            onBlur={handleBlur}
            className="Temple__Incharge__Name"


          />
        </div>
        {errors.inchargeName && touched.inchargeName && <span className="error">{errors.inchargeName}</span>}

        <div className="கோவில்__பொறுப்பாளர்__பெயர்__block"><label htmlFor="templename">கோவில்  பொறுப்பாளர்  பெயர்</label>
          <input
            value={values.templeInchargeNameTamil}
            onChange={handleChange}
            id="கோவில்__பொறுப்பாளர்__பெயர்"
            type="name"
            name='templeInchargeNameTamil'
            placeholder="Type name"
            onBlur={handleBlur}
            className="கோவில்__பொறுப்பாளர்__பெயர்"


          />
        </div>
        {errors.templeInchargeNameTamil && touched.templeInchargeNameTamil && <span className="error">{errors.templeInchargeNameTamil}</span>}

        <div className="Phone__Number__block"><label htmlFor="templename">Phone Number</label>
          <input
            value={values.inchargeMobileNumber}
            onChange={handleChange}
            name="inchargeMobileNumber"
            type="name"
            placeholder="Type name"
            onBlur={handleBlur}
            className="Phone__Number"


          />
        </div>
        {errors.inchargeMobileNumber && touched.inchargeMobileNumber && <span className="error">{errors.inchargeMobileNumber}</span>}

        <div className="Location__block"><label htmlFor="templename">Location</label>
          <input
            value={values.Location}
            onChange={handleChange}
            id="Location"
            type="name"
            placeholder=" Type Location"
            onBlur={handleBlur}
            className="Location"


          />
        </div>
        {errors.Location && touched.Location && <span className="error">{errors.Location}</span>}

        <div className="இடம்__block"><label htmlFor="templename">இடம்</label>
          <input
            value={values.locationNameTamil}
            onChange={handleChange}
            id="இடம்"
            type="name"
            name="locationNameTamil"
            placeholder=" Type name"
            onBlur={handleBlur}
            className="இடம்"


          />
        </div>
        {errors.locationNameTamil && touched.locationNameTamil && <span className="error">{errors.locationNameTamil}</span>}

        <button className="model__button" type="submit"   >
          Create project
        </button>








      </form>



    </Modal>
  );
};

export default ModalComponent;