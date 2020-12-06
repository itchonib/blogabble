import React from 'react'
import {Pane, Avatar, Heading,Text } from 'evergreen-ui'
import './Profile.css'

const Profiles = () => {
    return (
        <main className="profile-container">
        <Pane
        width="80%"
        border="default"
        display="flex"
        alignItems="center">
        <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
            name="Alan Turing"
            size={140}
        />
        <section className="profile-info">
        <Heading size={600} marginBottom={10} > FIRST NAME LAST NAME</Heading>
        <Text> My name is someone and I like to write about whatever </Text>
        </section>
        </Pane>
        <Pane
        width="80%"
        border="default">
            <Heading size={400} marginBottom={10} > Checkout their posts </Heading>
            <div> POSTS HERE</div>
        </Pane>
        </main>
    )
}

export default Profiles
