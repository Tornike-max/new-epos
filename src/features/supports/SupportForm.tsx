import { Button, Input, Spinner, Textarea } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToggleDarkMode } from "../../context/useToggleDarkMode";
import { schema } from "../../schema/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSendEmail } from "../../hooks/useSendEmail";

type EmailFormType = {
  email: string;
  message: string;
};

const SupportForm = () => {
  const { selected } = useToggleDarkMode();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormType>({
    resolver: zodResolver(schema),
  });

  const { sendEmail, isSending } = useSendEmail();

  const onSubmit: SubmitHandler<EmailFormType> = (data) => {
    if (!data.email || !data.message) {
      return;
    }

    sendEmail(data);
  };

  return (
    <div
      className={`w-full flex justify-center items-center ${
        selected === "dark" ? "bg-slate-900" : "bg-slate-50"
      }  mt-10 py-6 px-2 sm:px-4 lg:px-8 rounded-lg duration-150 transition-all`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl w-full flex justify-center items-center flex-col gap-2 py-2 px-2"
      >
        <h1
          className={` font-semibold text-lg sm:text-xl md:text-3xl pb-4 ${
            selected === "dark" ? "text-slate-100" : "text-slate-900"
          }`}
        >
          Please fill out the form.
        </h1>
        <Input
          type="email"
          variant={selected === "light" ? "bordered" : "flat"}
          label="Email"
          isInvalid={errors.email?.message ? true : false}
          color={errors.email?.message ? "danger" : "default"}
          errorMessage={errors.email?.message && errors.email?.message}
          {...register("email")}
          className="w-full text-slate-100"
        />
        <Textarea
          label="Message"
          variant={selected === "light" ? "bordered" : "flat"}
          placeholder="Enter your message"
          disableAutosize
          errorMessage={errors.message?.message && errors.message?.message}
          classNames={{
            base: "w-full border-slate-100",
            input: "resize-y min-h-[80px] text-slate-100",
          }}
          {...register("message")}
        />
        <Button
          type="submit"
          className="w-full"
          variant="shadow"
          color="primary"
          disabled={isSending}
        >
          {isSending ? <Spinner size="sm" color="default" /> : "Send"}
        </Button>
      </form>
    </div>
  );
};

export default SupportForm;
