import { useState } from "react";
import {tipos} from "../inicioComponentes/tipos";



 const TiposCheckbox = (props) => {


      const handleOnChange = (e) => {
        props.setarraydeTipos( (bre)=> [...bre, {id: e.target.value}])
        console.log(e.target.value)

      };

       /* setCheckedState(updatedCheckedState);

      const AllselectedType = updatedCheckedState(currentState)
        if (currentState === true) {
          return value.id;
        }
      
         setSelectedType(AllselectedType) */
    

     return (
       <div className="TiposCheckbox flex w-full">
        <ul className="flex flex-col items-start w-full justify-around ">
        {tipos.map(({ name, id }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item w-full justify-evenly">
                <div className="justify-evenly w-full flex flex-wrap">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={id}
                    onChange={(e) => handleOnChange(e)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
        <li>
          <div className="toppings-list-item">
          </div>
        </li>
      </ul>
    </div>
     );
}


export default TiposCheckbox