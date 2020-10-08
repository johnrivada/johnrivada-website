import React from 'react'
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const About = () => {
    return (
        <Layout>
            <Metadata title="About" description="This is my home page" />
            <h1>About Page </h1>
            <p>This is where I talk about me</p>
        </Layout>
    )
}

export default About