import React, { useState } from "react";
import "../../styles/home.css"

let colorLights = ["red","yellow","green"];

const Home = () => {
	const [on , setOn] = useState("off");
	return (
		<div className="row mt-5">
		<div className="col-5" onClick={()=>{setOn('off')}}></div>
		<div className="container col-2">
			<div className="container text-center">
				<div className="container text-center mt-1" id="semaforo">
					<div onClick={()=>{setOn('onred')}} className={'light red ' + (on == 'onred' ? 'encendidored' : '')} ></div>
					<div onClick={()=>{setOn('onyellow')}} className={'light yellow ' + (on == 'onyellow' ? 'encendidoyellow' : '')} ></div>
					<div onClick={()=>{setOn('ongreen')}} className={'light green ' + (on == 'ongreen' ? 'encendidogreen' : '')} ></div>
				</div>
			</div>
			<div id="base"></div>
		</div>
		<div className="col-5" onClick={()=>{setOn('off')}}></div>
		</div>
	);
};

export default Home;

