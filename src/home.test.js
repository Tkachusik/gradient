import React from 'react';
import renderer from 'react-test-renderer';
import Home from './home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { BrowserRouter as Router } from 'react-router-dom';

describe("Test home component", () => {
    test("Should render component", () => {
        const store = createStore(reducer);
        const component = renderer.create(
            <Provider store={store}>
                <Router>
                    <Home />
                </Router>
            </Provider>
        );
        let tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});