import cls from './App.module.css'
import {Switch , Route , Redirect} from 'react-router-dom'
import Form from './pages/Form'

const App = () => {
    return (
        <section className={cls.root}>
            <Switch>
                <Route path='/' component={Form}/>
                <Redirect to='/'/>
            </Switch>
        </section>
    )
}

export default App