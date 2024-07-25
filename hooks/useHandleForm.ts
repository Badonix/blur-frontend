import { blur } from "@/services";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
type Inputs = {
  Radius: number;
  Image: File[];
};
export const useHandleForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const [preview, setPreview] = useState<string | null>();
  const [result, setResult] = useState<string | null>();
  const [loading, setLoading] = useState(false);
  const { Image } = useWatch({ control });
  useEffect(() => {
    if (Image) {
      Image[0] ? setPreview(URL.createObjectURL(Image[0])) : setPreview(null);
    }
  }, [Image]);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    let postData = { image: data.Image[0], radius: data.Radius };
    try {
      setLoading(true);
      let resp = await blur(postData);
      let domain =
        process.env.NEXT_PUBLIC_API_URL + "/" + resp.data.split("./")[1];
      setResult(domain);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return {
    register,
    errors,
    handleSubmit,
    result,
    onSubmit,
    preview,
    setPreview,
    loading,
  };
};
