import './App.css'
import Card from './Card'

function App() {
  const colors = [{
      color: "red",
      theme: "dark"
    }, {
      color: "yellow",
      theme: "light"
    }, {
      color: "green",
      theme: "dark"
    }, {
      color: "blue",
      theme: "dark"
    }, {
      color: "cyan",
      theme: "light"
    }, {
      color: "orange",
      theme: "dark"
  }];

  return (
    <div className=" flex-col justify-between">
      <h1 className='text-center text-3xl roboto-medium text-white mb-auto' id="title">Background Changer</h1>
      <div className="flex justify-around bg-white rounded-md p-2 flex-wrap">
        {colors.map((color, index) => {
          return <Card key={index} color={color} />
        })}
      </div>
    </div>
  )
}

export default App
