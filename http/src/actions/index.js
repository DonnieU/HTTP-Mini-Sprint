import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
    // Add the code for this action
    const friends = axios.get('http://10.0.0.95:5000/friends');
    return {
        type: GET_FRIENDS,
        payload: friends
    };
};