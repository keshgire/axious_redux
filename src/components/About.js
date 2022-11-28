import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove, update } from '../store/HomeSlice'

function About() {
    const [input, setInput] = useState()
    const select = useSelector((state) => state.HomeSlice.value)
    const dipatch = useDispatch();

    return (
        <div>
            <h1>About page</h1>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>UserName</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        select.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <button onClick={() => dipatch(remove({
                                        id: item.id
                                    }))}>Remove</button>
                                    <input onChange={(e) => setInput(e.target.value)} type='text' placeholder='Name' />
                                    <button onClick={() => dipatch(update({
                                        id: item.id, name:input
                                    }))}>Update</button>

                                </tr>

                            )
                        })

                    }
                </tbody>
            </table>

        </div>
    )
}

export default About