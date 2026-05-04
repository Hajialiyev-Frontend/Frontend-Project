import './About.css'

function About() {
    return (
        <main className="about-section">
            <div className="about-container">

                <div className="text-content">
                    <h1>CLOTHING STORE</h1>
                    <p>
                        As Clothing Store, our mission is to make fashion affordable and quality for everyone. For us,
                        fashion is the intersection of comfort and quality.
                        Each of our collections is specially selected to add color to your everyday life.
                    </p>
                </div>

                <div className="image-content">
                    <img
                        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
                        alt="About Us"
                    />
                </div>

            </div>
        </main>
    );
};

export default About;