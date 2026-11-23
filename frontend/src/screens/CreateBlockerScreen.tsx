import React, { useState } from 'react';
import { ActivityIndicator, Button, Text, TextInput, View } from 'react-native';
import { createBlocker } from '../api/blockers';

export default function CreateBlockerScreen({ onBack, onCreated }: { onBack: () => void; onCreated: (id: number) => void }) {
  const [developer, setDeveloper] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  async function submit() {
    if (!developer.trim() || !title.trim() || !description.trim()) { setError('All fields are required.'); return; }
    setLoading(true); setError('');
    try { const created = await createBlocker({ developer: developer.trim(), title: title.trim(), description: description.trim() }); onCreated(created.id); }
    catch (e) { setError(e instanceof Error ? e.message : 'Unable to create blocker'); }
    finally { setLoading(false); }
  }
  const inputStyle = { borderWidth: 1, padding: 8, marginVertical: 6 };
  return <View><Text style={{ fontSize: 24 }}>Create blocker</Text>
    <TextInput accessibilityLabel="Developer" placeholder="Developer" value={developer} onChangeText={setDeveloper} style={inputStyle} />
    <TextInput accessibilityLabel="Title" placeholder="Title" value={title} onChangeText={setTitle} style={inputStyle} />
    <TextInput accessibilityLabel="Description" placeholder="Description" value={description} onChangeText={setDescription} multiline style={inputStyle} />
    {!!error && <Text accessibilityRole="alert">{error}</Text>}
    {loading && <ActivityIndicator />}
    <Button title="Submit" onPress={() => void submit()} disabled={loading} /><Button title="Back" onPress={onBack} disabled={loading} />
  </View>;
}
