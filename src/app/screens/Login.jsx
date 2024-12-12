import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { hp, wp } from "../../utils/common";
import { theme } from "../../utils/theme";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { Input } from "../../components/input";
import Icon from "../../assets/icons/index";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View>
          <Text style={styles.welcomeText}>Hey,</Text>
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>
        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Please Login to Continue
          </Text>
          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            placeholder="Enter Your Email"
            onChangeText={(value) => (emailReF.current = value)}
          />
          <Input
            icon={<Icon name="SquareLock" size={26} strokeWidth={1.6} />}
            secureTextEntry
            placeholder="Enter Your Password"
            onChangeText={(value) => (passwordRef.current = value)}
          />
        </View>
        <Text style={styles.forgotPassword}>Forgot Passowrd ?</Text>
        <Pressable
          style={styles.loginButton}
          onPress={() => {
            console.log("Login button pressed!");
          }}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </Pressable>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Dont't have account ?</Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text
              style={[
                styles.footerText,
                {
                  color: theme.colors.primaryDark,
                  fontWeight: theme.fonts.semibold,
                },
              ]}
            >
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
  loginButton: {
    backgroundColor: theme.colors.primaryDark,
    paddingVertical: hp(1.5),
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "white",
    fontSize: hp(2),
    fontWeight: theme.fonts.semibold,
  },
});
