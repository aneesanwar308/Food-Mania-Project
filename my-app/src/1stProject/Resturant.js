import React from 'react'
import { useState } from 'react'
import MenuCard from './MenuCard'
import Menu from './Menu.js'
const Resturant = () => {
   const [menuData, setMenuData]= useState(Menu)
   console.log(menuData)
   const filterItem= (category)=>{
    const listedItm= category==="All"?Menu: Menu.filter((currItm)=>{
        return currItm.name==category;
    })
    setMenuData(listedItm)
   }
    return (
        <div>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-item" onClick={()=>{filterItem("All")}}>All</button>
                    <button className="btn-item"onClick={()=>{filterItem("Breakfast")}}>Breakfast</button>
                    <button className="btn-item"onClick={()=>{filterItem("Lunch")}}>Lunch</button>
                    <button className="btn-item"onClick={()=>{filterItem("Dinner")}}>Dinner</button>
                </div>
            </nav>
            <MenuCard menuData={menuData} />
        </div>
    )
}

export default Resturant
