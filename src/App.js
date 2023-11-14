import logo from './logo.svg';
import './App.css';
import { SedanCarIcon } from './components/sedan-icon';
import { SUVCarIcon } from './components/suv-icon';
import { LUXCarIcon } from './components/lux-icon';
const Orange = 'hsl(31, 77%, 52%)';
const Cyan = 'hsl(184, 100%, 22%)';
const Green = 'hsl(179, 100%, 13%)';

const data = [
  {
    background: Orange,
    icon: <SedanCarIcon />,
    title: 'Sedans',
    description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip'
  },
  {
    background: Cyan,
    icon: <SUVCarIcon />,
    title: 'SUVS',
    description: 'Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures.'
  },
  {
    background: Green,
    icon: <LUXCarIcon />,
    title: 'Luxury',
    description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style'
  },
]

function App() {
  return (
    <div className='styled'>
      <div className="App">
        <Card icon={<SedanCarIcon/>} title={'Sedans'} description={'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip'} background={Orange}/>
        <Card icon={<SUVCarIcon/>} title={'SUVS'} description={'Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures.'} background={Cyan}/>
        <Card icon={<LUXCarIcon/>} title={'Luxury'} description={'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style'} background={Green}/>
        
      </div>
    </div>
  );
}

function Card({icon, title, description, background}) {
  return (
    <section className='firstSection' style={{ backgroundColor: background }}>
     {icon}
    <h2>{title}</h2>
    <p>{description}</p>
    <button  className='btnOne'>Learn more</button>
   </section>
  )
}

export default App;
