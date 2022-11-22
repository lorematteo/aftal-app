import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
import { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";

import { width, height, COLORS, Android } from '../../utils/constants';
import { handleSignUp, handleSignIn } from '../../utils/firebase';

export default function SignScreen(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [eyestate, setEyestate] = useState(true);
    const [mailselected, setMailselected] = useState(true);

    return (
        <SafeAreaView style={[styles.container, Android.SafeArea]}>

            <View>
                <Text style={{
                    fontSize: 23,
                    color: COLORS.primary,
                    fontWeight: "bold",
                    paddingTop: (width/100)*8,
                }}>Welcome Back 👋</Text>
                <Text style={{
                    paddingTop: (width/100)*4,
                    fontSize: 14,
                    color: "black",
                }}>We happy to see you again. To use your account, you should log in first.</Text>
            </View>

            <View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => {setMailselected(true)}} style={mailselected ? styles.buttonSelected : styles.button}>
                        <Text>Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setMailselected(false)}} style={mailselected ? styles.button : styles.buttonSelected}>
                        <Text>Phone number</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputPanel}>
                    <View style={styles.inputContainer}>
                        <TextInput autoCorrect={false} placeholder="Email" value={email} onChangeText={text => setEmail(text)} style={styles.input}/>
                        <TouchableOpacity onPress={() => setEmail("")} style={{paddingLeft: 0,}}>
                            <Ionicons style={styles.iconcroix} color={COLORS.gray} name="close-circle-outline" size={width>380 ? 25 : 23}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput autoCorrect={false} placeholder="Password" value={password} onChangeText={text => setPassword(text)} style={styles.input} secureTextEntry={eyestate}/>
                        <TouchableOpacity onPress={() => setEyestate(!eyestate)} style={styles.iconcroix}>
                            <Ionicons color={COLORS.gray} name={eyestate ? "eye-off-outline" : "eye-outline"} size={width>380 ? 25 : 23}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'flex-end', paddingRight: 20, paddingTop: 10,}}>
                        <TouchableOpacity onPress={() => {}}>
                            <Text style={{right: 0,}}>Forgot Password?</Text>
                        </TouchableOpacity>         
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={() => {handleSignIn(email, password)}}>
                <Text style={{color: "white"}}>Login</Text>
            </TouchableOpacity>   
            
            <View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <View style={{flex: 1, height: 1, backgroundColor: COLORS.gray, opacity: 0.3}}/>
                    <Text style={{color: COLORS.gray, marginHorizontal: 10}}>Sign in with Google or Facebook</Text>
                    <View style={{flex: 1, height: 1, backgroundColor: COLORS.gray, opacity: 0.3}}/>
                </View>

                <View style={{flexDirection: "row", paddingVertical: 20}}>
                    <TouchableOpacity style={[styles.socialButton, {marginRight: 5}]}>
                        <Image source={require("../../assets/facebook.png")} style={{width: 25, height: 25, marginRight: 10}}/>
                        <Text style={{color: COLORS.gray}}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialButton, {marginLeft: 5}]}>
                        <Image source={require("../../assets/google.png")} style={{width: 25, height: 25, marginRight: 10}}/>
                        <Text style={{color: COLORS.gray}}>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row", justifyContent: "center"}}>
                    <Text style={{color: COLORS.gray}}>Don't have an account ?</Text>
                    <TouchableOpacity>
                        <Text style={{color: COLORS.primary, fontWeight: "bold"}}>Sign up</Text>
                    </TouchableOpacity>
                </View>

            </View>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        margin: 20,
        justifyContent: "space-between",
    },
    buttonContainer: {
        backgroundColor: "#F3F6FF",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 15,
        marginVertical: 30,
    },
    button: {
        width: width*0.4,
        height: width*0.12,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 10
    },
    buttonSelected: {
        backgroundColor: "#FFFFFF",
        width: width*0.4,
        height: width*0.12,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 10
    },
    inputContainer: {
        backgroundColor: "#F3F6FF",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
    },
    input: {
        paddingVertical: 15,
        paddingRight: 20,
        width: width*0.8,
        paddingLeft: 20,
    },
    loginButton: {
        height: height*0.07,
        backgroundColor: COLORS.primary,
        fontSize: 14,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 25,
    },
    socialButton: {
        flex: 1,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 15,
        padding: width*0.05,
        alignItems: "center",
        justifyContent: "center",
    }
});