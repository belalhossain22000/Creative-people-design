import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSpinner } from 'react-icons/fa';


const Blog = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                setTodos(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    }, []);

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div className="w-[1320px] mx-[300px] py-6">
            <h1 className="text-[50px] font-bold mb-8 text-center">Todo List</h1>
            {loading ? <div className="flex items-center justify-center h-32">
                <FaSpinner className="animate-spin text-gray-500 text-4xl" />
            </div> : <div className="grid grid-cols-4 gap-5 ">
                {todos.map(todo => (
                    <div
                        key={todo.id}
                        className="bg-gray-100 rounded-md p-4 mb-4"
                        data-aos="zoom-in-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="200"
                    >
                        <h3 className="text-lg font-semibold mb-2">{todo.title}</h3>
                        <p className={`text-sm ${todo.completed ? 'text-green-600' : 'text-red-600'}`}>
                            {todo.completed ? 'Completed' : 'Incomplete'}
                        </p>
                    </div>
                ))}
            </div>}

        </div>
    );
};

export default Blog;