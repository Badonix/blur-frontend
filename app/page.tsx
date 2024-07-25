"use client";
import { useHandleForm } from "@/hooks/useHandleForm";

export default function Home() {
  const { register, handleSubmit, onSubmit, preview, result, loading } =
    useHandleForm();
  return (
    <main className=" py-10 px-4 flex items-center flex-col">
      <h1 className="text-3xl font-bold ">Blur</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mt-9 flex gap-5 flex-col items-center"
      >
        <div className="flex flex-col items-start">
          <label>Blur Value (1-180)</label>
          <input
            {...register("Radius", { required: true })}
            type="text"
            className="px-2 py-1 text-md border rounded-md"
            placeholder="15"
          />
        </div>
        <label
          htmlFor="image_upload"
          className="rounded-md shadow-lg bg-cyan-500 cursor-pointer text-white px-3 py-1 text-lg hover:bg-cyan-600 transition-all"
        >
          Upload Image
        </label>
        <input
          type="file"
          id="image_upload"
          className="hidden"
          {...register("Image", { required: true })}
        />

        <section className="flex gap-5 flex-wrap w-full justify-evenly ">
          <div>
            <p>Your Upload:</p>
            <img
              src={preview || "/assets/placeholder.jpg"}
              className="w-full max-h-[50vh] max-w-50vh"
            />
          </div>

          <div className={loading ? "flex items-center" : ""}>
            {loading ? (
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            ) : (
              <>
                <p>Blured:</p>
                <img
                  src={result || "/assets/placeholder.jpg"}
                  className="w-full max-h-[50vh] max-w-50vh"
                />
              </>
            )}
          </div>
        </section>
        <button
          type="submit"
          className="rounded-md shadow-lg bg-cyan-500 cursor-pointer text-white px-12 py-1 text-lg hover:bg-cyan-600 transition-all"
        >
          Blur
        </button>
      </form>
    </main>
  );
}
