import React from 'react'
// import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
import AddTask from './AddTask'


class App extends React.Component{
    render(){
        return(
            <section id="todo">
                <BrowserRouter>
                    <Routes>
                        {/* <Route path="/add-task" component={AddTask} /> */}
                        <Route path='/add-task' element={<AddTask/>} />
                        {/* <Route path="/" component={ToDoList} /> */}
                        <Route path='/' element={<ToDoList/>} />
                        
                    </Routes>
                    <NavBar />
                </BrowserRouter>
            </section>
        )
    }
}


export default App