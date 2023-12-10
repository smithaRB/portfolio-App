import { useRef } from 'react';
import './Portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: 'React Commerce',
        img: 'https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=1508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A tenetur libero debitis minima repudiandae. Doloribus ducimus, mollitia unde animi asperiores autem. Laboriosam cumque quam repellat?",
    },
    {
        id: 2,
        title: 'Next.Js ',
        img: 'https://images.unsplash.com/photo-1590649804407-daf662463c08?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A tenetur libero debitis minima repudiandae. Doloribus ducimus, mollitia unde animi asperiores autem. Laboriosam cumque quam repellat?",
    },
    {
        id: 3,
        title: 'vanilla Js App',
        img: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A tenetur libero debitis minima repudiandae. Doloribus ducimus, mollitia unde animi asperiores autem. Laboriosam cumque quam repellat?",
    },
    {
        id: 4,
        title: 'Music App',
        img: 'https://images.unsplash.com/photo-1682685797208-c741d58c2eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MjJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A tenetur libero debitis minima repudiandae. Doloribus ducimus, mollitia unde animi asperiores autem. Laboriosam cumque quam repellat?",
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )

    return (
        <section>
            {item.title}
        </section>
    )

};

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start'],
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar">

                </motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio