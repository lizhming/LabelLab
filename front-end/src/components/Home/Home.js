import React, { Component } from "react";
import Dropzone from "../Dropzone/Dropzone"
import ListImages from "../ListImages/ListImages"
import './Home.css'
export default class Home extends Component {
	render() {
		return(
			<div className="container-fluid Home m-0 p-0">
				<div className="row m-0 p-0">
					<div className=" col-12 col-lg-7 m-0">
						<div className="cloud d-flex row  justify-content-center pt-5">
							<i className="fas fa-cloud-upload-alt fa-6x"></i>
						</div>
						<h6 className="text-center"> DROP YOUR IMAGES HERE </h6>
						<div className="pt-0 pb-3">
							<Dropzone/>
						</div>
					</div>
					<div className="col-12 col-lg-5 m-0 p-0">
						<ListImages/>
					</div>
				</div>
			</div>
		)
	}
}
