import React from "react";
import { connect } from "react-redux";
import {
	updateGui
} from "../../actions";

class inputCheck extends React.Component {
	constructor() {
		super();

	}

	render() {
		const { defaultvalue, onChange } = this.props;

		if(defaultvalue){
			return (<input type="checkbox" checked onChange={onChange} />);
		} else {
			return (<input type="checkbox" onChange={onChange} />);
		}
	}
}

const string = defaultvalue => (<input type="text" defaultValue={defaultvalue} />);

const number = defaultvalue => (<input type="number" defaultValue={defaultvalue} />);


const mapDispatchToProps = (dispatch, ownProps) => ({
	onChange: e => {
		const name = ownProps.name.replace(/\:/g, ".");

		dispatch(updateGui(name, e.target.checked));
	},
});

const Checkbox = connect(
	null, mapDispatchToProps
)(inputCheck);

export {
	Checkbox,
	string,
	number,
};
