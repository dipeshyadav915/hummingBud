import React from 'react';

export default function About() {
  return (
    <>
      <div className="pink_box">
        <div className="sm-box">
          <span className="font-extrabold text-3xl font-sans">" </span>
          Fueling startup growth
          <span className="font-extrabold text-3xl font-sans"> "</span>
        </div>

        <div className="heading">Welcome to Hummingbud</div>
        <div className="box-text">
          {' '}
          Your go-to resource for everything startups
        </div>
      </div>
      <div className="text-xl mx-16 my-9">
        <p className="text-center">
          <span className="text-primary font-bold text-2xl ">HummingBud</span>{' '}
          is here to empower startups and entrepreneurs by providing the tools,
          insights, and community support needed to succeed. We believe that
          with the right resources and a strong network, every entrepreneur can
          overcome challenges, scale their business, and bring their innovative
          ideas to life. Whether you're just starting out or looking to grow,
          Hummingbud is your partner in building a successful startup.
        </p>
        <div className="my-12 mx-32 flex flex-rows-2 gap-8">
          <div className="w-full text-center flex flex-rows-2 gap-14">
            <div className="startup_box w-1/2 pb-10">
              <i className="fa-solid fa-mountain-sun text-primary text-8xl p-6 drop-shadow-lg"></i>
              <p className="text-2xl font-semibold py-3">Our Mission</p>
              <p className="mx-24">
                At Hummingbud, we empower startups by providing the tools,
                resources, and insights needed to turn ideas into successful
                businesses. We aim to support entrepreneurs through expert
                advice, practical solutions, and a thriving community. Our goal
                is to help startups overcome challenges and scale sustainably.
              </p>
            </div>
            <div className="startup_box w-1/2 pb-10">
              <i className="fa-solid fa-eye text-primary text-8xl p-6 drop-shadow-lg"></i>
              <p className="text-2xl font-semibold py-3 ">Our vision </p>
              <p className="mx-24">
                We envision a world where every entrepreneur has the resources
                and support to build impactful businesses. Hummingbud strives to
                be the leading platform for startup growth and innovation. Our
                vision is to foster a global community of founders who drive
                positive change through entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xl text-center px-32 py-5">
        Our mission is to empower entrepreneurs with the insights, tools, and
        inspiration they need to build successful businesses. From understanding
        market trends and securing funding, to growing your team and mastering
        digital marketing, Hummingbud covers the critical aspects of startup
        life.
      </div>
      <div className="text-center text-xl p-5">
        Join{' '}
        <span className="text-2xl font-semibold text-primary ">HummingBud</span>{' '}
        and start building your startup with the right support today
        <span className="text-4xl font-sans">!</span>
      </div>
    </>
  );
}
