import React, { useState } from 'react'
import jobs from '../data/jobs'
import remove from '../images/icon-remove.svg'
import GlobalContext from './GlobalContext';

function Joblist() {
    const [filtering, setFiltering] = useState(false);
    const [filterResult, setFilterResult] = useState([]);
    const [clickedItem, setClickedItem] = useState([]);


    //Function that is used to filter the jobs by role

    const filterByRole = (role) => {
        if (filtering) {
            const result = filterResult.filter(((job) => {
                return (job.role === role)
            }))
            console.log('new:', result)
            setFilterResult(result)
        } else {
            const result = jobs.filter(((job) => {
                return (job.role === role)
            }))
            console.log('main: ', result)
            setFilterResult(result)
        }



    }

    //function to filter the jobs by level
    const filterByLevel = (level) => {

        if (filtering) {
            const result = filterResult.filter(((job) => {
                return (job.level === level)
            }))
            console.log('new:', result)
            setFilterResult(result)
        } else {
            const result = jobs.filter(((job) => {
                return (job.level === level)
            }))
            console.log('main: ', result)
            setFilterResult(result)
        }



    }
    //function to filter the jobs by language

    const filterByLang = (lang) => {
        if (filtering) {
            const result = filterResult.filter(((job) => {
                return (job.languages.indexOf(lang) !== -1)
            }))
            console.log('new:', result)
            setFilterResult(result)
        } else {
            const result = jobs.filter((job) => {
                return (job.languages.indexOf(lang) !== -1)
            })
            console.log('last_rsult:', result)
            setFilterResult(result);
        }
    }

    //function to filter the jobs by the tools
    const filterByTool = (tool) => {
        if (filtering) {
            const result = filterResult.filter(((job) => {
                return (job.tools.indexOf(tool) !== -1)
            }))
            console.log('new:', result)
            setFilterResult(result)
        } else {
            const result = jobs.filter((job) => {
                return (job.tools.indexOf(tool) !== -1)
            })
            console.log('last_rsult:', result)
            setFilterResult(result);
        }
    }

    //component styling for the filtered lists
    const upperSideStyle = () => {
        return {
            borderRadius: filtering ? '10px' : 'none',
            boxShadow: filtering ? '6px 6px 20px hsl(180, 29%, 50%)' : 'none',
            padding: filtering ? '10px' : 'none',
            margin: filtering ? '30px 40px' : 'none',
            background: filtering ? 'white' : 'none'
        }
    }

    const getStyle = (featured) => {
        return {
            borderLeft: featured ? '3px solid hsl(180, 29%, 50%)' : 'none'
        }
    }

    const getText = (text) => {
        const show = clickedItem.filter((val) => {
            return (val !== text)
        })
        setClickedItem(show)
    }

    const handleClear = () => {
        setClickedItem([])
        setFiltering(false)
    }




    return (
        <div>
            <GlobalContext.Provider value=''>
                <div style={upperSideStyle()} className='upper-side'>

                    <div className='upper-side-list'>
                        {clickedItem.map((item) => (
                            <li key={item} >{item}
                                <img src={remove} onClick={() => getText(item)} alt="clicked-item" /></li>




                        ))}
                    </div>
                    {filtering && <div className='clear-button'><button onClick={() => handleClear()}>clear</button></div>}
                </div>
            </GlobalContext.Provider>
            <div>
                {filtering ?
                    filterResult.map((job) => (
                        <li key={job.id} className='wholecontainer' style={getStyle(job.featured)}>

                            <img src={job.logo} alt="job-logo" />
                            <div className="right-side">
                                <div className="top-side">
                                    <span style={{ color: 'hsl(180, 29%, 50%)' }}>{job.company}</span>

                                    <div> {job.new ? <span style={{ textTransform: 'uppercase', marginLeft: '20px', padding: '5px', background: 'hsl(180, 29%, 50%)', borderRadius: '20px', color: 'white' }}>new!</span> : ''}
                                        {job.featured ? <span style={{ textTransform: 'uppercase', marginLeft: '5px', padding: '5px', background: 'hsl(180, 14%, 20%)', borderRadius: '20px', color: 'white' }}>featured</span> : ''}
                                    </div>

                                </div>
                                <div className='Middle-side'>
                                    <div>
                                        <h3>{job.position}</h3>
                                        <ul style={{ display: 'flex', gap: '20px' }}>
                                            <li style={{ listStyle: 'none' }}>{job.timePost}</li>
                                            <li>{job.description}</li>
                                            <li>{job.location}</li>
                                        </ul>

                                    </div>

                                    <div className="bottom-side">

                                        <ul>
                                            {/* Role */}
                                            <li onClick={() => {
                                                setFiltering(true);
                                                filterByRole(job.role);
                                                clickedItem.indexOf(job.role) === -1 &&
                                                    setClickedItem([...clickedItem, job.role]);

                                            }}>{job.role}</li>
                                            {/* Level */}
                                            <li onClick={() => {
                                                filterByLevel(job.level);
                                                setFiltering(true);
                                                clickedItem.indexOf(job.level) === -1 &&
                                                    setClickedItem([...clickedItem, job.level]);
                                            }}>{job.level}</li>
                                            {/* Languages */}
                                            {job.languages.map((lang) => (
                                                <li key={lang} onClick={() => {
                                                    filterByLang(lang);
                                                    setFiltering(true);
                                                    clickedItem.indexOf(lang) === -1 &&
                                                        setClickedItem([...clickedItem, lang]);
                                                }}> {lang}</li>
                                            ))}
                                            {/* Tools */}
                                            {job.tools.map((tool) => (
                                                <li key={tool} onClick={() => { filterByTool(tool); setFiltering(true); clickedItem.indexOf(tool) === -1 && setClickedItem([...clickedItem, tool]); }}> {tool}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </li>))
                    :
                    jobs.map((job) => (
                        <li key={job.id} className='wholecontainer' style={getStyle(job.featured)}>

                            <img src={job.logo} alt="job-real-logo" />
                            <div className="right-side">
                                <div className="top-side">
                                    <span style={{ color: 'hsl(180, 29%, 50%)' }}>{job.company}</span>

                                    <div> {job.new ? <span style={{ textTransform: 'uppercase', marginLeft: '20px', padding: '5px', background: 'hsl(180, 29%, 50%)', borderRadius: '20px', color: 'white' }}>new!</span> : ''}
                                        {job.featured ? <span style={{ textTransform: 'uppercase', marginLeft: '5px', padding: '5px', background: 'hsl(180, 14%, 20%)', borderRadius: '20px', color: 'white' }}>featured</span> : ''}
                                    </div>

                                </div>
                                <div className='Middle-side'>
                                    <div>
                                        <h3>{job.position}</h3>
                                        <ul style={{ display: 'flex' }}>
                                            <li style={{ listStyle: 'none' }}>{job.timePost}</li>
                                            <li>{job.description}</li>
                                            <li>{job.location}</li>
                                        </ul>

                                    </div>

                                    <div className="bottom-side">

                                        <ul>
                                            {/* Role */}
                                            <li onClick={() => {
                                                setFiltering(true);
                                                filterByRole(job.role);
                                                setClickedItem([...clickedItem, job.role]);
                                                // setItemRole(job.role)
                                            }}>{job.role}</li>
                                            {/* Level */}
                                            <li onClick={() => {
                                                filterByLevel(job.level);
                                                setFiltering(true);
                                                setClickedItem([...clickedItem, job.level]);
                                            }}>{job.level}</li>
                                            {/* Languages */}
                                            {job.languages.map((lang) => (
                                                <li key={lang} onClick={() => {
                                                    filterByLang(lang);
                                                    setFiltering(true);
                                                    setClickedItem([...clickedItem, lang]);
                                                }}> {lang}</li>
                                            ))}
                                            {/* Tools */}
                                            {job.tools.map((tool) => (
                                                <li key={tool} onClick={() => { filterByTool(tool); setFiltering(true); setClickedItem([...clickedItem, tool]); }}> {tool}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </li>))
                }

            </div>
        </div>
    )
}

export default Joblist;

