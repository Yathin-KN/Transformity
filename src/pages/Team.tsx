import { MainNav } from "@/components/custom/main_nav";

const Team = () => {
  return (
    <>
      <MainNav />
      <div className="w-full h-auto p-8 grid md:grid-cols-2">
        <div className="grid w-full md:grid-cols-3">
          <img
            className="w-full h-full md:mb-0 col-span-1 object-cover"
            src="https://i0.wp.com/transformity.info/wp-content/uploads/2021/04/asanka-2018-scaled.jpg?w=1200&ssl=1"
            alt="Asanka Abeysinghe"
          />
          <div className="">
            <h2 className="text-2xl font-bold mb-2">Asanka Abeysinghe</h2>
            <p className="text-gray-700">
              Asanka’s goal is to connect humans and technology by helping
              organizations implement digital transformation programs that result
              in consumer-driven digital applications. ...
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <img
            className="w-40 h-40 rounded-full mb-4 md:mb-0"
            src="https://i0.wp.com/transformity.info/wp-content/uploads/2021/04/Gautham.jpg?w=1200&ssl=1"
            alt="Dr. Gautham Pallapa"
          />
          <div className="md:ml-8">
            <h2 className="text-2xl font-bold mb-2">Dr. Gautham Pallapa</h2>
            <p className="text-center text-gray-700">
              Dr. Gautham Pallapa is an Executive Advisor for VMware. He works
              with C-Suite and executives at Global 2000 enterprise customers in
              transforming their strategy, processes, technologies, culture, and
              people to achieve their objectives and business outcomes. ...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
