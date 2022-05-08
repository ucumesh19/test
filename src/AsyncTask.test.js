import React from "react";
import { create } from 'react-test-renderer';
import AsyncTask from "./AsyncTask";

const tree = create(<AsyncTask />);

jest.runAllTimers();

test('snapshot', () => {
    expect(tree).toMatchSnapshot();
})
