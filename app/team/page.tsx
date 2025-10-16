import React from 'react';

export default function Team() {
  return (
    <>
      <div className="pink_box">
        <div className="sm-box">
          <span className="font-extrabold text-3xl font-sans">" </span>
          Empowering bold ideas.
          <span className="font-extrabold text-3xl font-sans"> "</span>
        </div>

        <div className="heading">Meet the Minds Behind Hummingbud</div>
        <div className="box-text">
          {' '}
          Innovators, Dreamers, and Doers – Fueling Startup Growth Together
        </div>
      </div>
      <div className="text-xl mx-16 py-9">
        <p className="text-center m-5 ">
          At{' '}
          <span className="text-primary font-bold text-2xl ">HummingBud</span>,
          we are a team of passionate creators dedicated to empowering startups
          to soar. Each of us brings a unique set of skills, insights, and
          experiences that drive our collective mission: to turn ambitious ideas
          into thriving realities. With expertise in strategy, design,
          technology, and growth, our diverse team is committed to building
          solutions that help your startup achieve new heights.
        </p>

        <div className="flex justify-around m-8">
          <div className="w-1/2 p-20 flex items-center flex-col text-center gap-8">
            <h1 className="text-primary font-black text-4xl uppercase">
              Our Crew
            </h1>
            <p className="leading-loose">
              Together, we bring a blend of creativity, innovation, and industry
              insight that allows Hummingbud to be more than just a platform –
              we are your partners on the journey to success. With a shared
              vision and the ability to think big, we’re constantly evolving to
              ensure that every startup we work with can thrive in today’s
              fast-paced digital landscape.
            </p>
          </div>
          <div className="m-3 rounded-2xl overflow-hidden w-1/2 team-img border-[5px] hover:border-primary border-white hover:shadow-200 hover:shadow-red-300">
            <img
              src="https://img.freepik.com/free-photo/business-executives-using-digital-tablet-mobile-phone-lapto_1170-1752.jpg?t=st=1731039075~exp=1731042675~hmac=510ad357e7466f09d2bcc38e27fd48e18ee874c25b437bfdd9aa694851be3967&w=1380"
              alt="team_image"
              className="w-full h-full zoom-out-image"
            />
          </div>
        </div>
      </div>

      <div className="text-center text-xl p-10">
        We're not just a team; we're a community of changemakers who believe in
        the power of collaboration and innovation.
      </div>
    </>
  );
}
