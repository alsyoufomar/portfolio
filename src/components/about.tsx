import '../styles/about.css'
export const About = () => {
  return (
    <div className='about'>
      <div className='about__info'>
        <div>
          <h2>Bio</h2>
          <p>
            Bio I am a Full-Stack Software Developer that has just recently
            graduated from a six-month Software Engineering academy with a
            particular interest in making things simple.
            <br />I have experience creating full-stack applications using
            React, Node.js and PostgreSQL stack. I try to keep up with security
            and best practices and I am always looking for new things to learn
            as I like to keep myself busy on a daily basis.
          </p>
        </div>
        <div>
          <h2>Skills</h2>
          <p>
            JavaScript / ReactJS / TypeScipt / NodeJS / Express / Redux / HTML /
            CSS / SQL / Prisma / Git / Agile / TDD / OOP / VScode
          </p>
        </div>
        <div>
          <h2>Education</h2>
          <p>
            Bachelor Mathematics
            <br />
            Certificate in Web Developement
          </p>
        </div>
      </div>
    </div>
  )
}
