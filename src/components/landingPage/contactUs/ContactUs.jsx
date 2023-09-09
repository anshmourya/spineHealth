import React from "react";
import SectionHeader from "../sectionHeader/SectionHeader";
import PrimaryInput from "../inputs/primaryInput/PrimaryInput";
import shape1 from "../../../assets/images/shape1.svg";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import PrimaryTextarea from "../inputs/primaryTeaxtarea/PrimaryTextarea";
import SecondaryButton from "../buttons/secondaryButton/SecondaryButton";
import { alert, success } from "../../../helper/notification";

const ContactUs = () => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Invalid phone number")
      .required("Phone Number is required"),
    // Add more fields as needed
    subject: Yup.string().required("Subject is required"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const { name, email, phoneNumber, subject, message } = data;
    const emailConfig = {
      SecureToken: "99f16389-92f6-495a-a798-ee9295a9167b",
      To: "spinehealthphysio@gmail.com",
      From: "spinehealthphysio@gmail.com",
      Subject: "Appointment request from client",
      Body: `
      <table style="width:100%">
  <tr>
    <th>Name:</th>
    <td>${name}</td>
  </tr>
  <tr>
    <th>phoneNumber:</th>
 <td>${phoneNumber}</td>
  </tr>
  <tr>
    <th>email:</th>
 <td>${email}</td>
  </tr>
   <tr>
    <th>subject:</th>
 <td>${subject}</td>
  </tr>
    <tr>
    <th>message:</th>
 <td>${message}</td>
  </tr>
</table>`,
    };
    try {
      if (window.Email) {
        const response = await window.Email.send(emailConfig);
        console.log(response);
        response && success("Appointment request sent, expect our call soon.");
      }
    } catch (error) {
      console.log(error);
      alert("Error sending appointment request");
    }
  };
  const Form = [
    { label: "full name", name: "name" },
    { label: "email address", name: "email" },
    { label: "subject", name: "subject" },
    { label: "phone number", name: "phoneNumber" },
  ];
  return (
    <section className="container relative m-auto" id="contactUs">
      <SectionHeader title={"book an appointment"} />
      <div className="shape-1">
        <img src={shape1} alt="" />
      </div>
      <div className="absolute top-0 left-0 -z-10">
        <img src={shape1} alt="" />
      </div>
      <form
        className="max-w-[1100px] mx-auto my-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-2 gap-11 ">
          {Form.map((input, index) => (
            <Controller
              key={index}
              name={input.name}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <PrimaryInput label={input.label} {...field} />
                  <p className="text-red-500">{errors[input.name]?.message}</p>
                </div>
              )}
            />
          ))}
        </div>
        <Controller
          name="message"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <PrimaryTextarea label={"message"} {...field} />
            </div>
          )}
        />

        <SecondaryButton label={"appointment"} type="submit" />
      </form>
    </section>
  );
};

export default ContactUs;
