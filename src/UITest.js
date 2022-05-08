import React, { useState } from 'react';
import { SafeAreaView, Text, Button } from 'react-native'

const UITest = () => {
    const [data, setData] = useState('')
    return (
        <SafeAreaView>
            <Text testID='myText' >{data}</Text>
            <Button
                testID='myButton'
                onPress={() => setData("button pressed")}
                title={'Press Me'}
            />
        </SafeAreaView>
    )
}

export default UITest;