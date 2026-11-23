import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, Text, View } from 'react-native';
import { Blocker, listBlockers } from '../api/blockers';
import BlockerCard from '../components/BlockerCard';

export default function BlockerListScreen({ onSelect, onCreate }: { onSelect: (id: number) => void; onCreate: () => void }) {
  const [items, setItems] = useState<Blocker[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const load = useCallback(async () => {
    setLoading(true); setError('');
    try { setItems(await listBlockers()); }
    catch (e) { setError(e instanceof Error ? e.message : 'Unable to load blockers'); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { void load(); }, [load]);
  return <View style={{ flex: 1 }}>
    <Text style={{ fontSize: 24 }}>Blockers</Text>
    <Button title="Create blocker" onPress={onCreate} />
    <Button title="Refresh" onPress={() => void load()} disabled={loading} />
    {loading && <ActivityIndicator />}
    {!!error && <Text accessibilityRole="alert">{error}</Text>}
    <FlatList data={items} keyExtractor={item => String(item.id)} renderItem={({ item }) => <BlockerCard blocker={item} onPress={() => onSelect(item.id)} />} ListEmptyComponent={!loading && !error ? <Text>No blockers found.</Text> : null} />
  </View>;
}
