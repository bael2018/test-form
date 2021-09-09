import { useEffect } from 'react'
import { useState } from 'react'
import cls from './Form.module.css'
import {BsChevronCompactDown} from 'react-icons/bs'
import { searchList } from '../../helpers'
import { useDispatch } from 'react-redux'
import { educationAction, numberAction, qualifyAction, searchAction, seriesAction, specialAction, yearAction } from '../../actions'
import {RiSearch2Line , RiStarSFill} from 'react-icons/ri'
import Result from '../Result'

const Form = () => {
    const [page , setPage] = useState(false)
    const dispatch = useDispatch()
    const [inputFirst , setInputFirst] = useState(false)
    const [inputSecond , setInputSecond] = useState(false)
    const [inputThird , setInputThird] = useState(false)

    const [show , setShow] = useState(false)
    const [education , setEducation] = useState('среднее профессиональное образование')

    // Inputs handlers

    const [year , setYear] = useState('')
    const [searchInput , setSearchInput] = useState('')
    const [diplomSeries , setDiplomSeries] = useState('')
    const [diplomNumber , setDiplomNumber] = useState('')
    const [special , setSpecial] = useState('')
    const [qualify , setQualify] = useState('')

    useEffect(() => {
        if(diplomSeries !== ''){
            setInputFirst(true)
        }else(
            setInputFirst(false)
        )

        if(diplomNumber !== ''){
            setInputSecond(true)
        }else{
            setInputSecond(false)
        }

        if(special !== ''){
            setInputThird(true)
        }else{
            setInputThird(false)
        }
    }, [diplomSeries , diplomNumber , special , qualify])

    // searchList

    const [searchRes , setSearchRes] = useState([])
    const [searchState , setSearchState] = useState(false)
    const list = searchList
    useEffect(() => {
        if(searchInput !== ''){
            const filter = list.filter(({title}) => title.toLowerCase().includes(searchInput.toLowerCase()))
            setSearchRes(filter)
            setSearchState(true)
        }else{
            setSearchState(false)
        }
        
    } , [searchInput])

    const searchInputValue = e => {
        setSearchState(false)
        setSearchInput(e)
    }

    // submitBtn

    const handleForm = e => {
        e.preventDefault()

        if(year !== '' && searchInput !== '' && diplomSeries !== '' && diplomNumber !== ''  && special !== '' && qualify !== ''){
            dispatch(educationAction(education))
            dispatch(yearAction(year))
            dispatch(searchAction(searchInput))
            dispatch(seriesAction(diplomSeries))
            dispatch(numberAction(diplomNumber))
            dispatch(specialAction(special))
            dispatch(qualifyAction(qualify))

            setYear('')
            setSearchInput('')
            setDiplomSeries('')
            setDiplomNumber('')
            setSpecial('')
            setQualify('')
            setPage(!page)
        }else{
            alert("Заполните все поля ввода!")
        }
    }

    return (
        <section className={cls.form}>
            {
                page ? <Result page={setPage}/> : (
                    <>
                    <h2 className={cls.form_title}>Образование</h2>
                    <form action="address">
                        <div className={cls.form_header}>
                            <div onClick={() => setShow(prev => !prev)}>
                                <h5>{education} <BsChevronCompactDown/></h5>
                                <span style={{
                                    opacity: show ? '1' : '0',
                                    pointerEvents: show ? 'all' : 'none',
                                    transform: show ? 'translate(1)' : 'translate(.9)'
                                }}>
                                    <p onClick={() => {
                                        setEducation('среднее профессиональное образование')
                                    }}>среднее профессиональное образование</p>
                                    <p onClick={() => {
                                        setEducation('высшее образование - бакалавриат')
                                    }}>высшее образование - бакалавриат</p>
                                    <p onClick={() => {
                                        setEducation('высшее образование - магистратура')
                                    }}>высшее образование - магистратура</p>
                                </span>
                            </div>
                            <input 
                                onChange={e => (setYear(e.target.value))}
                                value={year}
                                placeholder='Год окончания' 
                                type="number" 
                            />
                        </div>
                        <div className={cls.form_body}>
                            <div style={{width: '100%' , position: 'relative'}}>
                                <RiStarSFill/>
                                <RiSearch2Line/>
                                <input 
                                    id={cls.search_input}
                                    value={searchInput}
                                    onChange={e => setSearchInput(e.target.value)}
                                    className={cls.form_input_full} 
                                    type="search" 
                                    placeholder='Введите для выбора ВУЗа' 
                                />
                                <div style={{display: searchState ? 'block' : "none" }} className={cls.search_wrapper}>
                                    {
                                        searchRes.length === 0 ? (
                                            <h1>
                                                Ничего не найдено
                                            </h1>
                                        ) : (
                                            searchRes.map(({title}) => {
                                                return <p onClick={() => searchInputValue(title)} key={title}>{title}</p>
                                            })
                                        )
                                    }
                                </div>  
                            </div>
                            <div className={cls.input_wrapper_half}>
                                <RiStarSFill/>
                                <input
                                    value={diplomSeries}
                                    onChange={e => setDiplomSeries(e.target.value)}
                                    className={cls.form_input_half} 
                                    type="number" 
                                    placeholder='Серия диплома' 
                                />
                            </div>
                            <div 
                                className={cls.input_wrapper_half}
                                style={{
                                    display: inputFirst ? 'block' : 'none'
                                }}>
                                <input 
                                    value={diplomNumber}
                                    onChange={e => setDiplomNumber(e.target.value)}
                                    className={cls.form_input_half} 
                                    type="number" 
                                    placeholder='Номер диплома' 
                                />
                            </div>
                            <div 
                                className={cls.input_wrapper_full}
                                style={{
                                    display: inputSecond ? 'block' : 'none'
                                }}>
                                <RiStarSFill/>
                                <input 
                                    value={special}
                                    onChange={e => setSpecial(e.target.value)}
                                    className={cls.form_input_full} 
                                    type="text" 
                                    placeholder='Специальность по диплому' 
                                />
                            </div>
                            <div 
                                className={cls.input_wrapper_full_alt}
                                style={{
                                    display: inputThird ? 'block' : 'none'
                                }}>
                                <RiStarSFill/>
                                <input 
                                    value={qualify}
                                    onChange={e => setQualify(e.target.value)}
                                    className={cls.form_input_full} 
                                    type="text" 
                                    placeholder='Квалификация по диплому' 
                                />
                            </div>
                        </div>
                        <div className={cls.form_footer}>
                            <div onClick={handleForm}>
                                Сохранить
                            </div>
                        </div>
                    </form>
                    </>
                )
            }
        </section>
    )
}

export default Form