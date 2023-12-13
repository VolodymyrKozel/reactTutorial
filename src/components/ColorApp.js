
const ColorApp = ({color, setColor}) => {
  return (
    <form className="colorChanger" onSubmit={(e)=> e.preventDefault()}>
        <div className="colorShow" style={{backgroundColor: `${color}`}}>

        </div>
        <input className="colorInput" type="text" id="color" 
        value={color}
        onChange={(e) => setColor(e.target.value)}
        />
    </form>
  )
}

export default ColorApp