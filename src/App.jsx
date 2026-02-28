import Head from './head/head.jsx'
import Footer from './footer/footer.jsx'
import Navbar from './Layout/navbar.jsx'
import Layout from './Layout/Layout.jsx'
import Objective from './Layout/objective.jsx'
import Education from './Layout/education.jsx'
import Project from './Layout/project.jsx'
import Experience from './Layout/experience.jsx'
import Contact from './Layout/contact.jsx'

export default function App() {
  return (
    <div>
    <Head />
    <Navbar />
    <Layout />
    <Objective />
    <Education />
    <Project />
    <Experience />
    <Contact />
    <Footer />
    </div>
  )
}