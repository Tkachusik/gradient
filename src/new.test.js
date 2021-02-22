import React from 'react';
import renderer from 'react-test-renderer';
import New from './new';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

describe("Test new component", () => {
    test("Should render component", () => {
        const store = createStore(reducer);
        const component = renderer.create(
            <Provider store={store}>
                <New />
            </Provider>
        );
        let tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});