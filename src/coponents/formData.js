import React, { useEffect, useState } from "react";
import { Radio } from 'antd';


const FormData = () => {
   const [formData,setFormData] = useState([]);

   const [textField, setTextField] = useState('');
   const [email,setEmail] = useState('');
   const [name,setName] = useState('');
   const [phoneNumber, setPhoneNumber] = useState();
   const [value,setValue] = useState('Excellent');


   const formSubmitFormHandler = (event) => {
        event.preventDefault();

        let data = {
            textField,
            email,
            name,
            phoneNumber,
            value
        }

        setFormData([...formData,data]);
        setTextField('');
        setEmail('');
        setName('');
        setPhoneNumber('');
        setValue('');
   };

   useEffect(() => {
       localStorage.setItem('formData',JSON.stringify(formData));
   }, [formData])
 
    return(
        <>
         <div>
             <div>
              <form onSubmit={formSubmitFormHandler}>
                  <div>
                       <label>Text Field</label>
                       <input 
                        type="text"
                        placeholder="Basic usage" 
                        value={textField}
                        onChange={(e) => {setTextField(e.target.value)}} 
                        required/>
                   </div>   
                   <div>
                       <label>Email Field</label>
                       <input 
                        placeholder="Basic usage"
                        value={email} 
                        type="email" 
                        required onChange={(e) => {setEmail(e.target.value)}}/>
                   </div>

                   <div>
                      <label>Phone Field</label>
                      <input 
                      placeholder="Basic usage" 
                      value={phoneNumber} 
                      onChange={(e) => {setPhoneNumber(e.target.value)}}
                      required/>
                   </div>

                   <div>
                      <label>Name</label>
                      <input 
                      placeholder="Basic usage" 
                      value={name}
                      onChange={(e) => {setName(e.target.value)}} 
                      required />
                   </div>

                   <div>
                    <label>Radio button</label>
                   <Radio.Group onChange={(e) => {setValue(e.target.value)}} value={value} required>
                    <Radio value='Excellent'>Excellent</Radio>
                    <Radio value='Good'>Good</Radio>
                    <Radio value='Fair'>Fair</Radio>
                    <Radio value='Bad'>Bad</Radio>
                   </Radio.Group>
                   </div>

                   <div><button>Add data</button></div>
              
              </form>
              </div>
          </div>
        </>
    );
};

export default FormData;