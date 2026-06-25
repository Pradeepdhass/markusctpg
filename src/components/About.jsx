import React from 'react';

const About = () => {
    return (
        <section id="about" className="about-section reveal">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <h2 className="section-title mt-3">Mark Us – 26</h2>

                        <p className="about-intro">
                            Mark Us – 26 is an <strong>Intra-Department One-Day Symposium</strong> organized by the
                            <strong>Department of Computer Technology (PG)</strong>. The event is designed to bring
                            together students to explore technology, innovation, and collaboration through
                            competitive and interactive events.
                        </p>

                    </div>
                </div>

                <div className="row mt-5 g-4">
                    <div className="col-md-6">
                        <div className="about-card">
                            <h4>🎯 Purpose</h4>
                            <p>
                                The symposium aims to encourage students to apply their technical knowledge,
                                improve problem-solving skills, and gain real-world exposure beyond classroom learning.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="about-card">
                            <h4>💡 What to Expect</h4>
                            <p>
                                Participants can engage in technical events, fun challenges, and knowledge-sharing
                                activities that promote creativity, teamwork, and healthy competition.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="about-card">
                            <h4>👥 Who Can Participate</h4>
                            <p>
                                This event is exclusively organized for students of the Department of Computer Technology,
                                providing a platform to showcase skills and learn from peers.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="about-card">
                            <h4>🚀 Why Mark Us – 26</h4>
                            <p>
                                Mark Us – 26 is more than an event. It’s an opportunity to learn, connect, compete,
                                and leave a mark through innovation and collaboration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
