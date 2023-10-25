import Footer from "@/components/custom/footer";
import { MainNav } from "@/components/custom/main_nav";
import { Button } from "@/components/ui/button";
import { useInView } from "@react-spring/web";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const OpacityParagraphs = ({
  numParagraphs,
  name,
}: {
  numParagraphs: number;
  name: string;
}) => {
  const [ref, inView] = useInView({
 
  });

  const paragraphs = [];

  for (let i = 0; i < numParagraphs; i++) {
    const opacity = 1 - i * 0.2; 
    const scale = 1.05; 

    paragraphs.push(
      <motion.div
        ref={ref}
        key={i}
        initial={{ opacity: 0, scale }} 
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : scale }} 
        transition={{ duration: 0.5, delay: i * 0.2, ease: "easeInOut" }}
      >
        <p
          className="tracking-[0.5rem] md:tracking-[1rem] font-semibold uppercase text-sm md:text-3xl bg-red-500 px-2 py-1 text-center rounded-sm"
          style={{ opacity }}
        >
          {name}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="absolute z-10 text-5xl flex flex-col gap-6 w-full">
      {paragraphs}
    </div>
  );
};


const Team = () => {
  return (
    <>
      <MainNav style={{backgroundColor:'black'}}/>
      <div className="w-full flex justify-center bg-black text-white py-10 ">
        <motion.p
          className="text-xl md:text-[9rem] flex justify-center relative items-center w-full h-auto py-6 uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="opacity-20 md:opacity-10  tracking-tighter md:tracking-[1.3rem] text-center py-3 mx-4 normal-case font-island text-[10rem] md:text-[17rem]">Transformity</p>
          <motion.p
            className="text-3xl md:text-7xl absolute uppercase tracking-[0.5rem]  md:tracking-[1.5rem] font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 , spacing:2 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Leading team
          </motion.p>
        </motion.p>
      </div>

      <div className="w-full h-auto px-6 md:px-8 grid md:grid-rows-2 text-white bg-black">
        <div className="flex flex-col">
        <div className="w-full  flex flex-col col-span-3 md:col-span-1 justify-center p-6">
      <motion.div
        className="relative flex justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          className="md:mb-0 col-span-1 object-cover mx-auto w-[80%] md:w-[30%] aspect-square relative z-20 py-1"
          src="https://i0.wp.com/transformity.info/wp-content/uploads/2021/04/asanka-2018-scaled.jpg?w=1200&ssl=1"
          alt="Asanka Abeysinghe"
        />
        <OpacityParagraphs numParagraphs={5} name={"Asanka Abeysinghe"} />
      </motion.div>
           
          </div>
          <div className="col-span-2 py-3">
            <h2 className="text-3xl font-bold mb-2 my-3 text-center underline underline-offset-4 decoration-wavy decoration-slate-700 decoration-slice">
              Asanka Abeysinghe
            </h2>
            <div className="text-gray-400 mb-8">
              <p className="mb-4 ">
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
            <div className="w-full flex justify-around">
              <Button variant="outline_custom_team" className="flex gap-3">
                <Linkedin size={18} />
                Linkedln
              </Button>
              <Button variant="outline_custom_team" className="flex gap-3">
                <FaXTwitter />
                Twitter
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-full  flex flex-col col-span-3 md:col-span-1 justify-center p-6">
            <div className="relative flex justify-center items-center">
              <img
                className="md:mb-0 col-span-1 object-cover mx-auto w-[80%] md:w-[30%] aspect-square relative z-20 py-1"
                src="https://i0.wp.com/transformity.info/wp-content/uploads/2021/04/Gautham.jpg?w=1200&ssl=1"
                alt="Dr. Gautham Pallapa"
              />
              <OpacityParagraphs numParagraphs={5} name={"Gautham___Pallapa"} />
            </div>
          </div>
          <div className="col-span-2 py-3">
            <h2 className="text-3xl font-bold mb-2 my-3 text-center underline underline-offset-4 decoration-wavy decoration-slate-700 decoration-slice">
              Dr. Gautham Pallapa
            </h2>
            <div className="text-gray-400 mb-8">
              <p className="mb-4 py-3">
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
              <div className="w-full flex justify-around">
                <Button variant="outline_custom_team" className="flex gap-3">
                  <Linkedin size={18} />
                  Linkedln
                </Button>
                <Button variant="outline_custom_team" className="flex gap-3">
                  <FaXTwitter />
                  Twitter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Team;
