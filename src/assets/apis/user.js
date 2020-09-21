import Api from './Api';

export default {
    all_User() {
        return Api.get('user');
    },
    
}