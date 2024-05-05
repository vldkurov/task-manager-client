import authReducer from '../features/auth/authSlice';

describe('authReducer', () => {
    const initialState = {user: null, token: null, status: 'idle', error: null};

    it('handles login success', async () => {
        const action = {type: 'auth/login/fulfilled', payload: {user: 'test', token: 'fake-token'}};
        const state = authReducer(initialState, action);
        expect(state).toEqual({user: 'test', token: 'fake-token', status: 'succeeded', error: null});
    });

    it('handles login failure', async () => {
        const action = {type: 'auth/login/rejected', payload: {error: 'Login failed'}};
        const state = authReducer(initialState, action);
        expect(state.status).toEqual('failed');
        expect(state.error.error).toEqual('Login failed');
    });
});
