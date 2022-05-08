import React from "react";
import { create, act } from 'react-test-renderer';
import UITest from "./UITest";

const tree = create(<UITest />);

test('snapshot', () => {
    expect(tree).toMatchSnapshot();
})

test('button pressed', () => {
    //press the button
    const button = tree.root.findByProps({ testID: 'myButton' }).props;
    act(() => button.onPress());

    //expect text to equal "button pressed"
    const text = tree.root.findByProps({ testID: 'myText' }).props;
    expect(text.children).toEqual('button pressed')
})