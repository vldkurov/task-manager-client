import configureMockStore from 'redux-mock-store';
import {thunk} from "redux-thunk";
import {loginUser} from "../features/auth/authOperations";
import apiMock from "../setupTests";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Auth Thunk Actions', () => {
    let store;

    beforeEach(() => {
        // Reset the store's state before each test
        store = mockStore({user: null, token: null, status: 'idle', error: null});
        apiMock.reset();
    });

    it('dispatches loginUser and updates state on success', async () => {
        const mockUser = {username: 'test', token: 'fake-token'};
        apiMock.onPost('/auth/login').reply(200, mockUser);

        await store.dispatch(loginUser({username: 'test', password: 'password'}));

        const actions = store.getActions();
        expect(actions[0].type).toBe('auth/login/pending');
        expect(actions[1].type).toBe('auth/login/fulfilled');
        expect(actions[1].payload).toEqual(mockUser);
    });

    it('dispatches loginUser and handles rejection', async () => {
        apiMock.onPost('/auth/login').networkError();

        await store.dispatch(loginUser({username: 'test', password: 'password'}));

        const actions = store.getActions();
        expect(actions[0].type).toBe('auth/login/pending');
        expect(actions[1].type).toBe('auth/login/rejected');
    });
});
