import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export interface detailsProps {
  title: string;
  about: string;
  responsibilites: string[];
  requirements: string[];
}

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name too long"),
  email: z.string().email("Invalid email address"),
  portfolio: z
    .string()
    .url("Invalid URL")
    .transform((val) => val.trim())
    .refine((val) => val.startsWith("http"), {
      message: "URL must start with http:// or https://",
    }),
  cv: z
  .instanceof(FileList)
  .refine((fileList) => fileList.length > 0, {
    message: "File is required",
  }),
  coverNote: z.string(),
});

export type FormInputType = z.infer<typeof formSchema>;
export const Details = ({
  about,
  responsibilites,
  requirements,
  title,
}: detailsProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  });

  const onSubmit = async (payloadData: FormInputType) => {
    const formData = new FormData();
    formData.append("position", title);
    formData.append("fullName", payloadData.fullName);
    formData.append("email", payloadData.email);
    formData.append("portfolio", payloadData.portfolio);
    formData.append("cv", payloadData.cv[0]);
    formData.append("coverNote", payloadData.coverNote);

    try {
      const response = await fetch("/api/handle-career", {
        method: "POST",
        body: formData,
      });
      
      if (response.ok) {
        toast.success("Application Submitted!");
        reset();
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Error submitting application, Try Again!");
    }
  };
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
            className="space-y-3 shadow-[0_4px_10px_5px_rgba(0,0,0,0.06)] p-6  rounded-xl md:rounded-3xl"
          >
            <h2 className="font-semibold text-2xl md:text-xl leading-8 md:leading-10 ">
              Apply Now
            </h2>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="name" className="font-normal ">
                Full Name
              </label>
              <input
                {...register("fullName")}
                type="text"
                id="name"
                placeholder="John Doe"
                className="border focus:outline-0 p-2 rounded-lg text-sm"
                onKeyDown={(e) => {
                  const key = e.key;
                  const isLetter = /^[A-Za-z]$/.test(key);
                  const allowedKeys = [
                    "Backspace",
                    "Delete",
                    "ArrowLeft",
                    "ArrowRight",
                    "Tab",
                    " ",
                  ];
                  if (isLetter || allowedKeys.includes(key)) return;
                  e.preventDefault();
                }}
              />
              {errors.fullName && (
                <span className="text-red-500 text-xs">
                  {errors.fullName.message}
                </span>
              )}
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="email" className="font-normal ">
                Email
              </label>
              <input
                {...register("email")}
                type="text"
                id="email"
                placeholder="john@example.com"
                className="border focus:outline-0 p-2 rounded-lg text-sm"
                onKeyDown={(e) => {
                  const key = e.key;

                  if (e.currentTarget.value.length === 0) {
                    if (/^[A-Z]$/.test(key)) {
                      e.preventDefault();
                      return;
                    }
                  }
                }}
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="link" className="font-normal ">
                Portfolio/ LinkedIn/ Github
              </label>
              <input
                {...register("portfolio")}
                type="text"
                id="link"
                placeholder="https://..."
                className="border focus:outline-0 p-2 rounded-lg text-sm"
                onKeyDown={(e) => {
                  if (e.key === " ") {
                    e.preventDefault();
                    return;
                  }
                  if (!/^[a-zA-Z0-9:/.?&=_\-]$/.test(e.key)) {
                    const allowedKeys = [
                      "Backspace",
                      "Delete",
                      "ArrowLeft",
                      "ArrowRight",
                      "Tab",
                    ];
                    if (!allowedKeys.includes(e.key)) {
                      e.preventDefault();
                    }
                  }
                }}
              />
              {errors.portfolio && (
                <span className="text-red-500 text-xs">
                  {errors.portfolio.message}
                </span>
              )}
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="resume" className="font-normal">
                Resume/CV
              </label>
              <input
                {...register("cv")}
                type="file"
                accept=".pdf,.doc,.docx"
                placeholder="Upload File (PDF, DOC)"
                className="border focus:outline-0 p-2 rounded-lg text-sm"
              />
              {errors.cv && (
                <span className="text-red-500 text-xs">
                  {errors.cv.message?.toString()}
                </span>
              )}
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="message" className="font-normal ">
                Cover Note (Optional)
              </label>
              <textarea
                {...register("coverNote")}
                className="border focus:outline-0 p-2 rounded-lg h-24 text-sm"
                placeholder="Tell us why you are a great fit...."
              ></textarea>
            </div>
            <input
              value={isSubmitting ? "Sending..." : "Submit Application"}
              disabled={isSubmitting}
              type="submit"
              className={cn("bg-[#E50914] font-semibold w-full text-white py-2 md:py-3 rounded-lg md:rounded-2xl hover:cursor-pointer", {
                "bg-red-400": isSubmitting
              })}
            />
          </form>
        </div>
      </section>
    </>
  );
};
