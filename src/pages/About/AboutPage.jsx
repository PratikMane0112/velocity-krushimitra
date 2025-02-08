import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const teamMembers = [
    {
      name: "Aditya Adaki",
      role: "AI/ML Developer",
      img: "data:image/png;base64,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",
      description: "Contributed to develope a LLM Models & its working.",
    },
    {
      name: "Rohitashva Kumawat",
      role: "AI/ML Developer",
      img: "data:image/png;base64,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",
      description: "Contributed to develope a LLM Models & its working.",
    },
    {
      name: "Pratik Mane",
      role: "DevOps Developer",
      img: "data:image/png;base64,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",
      description: "Contributed to development & deployment part.",
    },
    {
      name: "Amit Adhav",
      role: "Researcher",
      img: "data:image/png;base64,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",
      description: "Contributed to ennovate the ideas & its delivery.",
    },
]

  return (
    <>
      <section className="dark:text-white py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
		  <h2
							className="my-4 font-bold text-3xl  sm:text-4xl "
							data-aos="fade-right"
						>
							We are <span className="text-indigo-600">Team Velocity</span>
						</h2>
          <p className="text-lg max-w-xl mx-auto">
		  Our dedicated developers team is working to revolutionize agriculture & help farmers through technology.
          </p>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
                data-aos="fade-up"
              >
                <div className="bg-white text-black rounded-lg shadow-lg p-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;





// import Aos from "aos";
// import { useEffect } from "react";
// import "aos/dist/aos.css";

// const AboutPage = () => {
// 	useEffect(() => {
// 		Aos.init({
// 			duration: 1000,
// 		});
// 	}, []);

// 	const teamMembers = [
// 		{
// 			name: "John Doe",
// 			role: "Founder & CEO",
// 			img: "https://via.placeholder.com/150",
// 			description: "Leading the team with a vision for the future of agriculture tech."
// 		},
// 		{
// 			name: "Jane Smith",
// 			role: "Agricultural Expert",
// 			img: "https://via.placeholder.com/150",
// 			description: "Providing expert insights on sustainable farming solutions."
// 		},
// 		{
// 			name: "Mark Johnson",
// 			role: "Software Engineer",
// 			img: "https://via.placeholder.com/150",
// 			description: "Building robust and scalable tech solutions for farmers."
// 		},
// 		{
// 			name: "Emily Davis",
// 			role: "Marketing Lead",
// 			img: "https://via.placeholder.com/150",
// 			description: "Connecting farmers with innovative digital platforms."
// 		}
// 	];

// 	return (
// 		<>
// 			<div className="sm:flex items-center justify-center mx-auto max-w-screen-xl">
// 				<div className="sm:w-1/2 p-10">
// 					<div className="image object-center text-center">
// 						<img src="https://i.imgur.com/WbQnbas.png" data-aos="fade-right" />
// 					</div>
// 				</div>
// 				<div className="sm:w-1/2 p-5">
// 					<div className="text">
// 						<p
// 							data-aos="fade-right"
// 							className="border-b-2 border-indigo-600 uppercase text-lg font-medium"
// 						>
// 							About us
// 						</p>
// 						<h2
// 							className="my-4 font-bold text-3xl  sm:text-4xl "
// 							data-aos="fade-right"
// 						>
// 							We are <span className="text-indigo-600">Team Velocity</span>
// 						</h2>
// 						<section className="dark:text-white py-16">
// 							<div className="text-center mb-12">
// 								<h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
// 								<p className="text-lg max-w-xl mx-auto">
// 									Our dedicated professionals are working to revolutionize agriculture through technology.
// 								</p>
// 							</div>
// 							<div className="container mx-auto">
// 								<div className="flex flex-wrap justify-center gap-8">
// 									{teamMembers.map((member, index) => (
// 										<div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" data-aos="fade-up">
// 											<div className="bg-white text-black rounded-lg shadow-lg p-6 text-center">
// 												<img src={member.img} alt={member.name} className="rounded-full mb-4 mx-auto" />
// 												<h3 className="text-xl font-semibold">{member.name}</h3>
// 												<p className="text-sm text-green-600 mb-2">{member.role}</p>
// 												<p className="text-sm text-gray-500">{member.description}</p>
// 											</div>
// 										</div>
// 									))}
// 								</div>
// 							</div>
// 						</section>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default AboutPage;

