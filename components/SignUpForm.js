import * as React from 'react';
import {Button,Text,
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

    // Laver et async kald ved SignUp submit
    handleSubmit = async () => {
        const { email, password } = this.state;
        try {
            this.startLoading();
            this.clearError();
            const result = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            console.log(result);
            this.endLoading();
            this.setState({ isCompleted: true });
        } catch (error) {
            // Vi sender `message` feltet fra den error der modtages, videre.
            this.setError(error.message);
            this.endLoading();
        }
    };

    render = () => {
        const { errorMessage, email, password, isCompleted } = this.state;
        if (isCompleted) {
            return <Text>You are now signed up</Text>;
        }
        return (
            <View>
                <Text style={styles.header}>Opret en profil her</Text>
                <TextInput
                    placeholder="email"
                    value={email}
                    onChangeText={this.handleChangeEmail}
                    style={styles.inputField}
                />
                <TextInput
                    placeholder="password"
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

    // Knap der håndtere handleSubmit kaldet
    renderButton = () => {
        const { isLoading } = this.state;
        if (isLoading) {
            return <ActivityIndicator />;
        }
        return <Button onPress={this.handleSubmit} title="Opret bruger" />;
    };
}

// Styling
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
});