import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { add } from '../store/HomeSlice'

function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            setData(res.data);

        })

    }, [])

    const dispatch = useDispatch();

    return (
        <div>
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
                        data.map((item) => {
                            return (
                                <tr key={item.id}>

                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <button onClick={() => dispatch(add(
                                        {
                                            id: item.id,
                                            name: item.name,
                                            username: item.username,
                                            email: item.email
                                        }))}>Add</button>

                                </tr>

                            )
                        })
                    }

                </tbody>

            </table>
        </div>
    )
}

export default Home