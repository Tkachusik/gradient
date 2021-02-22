import { clickAdd, resetStatus, deleteGradient, clickEdit } from './actions';

describe("Test actions.js", () => {
    test("Should dispatch CLICK_ADD action", () => {
        const item = { colorLeft: "#222", colorRight: "#333"};
        expect(clickAdd(item)).toStrictEqual({ type: "CLICK_ADD", item });
    });

    test("Should dispatch RESET_STATUS action", () => {
        expect(resetStatus()).toStrictEqual({ type: "RESET_STATUS" });
    });

    test("Should dispatch DELETE_GRADIENT action", () => {
        expect(deleteGradient(1)).toStrictEqual({ type: "DELETE_GRADIENT", id: 1 });
    });

    test("Should dispatch CLICK_EDIT action", () => {
        const item = { colorLeft: "#222", colorRight: "#333"};
        const id = 1;
        expect(clickEdit(id, item)).toStrictEqual({ type: "CLICK_EDIT", id, item });
    });
});