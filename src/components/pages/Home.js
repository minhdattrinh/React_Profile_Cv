import Profile from '../../components/pages/profile/Profile'
import Contact from '../../components/pages/contact/Contact'
import Skills from '../../components/pages/skills/Skills'
import About from '../../components/pages/about/About'
import Educations from '../../components/pages/educations/Educations'
import Experiences from '../../components/pages/experiences/Experiences'
import Portfolios from '../../components/pages/portfolios/Portfolios'

const Home = () => {
  return (
    <section className="row sameHeight">
        <div className="col s12 m12 l4 light-blue darken-4 sameHeight_child">
            <Profile />
            <Contact />
            <Skills />
        </div>

        <div className="col s12 m12 l8 white sameHeight_child">
            <About />
            <Educations />
            <Experiences />
            <Portfolios />
        </div>
    </section>
  )
};


export default Home;
