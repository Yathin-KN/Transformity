import { MainNav } from "@/components/custom/main_nav";
import { Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <>
      <MainNav />
      <div className="w-full h-auto p-6 md:p-8 grid md:grid-cols-2">
        <div className="grid  w-full md:grid-cols-3">
          <div className="w-full  flex flex-col col-span-3 md:col-span-1">
          <img
            className="md:mb-0 col-span-1 object-cover w-44 h-44 rounded-full mx-auto"
            src="https://i0.wp.com/transformity.info/wp-content/uploads/2021/04/asanka-2018-scaled.jpg?w=1200&ssl=1"
            alt="Asanka Abeysinghe"
          />
           <div className="flex w-full gap-6 py-6 md:pl-4">
           <a href="/https://www.linkedin.com/in/asankaabeysinghe/">
            <Linkedin size={32} />
            </a>
            <a href="/https://twitter.com/">
            <Twitter size={32} />
            </a>
            </div>
          </div>

          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-2 my-3">Asanka Abeysinghe</h2>
            <div className="text-gray-700 mb-8">
              <p className="mb-4">
                Asanka’s goal is to connect humans and technology by helping
                organizations implement digital transformation programs that
                result in consumer-driven digital applications. In his current
                role as the Chief Technology Officer, Asanka drives efforts to
                create, refine, and enhance WSO2’s corporate reference
                architecture and is responsible for spearheading a thought
                leadership outlook that defines WSO2’s corporate reference
                methodology for development, customer success, and
                implementation.
              </p>
              <p className="mb-4">
                Working closely with customers, partners, and analysts, he
                evangelizes WSO2’s technology vision.
              </p>
              <p className="mb-4">
                Asanka has over 20 years of industry experience, which includes
                designing and implementing highly scalable distributed systems,
                SOA, and microservice architectures in the financial domain,
                mobile platforms, and various business integration solutions. He
                is also a committer of the Apache Software Foundation.
              </p>
              <p className="mb-4">
                Asanka is a regular speaker at numerous global events and many
                tech meetups in San Francisco Bay Area.
              </p>
            </div>
          </div>
        </div>
        <div className="grid w-full  md:grid-cols-3 ">
          <div className="w-full  col-span-3 md:col-span-1">
          <img
            className="md:mb-0 col-span-1 object-cover rounded-full  w-44 h-44 mx-auto"
            src="https://i0.wp.com/transformity.info/wp-content/uploads/2021/04/Gautham.jpg?w=1200&ssl=1"
            alt="Dr. Gautham Pallapa"
          />
          <div className="flex w-full gap-6 py-6 md:pl-4">
            <Link to="/">
            <Linkedin size={32} />
            </Link>
            <Link to="/">
            <Twitter size={32} />
            </Link>
              
            </div>
          </div>
          <div className="md:ml-8 col-span-2">
            <h2 className="text-2xl font-bold mb-2 my-3">Dr. Gautham Pallapa</h2>

            <div className=" text-gray-700 mb-8">
              <p className="mb-4 ">
                Dr. Gautham Pallapa is an Executive Advisor for VMware. He works
                with C-Suite and executives at Global 2000 enterprise customers
                in transforming their strategy, processes, technologies,
                culture, and people to achieve their objectives and business
                outcomes. His mantra is “Transform with Empathy” and has
                successfully led several business transformations and cloud
                modernization efforts in various industry verticals.
              </p>
              <p className="mb-4">
                Gautham has over 16 years of industry experience in various
                verticals. He is an agile coach, a Lean Six Sigma Black Belt, a
                SAFe Agilist, and an Ambassador for the DevOps Institute. He
                writes/talks/works on transformation, elevating humans, helping
                underprivileged people, and giving back to the community.
                Gautham was awarded the 2018 Tech leader of the year by AIM for
                his contributions.
              </p>
              <p className="mb-4">
                Gautham has an upcoming book called “Lead with Empathy” which
                explores these topics in detail.
              </p>
              <div className="flex w-full gap-6">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
