import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
//components
import { Sidebar } from "flowbite-react";
import { TextInput, TextareaInput } from "../newPatient/NewPatient";
import { CreateButton } from "../dashboard/Dashboard";

const Event = () => {
  //hooks
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = useForm();
  //states
  const [event, setEvent] = useState([]);
  const [currentEvent, setCurrentEvent] = useState({});
  const [images, setImages] = useState(currentEvent.images || []);
  //functions
  const handelSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", images);
    console.log(data);
  };

  // Update images state when a new image is selected
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      setImages([...images, selectedImage]);
    }
  };

  useEffect(() => console.log(images), [images]);
  return (
    <>
      <div className="flex ">
        <div className="w-[95%] pr-2 container mx-auto">
          <h1 className="text-xl text-center">Event</h1>

          <form onSubmit={handleSubmit(handelSubmit)}>
            <TextInput
              name={"title"}
              type={"text"}
              title={"title"}
              control={control}
              errors={errors}
              patientProfileData={currentEvent}
            />
            <TextareaInput
              title={"description"}
              name={"description"}
              control={control}
              patientProfileData={currentEvent}
              errors={errors}
            />
            <TextInput
              name={"place"}
              type={"text"}
              title={"place"}
              control={control}
              errors={errors}
              patientProfileData={currentEvent}
            />
            <div className="flex flex-col mx-3">
              <label htmlFor="" className="my-3 text-sm text-gray-500">
                certificate <span className="text-red-600">*</span>
              </label>
              <input
                type="file"
                {...register("file", {
                  required: "enter the image",
                  onChange: handleImageChange,
                })}
              />
              {errors.certificate && <p>{errors.certificate}</p>}
            </div>

            <CreateButton title={"submit"} />
          </form>
          {images.map((image, index) => (
            <div key={index}>
              <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
        <Sidebar
          aria-label="Default sidebar example"
          className="w-[15%] h-screen event-sideBar"
        >
          <Sidebar.Items className="">
            <Sidebar.ItemGroup>
              <Sidebar.Item>
                <p>amsj</p>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
};

export default Event;
