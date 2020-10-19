import * as React from 'react';
import {
    Button,
    Text,
    View,
    TextInput,
    ActivityIndicator,
    StyleSheet,
    Alert,
} from 'react-native';
import firebase from 'firebase';

export default class SignUpForm extends React.Component {
    state = {
        email: '',
        password: '',
        isLoading: false,
        isCompleted: false,
        errorMessage: null,
    };

    startLoading = () => this.setState({ isLoading: true });
    endLoading = () => this.setState({ isLoading: false });
    setError = errorMessage => this.setState({ errorMessage });
    clearError = () => this.setState({ errorMessage: null });

    handleChangeEmail = email => this.setState({ email });
    handleChangePassword = password => this.setState({ password });

    // Laver et async kald ved login submit
    handleSubmit = async () => {
        const { email, password } = this.state;
        try {
            this.startLoading();
            this.clearError();
            const result = await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log(result);
            this.endLoading();
            this.setState({ isCompleted: true });
        } catch (error) {
            this.setError(error.message);
            this.endLoading();
        }
    };

    render = () => {
        const { errorMessage, email, password, isCompleted } = this.state;
        if (isCompleted) {
            return <Text>Du er nu logget ind</Text>;
        }
        return (
            <View>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={this.handleChangeEmail}
                    style={styles.inputField}
                />
                <TextInput
                    placeholder="Adgangskode"
                    value={password}
                    onChangeText={this.handleChangePassword}
                    secureTextEntry
                    style={styles.inputField}
                />
                {errorMessage && (
                    <Text style={styles.error}>Error: {errorMessage}</Text>
                )}
                {this.renderButton()}
            </View>
        );
    };

    // knap til håndtering af handleSumbit
    renderButton = () => {
        const { isLoading } = this.state;
        if (isLoading) {
            return <ActivityIndicator />;
        }
        return <Button onPress={this.handleSubmit} title="Log ind" style={styles.button} />;
    };
}

// styling
const styles = StyleSheet.create({
    error: {
        color: 'red',
        padding: 5,
        margin: 5,
    },
    inputField: {
        borderWidth: 2,
        borderColor: '#333399',
        margin: 10,
        padding: 10,
    },
    header: {
        fontSize: 20,
        color: '#333399',
        padding: 1,
        margin: 1,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#333399',
        borderRadius: 25
    }
});
