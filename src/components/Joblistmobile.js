import React, { useEffect } from 'react'
import jobs from '../data/jobs'

function Joblist() {

    const filterByRole = (role) => {
        const result = jobs.filter((job) => {
            return (job.role === role)
        })
        console.log(result)
    }

    const filterByLevel = (level) => {
        const result = jobs.filter(((job) => {
            return (job.level === level)
        }))
        console.log(result)
    }

    const filterByLang = (lang) => {
        const result = jobs.filter((job) => {
            return (job.languages.indexOf(lang) !== -1)
        })
        console.log(result)
    }
    const filterByTool = (tool) => {
        const result = jobs.filter((job) => {
            return (job.tools.indexOf(tool) !== -1)
        })
        console.log(result)
    }

    const getStyle = (featured) => {
        return {
            borderLeft: featured ? '3px solid hsl(180, 29%, 50%)' : 'none'
        }
    }
    //const [item1, setItem1] = useState('')
    // const [item2, setItem2] = useState('')
    //const [item3, setItem3] = useState('')
    // const [item4, setItem4] = useState('')





    return (
        <div>
            <div>Hi</div>
            <div>
                {jobs.map((job) => (
                    <li key={job.id} className='wholecontainer' style={getStyle(job.featured)}>

                        <img src={job.logo} />
                        <div className="right-side">
                            <div className="top-side">
                                <span style={{ color: 'hsl(180, 29%, 50%)' }}>{job.company}</span>

                                <div> {job.new ? <span style={{ textTransform: 'uppercase', marginLeft: '20px', padding: '5px', background: 'hsl(180, 29%, 50%)', borderRadius: '20px', color: 'white' }}>new!</span> : ''}
                                    {job.featured ? <span style={{ textTransform: 'uppercase', marginLeft: '5px', padding: '5px', background: 'hsl(180, 14%, 20%)', borderRadius: '20px', color: 'white' }}>featured</span> : ''}
                                </div>

                            </div>
                            <div>
                                <div>
                                    <div className="bottom-side">
                                        <h3>{job.position}</h3>
                                        <ul>
                                            {/* Role */}
                                            <li onClick={() => filterByRole(job.role)}>{job.role}</li>
                                            {/* Level */}
                                            <li onClick={() => filterByLevel(job.level)}>{job.level}</li>
                                            {/* Languages */}
                                            {job.languages.map((lang) => (
                                                <li key={lang} onClick={() => filterByLang(lang)}> {lang}</li>
                                            ))}
                                            {/* Tools */}
                                            {job.tools.map((tool) => (
                                                <li key={tool} onClick={() => filterByTool(tool)}> {tool}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <ul style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px' }}>
                                    <li style={{ listStyle: 'none' }}>{job.timePost}</li>
                                    <li>{job.description}</li>
                                    <li>{job.location}</li>
                                </ul>
                            </div>

                        </div>
                    </li>))}
            </div>
        </div>
    )
}
// const tablet = {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     flexWrap: 'wrap',
//     gap: '20px',
//     listStyle: 'none',
//     color: 'green',
//     padding: '5px',
// }
export default Joblist

