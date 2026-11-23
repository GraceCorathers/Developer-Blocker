import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Button, ScrollView, Text } from 'react-native';
import { Blocker, getBlocker, Status, updateStatus } from '../api/blockers';

export default function BlockerDetailScreen({ id, onBack }: { id: number; onBack: () => void }) {
  const [blocker, setBlocker] = useState<Blocker | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const load = useCallback(async () => {
    setLoading(true); setError('');
    try { setBlocker(await getBlocker(id)); }
    catch (e) { setError(e instanceof Error ? e.message : 'Unable to load blocker'); }
    finally { setLoading(false); }
  }, [id]);
  useEffect(() => { void load(); }, [load]);
  async function changeStatus(status: Status) {
    setLoading(true); setError('');
    try { setBlocker(await updateStatus(id, status)); }
    catch (e) { setError(e instanceof Error ? e.message : 'Unable to update status'); }
    finally { setLoading(false); }
  }
  return <ScrollView><Text style={{ fontSize: 24 }}>Blocker details</Text>
    {loading && <ActivityIndicator />}
    {!!error && <Text accessibilityRole="alert">{error}</Text>}
    {blocker && <><Text>ID: {blocker.id}</Text><Text>Developer: {blocker.developer}</Text><Text>Title: {blocker.title}</Text><Text>Description: {blocker.description}</Text><Text>Status: {blocker.status}</Text>
      {(['open', 'in_progress', 'resolved'] as Status[]).map(status => <Button key={status} title={`Set ${status}`} onPress={() => void changeStatus(status)} disabled={loading || status === blocker.status} />)}</>}
    {!blocker && !loading && <Button title="Retry" onPress={() => void load()} />}
    <Button title="Back to list" onPress={onBack} />
  </ScrollView>;
}
