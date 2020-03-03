const url = 'http://localhost/fruitapi/public/api/';

import axios from "axios";

var requests = {
	getAllFruits() {
		return axios.get(`${url}fruit`);
	}
}

export default requests;