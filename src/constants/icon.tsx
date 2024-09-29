import React from "react";
import { Feather } from '@expo/vector-icons';

export const icon = {
    index: (props) => (
        <Feather name="home" color={'#F5F5F5'} size={24} {...props} />
    ),
    user: (props) => (
        <Feather name="user" color={'#F5F5F5'} size={24} {...props}/>
    ),
    log: (props) => (
        <Feather name="calendar" color={'#F5F5F5'} size={24} {...props}/>
    ),
};