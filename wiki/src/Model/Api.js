class API {
	url = process.env.REACT_APP_API_URL || 'http://vps2.bizouarn.fr:4000/';
}

const Api = new API();

export default Api;
