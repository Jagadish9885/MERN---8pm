
import Banner from './components/Banner'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import Course from './components/Course'
import Navbar from './components/NavBar';

function App() {
  
  const courses = [
  {
    courseName: "React Fundamentals",
    price: 4999,
    trainer: "Anita Sharma",
    duration: "4 weeks",
    description: "Learn the basics of React including components, props, and state management."
  },
  {
    courseName: "Advanced JavaScript",
    price: 5999,
    trainer: "Ravi Kumar",
    duration: "5 weeks",
    description: "Deep dive into closures, prototypes, async programming, and ES6+ features."
  },
  {
    courseName: "Full-Stack Web Development",
    price: 9999,
    trainer: "Meera Joshi",
    duration: "8 weeks",
    description: "Build complete web apps using MERN stack with deployment strategies."
  },
  {
    courseName: "UI/UX Design Essentials",
    price: 4499,
    trainer: "Siddharth Rao",
    duration: "3 weeks",
    description: "Master design principles, wireframing, and prototyping using Figma."
  },
  {
    courseName: "Python for Beginners",
    price: 3999,
    trainer: "Priya Desai",
    duration: "4 weeks",
    description: "Start coding with Python and explore data types, loops, and functions."
  },
  {
    courseName: "Data Structures & Algorithms",
    price: 6999,
    trainer: "Arjun Patel",
    duration: "6 weeks",
    description: "Strengthen your problem-solving skills with DSA fundamentals and coding practice."
  },
  {
    courseName: "DevOps with AWS",
    price: 8499,
    trainer: "Neha Verma",
    duration: "6 weeks",
    description: "Learn CI/CD pipelines, Docker, Kubernetes, and AWS deployment."
  },
  {
    courseName: "Machine Learning Basics",
    price: 7999,
    trainer: "Dr. Karan Mehta",
    duration: "7 weeks",
    description: "Understand ML algorithms, model training, and evaluation using Python."
  },
  {
    courseName: "Cybersecurity Foundations",
    price: 5999,
    trainer: "Ritika Singh",
    duration: "5 weeks",
    description: "Explore network security, encryption, and ethical hacking fundamentals."
  },
  {
    courseName: "Mobile App Development with Flutter",
    price: 7499,
    trainer: "Aakash Jain",
    duration: "6 weeks",
    description: "Build cross-platform mobile apps using Dart and Flutter framework."
  },
  {
    courseName: "Cloud Computing with Azure",
    price: 8999,
    trainer: "Tanvi Agarwal",
    duration: "6 weeks",
    description: "Get hands-on with Azure services, virtual machines, and cloud architecture."
  },
  {
    courseName: "SQL & Database Design",
    price: 4999,
    trainer: "Manoj Reddy",
    duration: "4 weeks",
    description: "Learn relational databases, SQL queries, and normalization techniques."
  },
  {
    courseName: "Git & GitHub Mastery",
    price: 2999,
    trainer: "Sneha Kapoor",
    duration: "2 weeks",
    description: "Master version control workflows, branching, and collaboration on GitHub."
  },
  {
    courseName: "Bootstrap 5 & Responsive Design",
    price: 3499,
    trainer: "Rahul Nair",
    duration: "3 weeks",
    description: "Create responsive websites using Bootstrap 5 utility classes and grid system."
  },
  {
    courseName: "Next.js for Production",
    price: 6499,
    trainer: "Divya Menon",
    duration: "5 weeks",
    description: "Build fast, SEO-friendly web apps with server-side rendering and API routes."
  }
];

  return (
    <>
      <div className='border border-2 border-danger p-2 m-2'>
       <Navbar></Navbar>
       <Banner></Banner>
       <Feedback></Feedback>
       <div className='d-flex flex-wrap'>
        {/* <Course price={20000} trainer={"Praveen"} duration={20} >React JS</Course>
       <Course price={20000} trainer={"Meghana"} duration={20} >Angular JS</Course>
       <Course price={20000} trainer={"Sethu Madhav"} duration={20} >JavaScript</Course>
       <Course price={20000} trainer={"Jagadish"} duration={20} >Node JS</Course>
       <Course price={20000} trainer={"Ramya"} duration={20} >Express JS</Course>
       <Course price={20000} trainer={"Praveen"} duration={20} >Mongo DB</Course> */}
      {
        courses.map((cs)=>{
          return <Course price={cs.price} trainer={cs.trainer} duration={cs.duration} desc={cs.description}>{cs.courseName}</Course>
        })
      }
       
      </div>
       </div>
    </>
  )
}

export default App
