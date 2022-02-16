import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
    test("after creation p should be displayed", () => {
        const component = create(<ProfileStatus status="New status test" />);
        const root = component.root;
        const paragraph = root.findByType("p");
        expect(paragraph).not.toBeNull();
    });

    test("after creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="New status test" />);
        const root = component.root;
        expect(() => {
            root.findByType("input");
        }).toThrow();
    });

    test("after creation p should contains correct status", () => {
        const component = create(<ProfileStatus status="New status test" />);
        const root = component.root;
        const paragraph = root.findByType("p");
        expect(paragraph.children[0]).toBe("New status test");
    });

    test("input should be displayed in edit mode instead of p", () => {
        const component = create(<ProfileStatus status="New status test" />);
        const root = component.root;
        const paragraph = root.findByType("p");
        paragraph.props.onDoubleClick();
        const input = root.findByType("input");

        expect(input.props.value).toBe("New status test");
    });
});
