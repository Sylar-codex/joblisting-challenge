import img1 from '../images/photosnap.svg'
import img2 from '../images/manage.svg'
import img3 from '../images/account.svg'
import img4 from '../images/myhome.svg'
import img5 from '../images/loop-studios.svg'
import img6 from '../images/faceit.svg'
import img7 from '../images/shortly.svg'
import img8 from '../images/insure.svg'
import img9 from '../images/eyecam-co.svg'
import img10 from '../images/the-air-filter-company.svg'


const jobs = [{
    id: 1,
    company: 'Photosnap',
    logo: img1,
    position: 'Senior Frontend Developer',
    timePost: '1d ago',
    description: 'Full Time',
    location: 'USA only',
    new: true,
    featured: true,
    role: 'Frontend',
    level: 'Senior',
    languages: ['HTML', 'CSS', 'Javascript'],
    tools: []
},
{
    id: 2,
    company: 'Manage',
    logo: img2,
    position: 'Fullstack Developer',
    timePost: '1d ago',
    description: 'Part Time',
    location: 'Remote',
    new: true,
    featured: true,
    role: 'Fullstack',
    level: 'Midweight',
    languages: ['Pyton'],
    tools: ['React']
}, {
    id: 3,
    company: 'Account',
    logo: img3,
    position: 'Junior Frontend Developer',
    timePost: '2d ago',
    description: 'Part Time',
    location: 'USA only',
    new: true,
    featured: false,
    role: 'Frontend',
    level: 'Junior',
    languages: ['Javascript'],
    tools: ['React', 'Sass']
}, {
    id: 4,
    company: 'myHome',
    logo: img4,
    position: 'Senior Frontend Developer',
    timePost: '5d ago',
    description: 'Contract',
    location: 'USA only',
    new: false,
    featured: false,
    role: 'Frontend',
    level: 'Junior',
    languages: ['CSS', 'Javascript'],
    tools: []
}, {
    id: 5,
    company: 'Loop Studios',
    logo: img5,
    position: 'Software Engineer',
    timePost: '1w ago',
    description: 'Full Time',
    location: 'Worldwide',
    new: false,
    featured: false,
    role: 'Fullstack',
    level: 'Midweight',
    languages: ['Javascript'],
    tools: ['Sass', 'Ruby']
}, {
    id: 6,
    company: 'faceIt',
    logo: img6,
    position: 'Senior Backend Developer',
    timePost: '2w ago',
    description: 'Full Time',
    location: 'UK only',
    new: false,
    featured: false,
    role: 'Backend',
    level: 'Junior',
    languages: [],
    tools: ['Ruby', 'RoR']
}, {
    id: 7,
    company: 'Shortly',
    logo: img7,
    position: 'Junior Developer',
    timePost: '2w ago',
    description: 'Full Time',
    location: 'Worldwide',
    new: false,
    featured: false,
    role: 'Frontend',
    level: 'Junior',
    languages: ['HTML', 'Javascript'],
    tools: ['Sass']
}, {
    id: 8,
    company: 'Insecure',
    logo: img8,
    position: 'Junior Frontend Developer',
    timePost: '2w ago',
    description: 'Full Time',
    location: 'USA only',
    new: false,
    featured: false,
    role: 'Frontend',
    level: 'Junior',
    languages: ['Javascript'],
    tools: ['Sass']
}, {
    id: 9,
    company: 'Eyecam Co',
    logo: img9,
    position: 'Full Stack Engineer',
    timePost: '3w ago',
    description: 'Full Time',
    location: 'Worldwide',
    new: false,
    featured: false,
    role: 'Fullstack',
    level: 'Midweight',
    languages: ['Javascript', 'Python'],
    tools: ['Django']
}, {
    id: 10,
    company: 'The Air Filter Company',
    logo: img10,
    position: 'Front-end Dev',
    timePost: '1mo ago',
    description: 'Part Time',
    location: 'Worldwide',
    new: false,
    featured: false,
    role: 'Frontend',
    level: 'Junior',
    languages: ['Javascript'],
    tools: ['React', 'Sass']
}]

export default jobs;