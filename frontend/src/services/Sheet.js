import axios from 'axios';

export const save = (data) => {
	const config = {
		method: 'post',
		url: 'https://sheet.best/api/sheets/1360f42b-f7a5-4a70-831c-dc22c16f62bd',
		headers: {
			'Content-Type': 'application/json'
		},
		data
	};
	return axios(config).then(res => {
		return true;
	}).catch(err => {
		return false;
	});
}