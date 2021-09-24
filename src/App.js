import 'antd/dist/antd.css'; 
import './App.css';
import { Tabs } from 'antd';
import TableData from './coponents/tableData';
import React, { useEffect, useState } from "react";
import { Radio } from 'antd';
import flag from './flag.svg';



const getDataFromLocalStorage = () => {
  const data = localStorage.getItem('formData');
  if(data){
    return JSON.parse(data);
  }
  else{
    return [];
  }
}

const { TabPane } = Tabs;
function App() {

  const [formData,setFormData] = useState(getDataFromLocalStorage());

  const [textField, setTextField] = useState('');
  const [email,setEmail] = useState('');
  const [name,setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [value,setValue] = useState('Excellent');

  const [enteredNameIsValid,setEnteredNameISValid] = useState(true);
 
  const formSubmitFormHandler = (event) => {
       event.preventDefault();

       if(name.trim() === '' ){
        setEnteredNameISValid(false);
         return;
       }

  
       setEnteredNameISValid(true);

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


  const nameInputClasses = enteredNameIsValid ? 'sm-input' : 'invalid-input';
  const labelClasses = enteredNameIsValid ? '' : 'invalid-label';
  return (
    <div className="App">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Form" key="1">
            <div className="card-from-wrapper">
              <div className="heading-text">Aromatic Bar</div>
              <div className="subheading-text">We are committed to providing you with the best dining experience possible, 
              so we welcome your comments.please fill out this questionnaire. Thank you</div>
             <div className="from-wrapper">

              <form onSubmit={formSubmitFormHandler}>


                  <div className="input-wrapper">
                    <div className="data-wrapper">
                      <label>Text Field</label><br/>
                       <input 
                        className="sm-input"
                        type="text"
                        value={textField}
                        onChange={(e) => {setTextField(e.target.value)}} 
                        />
                    </div>

                    <div className="data-wrapper">
                      <label>Email Field</label><br/>
                       <input 
                        className="sm-input"
                        value={email} 
                        type="email" 
                        onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </div>
                   </div>   
                  

                  <div className="input-wrapper">
                     <div className="data-wrapper">
                        <label>Phone Field</label><br/>
                        <input 
                        className="sm-input logo-input"
                        type="text"
                        value={phoneNumber} 
                        minLength="10"
                        onChange={(e) => {setPhoneNumber(e.target.value)}}
                        />
                        <img src={flag} className="logo-wrapper" alt="flag"/>
                      </div>

                  <div className="data-wrapper">
                    <label>Radio button</label><br/>
                     <Radio.Group onChange={(e) => {setValue(e.target.value)}} value={value} >
                       <Radio value='Excellent'>Excellent</Radio>
                       <Radio value='Good'>Good</Radio>
                       <Radio value='Fair'>Fair</Radio>
                       <Radio value='Bad'>Bad</Radio>
                     </Radio.Group>
                   </div>
                     
                </div>
                
                <div className="input-wrapper">
                   <div className="data-wrapper">
                      <label className={labelClasses}>Name*</label>
                      <input
                      className={nameInputClasses}
                      value={name}
                      onChange={(e) => {setName(e.target.value)}} 
                       />
                 {!enteredNameIsValid && <p className="error-message">Error: This is mandatory field</p>}
                   </div>
                 </div>
                   
                 <div className="input-button-wrapper">
                   <div><button>Add data</button></div>
                 </div>
              </form>
              </div>
          </div>
          </TabPane>
        <TabPane tab="Table" key="2">
          {
            formData.length < 1 && <div className="data-not-found">data are not found</div>
          }
          {
            formData.length > 0 && <TableData formData={formData}/>
          }
              
        </TabPane>

  </Tabs>
    </div>
  );
}

export default App;
