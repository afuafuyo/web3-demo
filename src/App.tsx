import Header from './components/Header'
import Title from './components/Title'
import Grid from './components/Grid'
import Grow1 from './components/Grow1'
import Grow2 from './components/Grow2'
import Copyright from './components/Copyright'

function App() {
  return (
    <>
      <img src="/images/green.svg" className='app-bg1' />
      <img src="/images/blue.svg" className='app-bg2' />
      <Header />
      <Title />
      <Grid />
      <div className="app-card">
        <Grow1 />
        <Grow2 />
        <Copyright />
      </div>
    </>
  )
}

export default App
