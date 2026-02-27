import './App.css'
import Accordion from './components/Accordion'
import AcronymGenerator from './components/AcronymGenerator'
import AgeCalculator from './components/AgeCalculator'
import Authentication from './components/Authentication/Authentication'
import AutoSaveInput from './components/AutoSaveInput'
import CharacterCount from './components/CharacterCount'
import ChipsInput from './components/ChipsInput'
import ColorExplorer from './components/ColorExplorer'
import CopyClipboard from './components/CopyClipboard'
import EvenOrOddChecker from './components/EvenOrOddChecker'
import FocusInput from './components/FocusInput'
import Greetings from './components/Greetings'
import LeapYear from './components/LeapYear'
import PasswordStrength from './components/PasswordStrength'
import ProgressBar from './components/ProgressBar'
import Sidebar from './components/Sidebar'
import TabSwitcher from './components/TabSwitcher'
import TogglePassword from './components/TogglePassword'
import Tooltip from './components/Tooltip'
import UserProfile from './components/UserProfile'
function App() {
  const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript."
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React."
  },
  {
    title: "Node.js",
    content: "Basics of server-side development with Node.js."
  },
  {
    title: "Full-Stack Development",
    content: "Build full-stack apps with React and Node.js."
  },
];
  return (
    <>
      {/* <UserProfile /> 
      <ProgressBar />
      <Authentication />
      <Accordion items={items} />
      <CharacterCount />
      <TabSwitcher />
      <Greetings />
      <AgeCalculator />
      <ChipsInput />
      <Sidebar />
      <EvenOrOddChecker />
      <AcronymGenerator />
      <PasswordStrength />
      <CopyClipboard />
      <FocusInput />
      <AutoSaveInput />
      <ColorExplorer />
      <TogglePassword />
      <LeapYear />*/}
      <Tooltip />
    </>
  )
}

export default App
