import React from 'react';
import { Pressable, Text } from 'react-native';
import { Blocker } from '../api/blockers';

export default function BlockerCard({ blocker, onPress }: { blocker: Blocker; onPress: () => void }) {
  return <Pressable onPress={onPress} style={{ padding: 12, borderWidth: 1, marginVertical: 4 }}>
    <Text>{blocker.title}</Text><Text>Developer: {blocker.developer}</Text><Text>Status: {blocker.status}</Text>
  </Pressable>;
}
