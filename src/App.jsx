import cls from './App.module.css'
import {Switch , Route , Redirect} from 'react-router-dom'
import Form from './pages/Form'
import Result from './pages/Result'

const App = () => {
    return (
        <section className={cls.root}>
            <Switch>
                <Route exact path='/' component={Form}/>
                <Route exact path='/result' component={Result}/>
                <Redirect to='/'/>
            </Switch>
        </section>
    )
}

export default App