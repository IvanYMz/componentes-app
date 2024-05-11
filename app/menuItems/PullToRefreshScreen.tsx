import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, RefreshControl, ScrollView, Image } from 'react-native';
import Header from '../../components/Header';

interface DogImage {
    url: string;
}

export default function PullToRefreshScreen() {
    const [refreshing, setRefreshing] = useState(false);
    const [dogImage, setDogImage] = useState('');

    useEffect(() => {
        onRefresh();
    }, []);

    const fetchDogImage = useCallback(async () => {
        try {
            setRefreshing(true);
            const response = await fetch('https://random.dog/woof.json');
            const data: DogImage = await response.json();
            if (data.url.endsWith('.mp4')) {
                setDogImage('');
                onRefresh();
            } else {
                setDogImage(data.url);
            }
        } catch (error) {
            console.error('Error fetching dog images:', error);
        } finally {
            setRefreshing(false);
        }
    }, []);

    const onRefresh = useCallback(() => {
        fetchDogImage();
    }, []);

    return (
        <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <Header headerTitle='Pull to refresh' safe goBack />
            <View style={styles.imageContainer}>
                {dogImage ? (
                    <Image source={{ uri: dogImage }} style={styles.image} />
                ) : (
                    <Text>Loading...</Text>
                )}
                <Text style={styles.textStyle}>Pull down to get another random dog image</Text>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 350,
        height: 350,
        borderRadius: 4,
    },
    textStyle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    imageContainer: {
        flex: 1,
        gap: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
