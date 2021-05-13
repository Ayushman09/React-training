import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import WelcomeJSX from './component/WithJSX';
import Without from './component/WithoutJSX';
import SessionSeparator from './component/SessionSeparator';
import Message from './component/Message';
import Counter from './component/Counter';
import GreetDestructure from './component/GreetDestruture'
import WelcomeDestructure from './component/WelcomeDestructure';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import LifecycleA from './component/LifecycleA';
function App() {
  return (
    <div className="App">
      <Greet name='Ayushman' hero = 'SuperMan'><button>Trying button</button></Greet>
      <Greet name='Prayag' hero = 'Batman'><p>This is children props</p></Greet>
      <Welcome name='Banner'/>
      <Welcome name='Tony'/>
      <WelcomeJSX/>
      <Without/>
      <SessionSeparator name='Video 10- State'/>
      <Message/>
      <Counter/>
      <p>Destructuring props & state</p>
      <GreetDestructure name='Rahul' hero = 'Hulk'/>
      <WelcomeDestructure name= 'Ravi'/>
      <SessionSeparator name = "Event Handling"/>
      <FunctionClick />
      <ClassClick />
      <p>Event Binding</p>
      <EventBind/>
      <SessionSeparator name="props as Methods" />
      <ParentComponent/>
      <SessionSeparator name="Conditional Rendering" />
      <UserGreeting/>
      <SessionSeparator name="Component Mounting Lifecycle Methods"/>
      <LifecycleA/>
    </div>
  );
}

export default App;
