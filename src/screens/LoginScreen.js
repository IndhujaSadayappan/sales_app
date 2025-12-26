import { useState } from 'react';
import { Image } from 'react-native';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useAuth } from '../context/AuthContext';
import { isValidEmail, isValidPassword } from '../utils/validation';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { login } = useAuth();

  // Validate using fresh/current values (avoids stale state)
  const validate = (currentEmail = email, currentPassword = password) => {
    let isValid = true;

    // Email
    const trimmed = currentEmail.trim();
    if (trimmed === '') {
      setEmailError('Email is required');
      isValid = false;
    } else if (!isValidEmail(trimmed)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Password
    if (currentPassword.length === 0) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (currentPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    validate(text, password);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    validate(email, text);
  };

  const handleLogin = () => {
    if (validate()) {
      login();
    }
  };

  const isButtonDisabled =
    email.trim() === '' ||
    !!emailError ||
    !!passwordError;

  return (
    <View style={styles.container}>
      <Image
        source={require('F:\\sales_app\\assets\\login_image.png')} 
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome back!</Text>

      <TextInput
        style={[styles.input, emailError ? styles.inputError : null]}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="email"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <View style={[styles.passwordContainer, passwordError ? styles.inputError : null]}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#999"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          autoComplete="password"
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color="#999"
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.loginButton, isButtonDisabled && styles.loginButtonDisabled]}
        onPress={handleLogin}
        disabled={isButtonDisabled}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => console.log('Go to Signup')}>
          <Text style={styles.signupLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },

  logo: {
    width: 250,
    height: 120,
    alignSelf: 'center',
    marginBottom: 24,
  },

  title: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },

  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    backgroundColor: 'white',
    fontSize: 16,
    color: '#000',
  },

  inputError: {
    borderColor: '#ff3b30',
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    backgroundColor: 'white',
    marginBottom: 8,
  },

  passwordInput: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    color: '#000',
  },

  eyeIcon: {
    paddingHorizontal: 14,
  },

  errorText: {
    color: '#ff3b30',
    fontSize: 13,
    marginBottom: 12,
    marginLeft: 4,
  },

  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
    marginTop: 8,
  },

  forgotPasswordText: {
    color: '#000',
    fontSize: 14,
  },

  loginButton: {
    backgroundColor: '#0066FF',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    marginBottom: 20,
  },

  loginButtonDisabled: {
    backgroundColor: '#99C2FF',
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 120,
  },

  signupText: {
    color: '#6B7280',
    fontSize: 14,
  },

  signupLink: {
    color: '#000',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default LoginScreen;