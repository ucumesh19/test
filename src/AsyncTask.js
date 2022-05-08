import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Button } from 'react-native'

const AsyncTask = () => {
    const [data, setData] = useState('')

    useEffect(() => {
        console.log('Effect is called')
    }, [])
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

export default AsyncTask
