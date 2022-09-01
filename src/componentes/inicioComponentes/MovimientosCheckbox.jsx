import { useState } from "react";
import {movimientos} from "../inicioComponentes/movimientos";



 const MovimientosCheckbox = (props) => {


      const handleOnChange = (e) => {
        props.setarraydeMovimientos( (bre)=> [...bre, {id: e.target.value}])
        console.log(e.target.value)

      };


    

     return (
       <div className="TiposCheckbox flex">
        <ul className="flex flex-col items-start w-full justify-around">
        {movimientos.map(({ name, id }, index) => {
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


export default MovimientosCheckbox