export interface detailsProps {
  about: string;
  responsibilites: string[];
  requirements: string[];
}
export const Details = ({
  about,
  responsibilites,
  requirements,
}: detailsProps) => {
  return (
    <>
      <section className="py-15 flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8">
        <div className="lg:w-6/10 space-y-4">
          <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
            Job Details
          </h2>
          <div className="border rounded-2xl p-6 space-y-2">
            <h3 className="font-medium leading-6">About the Roles</h3>
            <p className="text-sm text-[#737373] leading-5">{about}</p>
          </div>
          <div className="border rounded-2xl p-6 space-y-2">
            <h3 className="font-medium leading-6">Responsibilities</h3>
            <ul className="space-y-2 list-disc marker:text-[#E50914] marker: pl-4">
              {responsibilites &&
                responsibilites.map((item, index) => (
                  <li className="text-sm text-[#737373]" key={index}>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          </div>
          <div className="border rounded-2xl p-6 space-y-2">
            <h3 className="font-medium leading-6">Requirements Skill</h3>
            <ul className=" flex flex-wrap gap-3">
              {requirements &&
                requirements.map((item, index) => (
                  <li
                    className="text-sm text-[#737373] border px-3 py-1 rounded-lg "
                    key={index}
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-4/10 ">
          <form className="space-y-3 shadow-[0_4px_10px_5px_rgba(0,0,0,0.06)] p-6  rounded-xl md:rounded-3xl">
            <h2 className="font-semibold text-2xl md:text-xl leading-8 md:leading-10 ">
              Apply Now
            </h2>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="name" className="font-normal ">
                Full Name
              </label>
              <input
                type="text"
                name=""
                id="name"
                placeholder="John Doe"
                className="border focus:outline-0 p-2 rounded-lg text-sm"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="email" className="font-normal ">
                Email
              </label>
              <input
                type="text"
                name=""
                id="email"
                placeholder="john@example.com"
                className="border focus:outline-0 p-2 rounded-lg text-sm"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="link" className="font-normal ">
                Portfolio/ LinkedIn/ Github
              </label>
              <input
                type="text"
                name=""
                id="link"
                placeholder="https://..."
                className="border focus:outline-0 p-2 rounded-lg text-sm"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="resume" className="font-normal">
                Resume/CV
              </label>
              <input
                type="file"
                name="resume"
                id="resume"
                accept=".pdf,.doc,.docx"
                placeholder="Upload File (PDF, DOC)"
                className="border focus:outline-0 p-2 rounded-lg text-sm"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="message" className="font-normal ">
                Cover Note (Optional)
              </label>
              <textarea
                name="message"
                id=""
                className="border focus:outline-0 p-2 rounded-lg h-24 text-sm"
                placeholder="Tell us why you are a great fit...."
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit Application"
              className="bg-[#E50914] font-semibold w-full text-white py-2 md:py-3 rounded-lg md:rounded-2xl hover:cursor-pointer"
            />
          </form>
        </div>
      </section>
    </>
  );
};
