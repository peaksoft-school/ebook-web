import './Popup.css'
import 'animate.css'
function Popup(props) {
	const options = props.genres.map((item) => (
		<p>
			
		</p>
	))
	return props.trigger ? (
		<div className='popup ' onClick={() => props.setTrigger(false)}>
			<div className='popup-inner animate__animated animate__zoomIn'>
				{options}
			</div>
		</div>
	) : (
		''
	)
}

export default Popup
