import { Image, StyleSheet, Platform, Text, View, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import './App.css'; // Para os estilos
import { useRouter } from 'expo-router';

export default function HomePage() {
  const router = useRouter();
  return (
    <div className="container">
      <header className="header">
        <h1>Bem-vindo!</h1>
        <p className="welcome">Faça login na sua conta para continuar</p>
      </header>

      <div className="actions">
        <button className="action-button" onClick={() => {router.replace('/login');}}>
          Entrar
        </button>
        <button className="action-button" onClick={() => {router.replace('/cadastro');}}>
          Cadastrar-se
        </button>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Nosso App. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
