class API {
	url = process.env.REACT_APP_API_URL || 'http://home.bizouarn.fr:4000/';
}
console.log(process.env.REACT_APP_API_URL || 'http://home.bizouarn.fr:4000/');

const Api = new API();

export default Api;
