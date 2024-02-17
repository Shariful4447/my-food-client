import backImage from '../../../assets/home/chef-service.jpg'

const About = () => {
    return (
        <section className="mb-10 mx-auto ">
            <div className="hero h-96" style={{backgroundImage: 'url(https://i.ibb.co/DGz4cHV/chef-service.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                        <p className="mb-5 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                        <button className="btn btn-primary">Read More...</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;