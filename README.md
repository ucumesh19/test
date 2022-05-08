##test

install yarn add --dev jest to add types
run yarn test for to run all test suites
By Default an App-test.js file has been made and you can test it as well by running yarn test on terminal
You will get the output like this in your terminal
##########################################
->  PASS  __tests__/App-test.js (5.735 s)
  ✓ renders correctly (3997 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        5.783 s
Ran all test suites.
✨  Done in 7.03s.
##########################################

(Sum.js)
We then test for a function
-> We can make our customised test case file by adding suffix,either
  ->.test.js
  ->.spec.js

=> test('something', () => {
    expect('somethig').toBe(expectedResult);
});
Here we pass the function sum in expect function and then pass our desired output in toBe() and then run yarn test and we will get to know about the functionality of our function sum and about other test cases as well.

=> MOCK: It is used when we have to mock external dependencies or ignore some function,component and any other data from testing like testing a component that makes actual API calls , our test will be slow.

we have to use mock at the test.js file ad mention the component name there to mock that particular thing

jest.mock('componentPath')

=> UI Test (UITest.js)
 In this we use snapshots to make sure we don't cause unexpected changes to UI components
    test('snapshot', () => {
    expect('componentReference').toMatchSnapshot();
})
  -> toMatchSnapshot()->It compares the previous and current snapshots,and when there isn't an old component,"Jest" creates a new one

  -> If we make any changes in our component then we will get the error while testing like ths:-
##########################################
    ● snapshot
    expect(received).toMatchSnapshot()
    Snapshot name: `snapshot 1`
    - Snapshot  - 1
    + Received  + 1
    <View
        style={
          Object {
    -       "backgroundColor": "black",
    +       "backgroundColor": "yellow",
          }
        }
      />

      6 |
      7 | test('snapshot', () => {
    > 8 |     expect(tree).toMatchSnapshot();
        |                  ^
      9 | })

      at Object.<anonymous> (src/UITest.test.js:8:18)

 › 1 snapshot failed.
##########################################


 So,if we are making any changes in our Component then we will have to run 'yarn test -u' for testing.


=> State Changes(UiTest.js)
   In this ,we test for the state changes and whether we are getting the correct output or not

  We have to use testID prop for Text and Button ,so that we can look after them from our test cases and identify them easily.
 
  We will use act(()=>button.onPress) function in our test cases to detect the onPress functionality of our Button which we has used in component
     and then with the help of expect() we will test our desired output


 => Async Task(AsyncTask.js)

    If we use Asynchronous ,then by default we will get some error
    For example : If we use useEffect(()=>{},[])
    We will get : ###########
              ●  Cannot log after tests are done. Did you forget to wait for something async in your test?
                Attempted to log "Effect is called".
                ###########

    So, to resolve this:-
    -> we have to make a js file inside our src name jestSetup.js
    and add jest.useFakeTimers(); there
    -> We have to add the path of this jestSetup file inside our package.json under jest 
        "setupFiles": [
      "<rootDir>/src/jestSetup.js"
    ]
    -> and after this we have to set the jest true inside .eslintrc.js
      like this : 
      env: {
            jest: true,
            },
     And then we will add jest.runAllTimers(); in our test file
     Now, we will run yarn add -u     
     ###################
     ● Console
    console.log
      Effect is called
      at src/AsyncTask.js:8:17
      #################  

 => Generate Report
  We can also generate our Test Report, for this we have to add  inside our package.json under jest   
    "coverCoverage":true     

A test report will get generate like this 

  --------------|---------|----------|---------|---------|-------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------|---------|----------|---------|---------|-------------------
All files     |   86.66 |      100 |      75 |   86.66 |                   
 App.js       |     100 |      100 |     100 |     100 |                   
 AsyncTask.js |   83.33 |      100 |   66.66 |   83.33 | 15                
 Random.js    |       0 |      100 |       0 |       0 | 2                 
 Sum.js       |     100 |      100 |     100 |     100 |                   
 UITest.js    |     100 |      100 |     100 |     100 |                   
--------------|---------|----------|---------|---------|-------------------

Test Suites: 4 passed, 4 total
Tests:       5 passed, 5 total
Snapshots:   2 passed, 2 total
Time:        1.507 s, estimated 6 s
Ran all test suites.
✨  Done in 2.37s.  

You can also find the proper report under coverage/Icov-report/index.html