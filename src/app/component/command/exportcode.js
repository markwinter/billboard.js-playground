import React, { PropTypes } from "react";

const URL = {
	d3v4 : "https://cdnjs.cloudflare.com/ajax/libs/d3/4.10.2/d3.js",
	bbjs : "https://cdnjs.cloudflare.com/ajax/libs/billboard.js/1.0.1/billboard.js",
	bbcss : "https://cdnjs.cloudflare.com/ajax/libs/billboard.js/1.0.1/billboard.css",
};

const html = `<div id="chart"></div>`;

const js = `bb.generate({
	data: {
			columns: [
				["data1", 30, 200, 100, 400, 150, 250],
				["data2", 50, 20, 10, 40, 15, 25],
				["data3", 50, 20, 10, 40, 15, 25]
			]
		}
})`;
const css_external = `${URL.bbcss}`;
const js_external = `${URL.d3v4};${URL.bbjs}`

class ExportCode extends React.Component {
	render() {
		const value = {
			title: "bb playground",
			css_external,
			js_external,
			html,
			js
		};

		return (<form action="https://codepen.io/pen/define" method="POST" target="_blank">
			<input type="hidden" name="data" value={JSON.stringify(value)} />
			<input type="submit" value="Create New Pen with Prefilled Data" />
		</form>);
	}
};


export default ExportCode;



