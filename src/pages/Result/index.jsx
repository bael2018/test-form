import { useSelector } from 'react-redux'
import cls from './Result.module.css'

const Result = ({page}) => {
    const education = useSelector(state => state.info.education)
    const year = useSelector(state => state.info.year)
    const search = useSelector(state => state.info.searchState)
    const series = useSelector(state => state.info.series)
    const number = useSelector(state => state.info.number)
    const special = useSelector(state => state.info.special)
    const qualify = useSelector(state => state.info.qualify)

    return (
        <section className={cls.result}>
            <h3 className={cls.result_header}>Образование</h3>
            <div className={cls.result_body}>
                <div className={cls.result_wrapper}>
                    <div>
                        <h5>Уровень образования</h5>
                        <h3>{education}</h3>
                    </div>
                    <div>
                        <h5>Год окочания</h5>
                        <h3>{year}</h3>
                    </div>
                </div>
                <div className={cls.result_wrapper_alt}>
                    <h5>ВУЗ</h5>
                    <h3>{search}</h3>
                </div>
                <div className={cls.result_wrapper}>
                    <div>
                        <h5>Серия диплома</h5>
                        <h3>{series}</h3>
                    </div>
                    <div>
                        <h5>Номер диплома</h5>
                        <h3>{number}</h3>
                    </div>
                </div>
                <div className={cls.result_wrapper_alt}>
                    <h5>Специальность по диплому</h5>
                    <h3>{special}</h3>
                </div>
                <div className={cls.result_wrapper_alt}>
                    <h5>Квалификация по диплому</h5>
                    <h3>{qualify}</h3>
                </div>
                <label className={cls.result_label}>
                    <input checked={true} type="checkbox" />
                    Нострификация
                </label>
                <div className={cls.result_footer}>
                    <input type="file" />
                    <h3>Документ: <span>Скачать документ</span></h3>
                </div>
            </div>
        </section>
    )
}

export default Result