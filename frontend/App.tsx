import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import BlockerListScreen from './src/screens/BlockerListScreen';
import CreateBlockerScreen from './src/screens/CreateBlockerScreen';
import BlockerDetailScreen from './src/screens/BlockerDetailScreen';

type Screen = { name: 'list' } | { name: 'create' } | { name: 'detail'; id: number };
export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'list' });
  const back = () => setScreen({ name: 'list' });
  return <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight || 0 }}>
    <View style={{ flex: 1, padding: 16 }}>
      {screen.name === 'list' && <BlockerListScreen onCreate={() => setScreen({ name: 'create' })} onSelect={id => setScreen({ name: 'detail', id })} />}
      {screen.name === 'create' && <CreateBlockerScreen onBack={back} onCreated={id => setScreen({ name: 'detail', id })} />}
      {screen.name === 'detail' && <BlockerDetailScreen id={screen.id} onBack={back} />}
    </View>
  </SafeAreaView>;
}
