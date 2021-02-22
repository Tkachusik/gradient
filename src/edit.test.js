import React from 'react';
import { render, screen } from "@testing-library/react";
import Edit from './edit';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

describe("Test edit component", () => {
    test("Should render component", () => {
        const initialState = {
            items: [{ colorLeft: "#333", colorRight: "#222" }],
        };
        const store = createStore(reducer, initialState);
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/edit/0']}>
                    <Switch>
                        <Route path="/edit/:id" component={Edit} />
                    </Switch>
                </MemoryRouter>
            </Provider>
        );

        expect(screen).toMatchSnapshot();
    });
});