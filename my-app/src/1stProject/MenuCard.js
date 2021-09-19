import React from 'react'
import "./resStyle.css"



const MenuCard = ({ menuData }) => {
    return (
        <div id="main">
            {
                menuData.map((currItem) => {
                    let imagePath=`${window.location.origin}/images/${currItem.image}.jpg`
    
                    return (
                        <>
                            <div className="card-container" key={currItem.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{currItem.name}</span>
                                        <span className="subtle card-author"></span>
                                        <h2 className="card-title">{currItem.item}</h2>
                                        <div className="imgDes">
                                        <span className="subtle card-description">
                                            {currItem.description}
                                        </span>
                                        <img src={imagePath} alt="Biryani" className="card-media" />
                                        
                                        <button className="card-tag subtle">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default MenuCard
