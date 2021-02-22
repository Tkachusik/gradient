import React from 'react';
import renderer from 'react-test-renderer';
import Item from './item';
import { BrowserRouter as Router } from 'react-router-dom';

describe("Test item component", () => {
    test("Should render component", () => {
        const item = { colorLeft: "#333", colorRight: "#222" };
        const component = renderer.create(<Router><Item id="1" item={item} deleteGradient={() => {}} /></Router>);
        let tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});