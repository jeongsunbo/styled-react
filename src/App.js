import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      {/* 태그안에는 children임 */}
      <div className='blueSize'>
        <Button size='large' color="blue">BUTTON</Button> 
        <Button size='medium' color="blue">BUTTON</Button> 
        <Button size='small' color="blue">BUTTON</Button> 
      </div>
      <div className='blackSize'>
        <Button size='large' color="gray">BUTTON</Button> 
        <Button size='medium' color="gray">BUTTON</Button> 
        <Button size='small' color="gray">BUTTON</Button> 
      </div>
      <div className='magentaSize'>
        <Button size='large' color="magenta">BUTTON</Button> 
        <Button size='medium' color="magenta">BUTTON</Button> 
        <Button size='small' color="magenta">BUTTON</Button> 
      </div>
      <div className='borderSize'>
        <Button size='large' outline>BUTTON</Button> 
        <Button size='medium' outline>BUTTON</Button> 
        <Button size='small' outline>BUTTON</Button> 
      </div>
      <div className='WidthColor'>
        <Button color="blue">BUTTON</Button> 
        <Button color="gray">BUTTON</Button> 
        <Button color="magenta">BUTTON</Button> 
      </div>
    </div>
  );
}

export default App;
