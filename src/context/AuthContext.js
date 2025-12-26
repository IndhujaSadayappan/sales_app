import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginState = async () => {
      try {
        const value = await AsyncStorage.getItem('isLoggedIn');
        if (value === 'true') {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error reading auth state:', error);
      } finally {
        setIsLoading(false);
      }
    };
    checkLoginState();
  }, []);

  const login = async () => {
    try {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      console.log('Login success - state updated');
    } catch (error) {
      console.error('Login storage error:', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      console.log('Logout success');
    } catch (error) {
      console.error('Logout storage error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);