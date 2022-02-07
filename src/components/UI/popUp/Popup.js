import './Popup.css'
import 'animate.css'
function Popup({ genres = [], setTrigger, trigger }) {
	const options = genres.map((item) => <h2 key={item.id}>{item.id}</h2>)
	return trigger ? (
		<div className='popup ' onClick={() => setTrigger(false)}>
			<div className='popup-inner animate__animated animate__zoomIn'>
				{options}
			</div>
		</div>
	) : (
		''
	)
}

export default Popup
