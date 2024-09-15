import React from 'react'
import ProductData from '../ProductData'
import './BoxSmall.css'
const BoxSmall = ({  }) => {
    return (
        <>
            <div className="container">
                {
                    ProductData.map((curElm) => {
                        return (
                            <>
                                <div
                                    className="box"
                                    style={{
                                        width: curElm.Width,
                                        height: curElm.Height,
                                        backgroundColor: curElm.BackGroundColor,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <h3 style={{ backgroundColor: curElm.BackGroundColor }}>{curElm.Title}</h3>
                                    <p style={{ backgroundColor: curElm.BackGroundColor }} >{curElm.Description}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default BoxSmall
