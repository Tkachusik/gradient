import React from 'react';
import App from './app';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

jest.mock('./home', () => {
    return function MockHome() {
        return (<div>HomePageMock</div>);
    }
});
jest.mock('./new', () => {
    return function MockNew() {
        return (<div>NewPageMock</div>);
    }
});
jest.mock('./edit', () => {
    return function MockEdit() {
        return (<div>EditPageMock</div>);
    }
});

describe("Test index.js and routing", () => {
    test("Should render default route", () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByText("HomePageMock")).toBeInTheDocument();
    });

    test("Should render new route", () => {
        render(
            <MemoryRouter initialEntries={['/new']}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByText("NewPageMock")).toBeInTheDocument();
    });

    test("Should render edit route", () => {
        render(
            <MemoryRouter initialEntries={['/edit/1']}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByText("EditPageMock")).toBeInTheDocument();
    });
});