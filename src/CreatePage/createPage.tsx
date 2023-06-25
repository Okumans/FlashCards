import "../index.css"
import TextareaAutosize from 'react-textarea-autosize';
import Combobox from "react-widgets/Combobox";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import languages from "../utility/language";

const fileTypes = ["JPG", "PNG", "GIF"];

const getBase64 = (file: File): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = (err) => {
      console.log(err);
      reject(err);
    };
  });
};

const Create = () => {
  const [termText, setTermText] = useState("");
  const [defText, setDefText] = useState("");
  const [termFile, setTermFile] = useState<string | null>(null);
  const [defFile, setDefFile] = useState<string | null>(null);

  const handleTermFileChange = async (file: File) => {
    if (file != null) {
      const base64Data = await getBase64(file);
      setTermFile(base64Data);
    } else {
      setTermFile(null);
    }
  };

  const handleDefFileChange = async (file: File) => {
    if (file != null) {
      const base64Data = await getBase64(file);
      setDefFile(base64Data);
    } else {
      setDefFile(null);
    }
  };

  return (
    <div className="min-h-screen bg-dark-blue-gray text-gray-100 flex flex-col justify-center items-center shadow-2xl p-20">
      <div className="w-full max-h-fit flex flex-col md:flex-row gap-10 justify-center items-center">
        <div className="flex flex-col h-full w-1/2 justify-center items-center gap-5 min-w-fit">
          <div className="flex bg-light-gray w-full h-full rounded-2xl shadow-2xl p-5 pb-7 flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-3 align-middle">
              <p className="text-2xl text-dark-blue-gray font-semibold font-mono text-left opacity-70">Term</p>
              <Combobox
                className="text-dark-blue-gray font-medium font-mono shadow-md"
                defaultValue="English (United States)"
                data={languages}
              ></Combobox>
            </div>
            <div className="flex flex-col flex-grow items-center justify-center gap-3">
              {termFile == null ? null : <img className="max-w-full max-h-80 h-1/2 rounded-xl shadow-lg" src={termFile} alt="Term" />}
              <TextareaAutosize className="text-3xl text-dark-blue-gray font-semibold  font-mono w-5/6 bg-transparent border-none text-center no-scrollbar" defaultValue={""}></TextareaAutosize>
            </div>
          </div>
          <div className="bg-light-gray rounded-lg p-4 w-full">
            <FileUploader
              name="file"
              types={fileTypes}
              handleChange={handleTermFileChange}
            />
          </div>
        </div>
        <div className="flex flex-col h-full w-1/2 justify-center items-center gap-5 min-w-fit">
          <div className="flex bg-light-gray w-full h-full rounded-2xl shadow-2xl p-5 pb-7 flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-3 align-middle">
              <p className="text-2xl text-dark-blue-gray font-semibold font-mono text-left opacity-70">Definition</p>
              <Combobox
                className="text-dark-blue-gray font-medium font-mono shadow-md "
                defaultValue="English (United States)"
                data={languages}
              ></Combobox>
            </div>
            <div className="flex flex-col flex-grow items-center justify-center gap-3">
              {defFile == null ? null : <img className="max-w-full max-h-full h-1/2 rounded-xl shadow-lg" src={defFile} alt="Definition" />}
              <TextareaAutosize className="text-3xl text-dark-blue-gray font-semibold font-mono w-5/6 bg-transparent border-none no-scrollbar" defaultValue={""}></TextareaAutosize>
            </div>
          </div>
          <div className="bg-light-gray rounded-lg p-4 w-full">
            <FileUploader
              name="file"
              types={fileTypes}
              handleChange={handleDefFileChange}
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
