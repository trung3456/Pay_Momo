import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

function stage_one() {
    return (
        <View style={styles.container}>
            <View style={StyleSheet.header}>
                <View style={styles.text_Box_H}>
                    <Text style={styles.textH}>Xin Chao</Text>
                    <Text style={styles.textH}>Tran Cong Trung</Text>
                    <Text style={styles.textH}>0123456789</Text>
                </View>

                <View style={styles.tInput}>
                    <Image source={require('../../assets/img/lock.jpg')} style={{
                        width: 30,
                        height: 30,
                        marginHorizontal: 10,
                    }} />
                    <TextInput style={{fontSize: 20,
                    fontWeight: 'bold',
                    }}
                    keyboardType='numeric'
                    secureTextEntry={true}
                    placeholder="Nhap SDT cua ban" />
                </View>

                <TouchableOpacity style={{
                    borderWidth: 1,
                    height: 50,
                    marginHorizontal: 20,
                    marginVertical: 10,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#a4145c'
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>Dang nhap</Text>
                </TouchableOpacity>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    marginVertical: 10,
                }}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15,
                        fontWeight: 'bold',  color: '#fff'
                        }}>Quen mat khau</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15,
                        fontWeight: 'bold', color: '#fff'
                        }}>Thoat tai khoan</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ca1863',
        flex: 1,
    },

    text_Box_H: {
        alignItems: 'center',
        marginTop: 40,
    },

    textH: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },

    tInput: {
        alignItems: 'center',
        marginTop: 40,
        borderWidth: 1,
        borderRadius: 15,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
});

export default stage_one;