import "../index.css"
// import ScaleText from "react-scale-text"
import TextareaAutosize from 'react-textarea-autosize';
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";

const fileTypes = ["JPG", "PNG", "GIF"];

const getBase64 = (file:  File): Promise<string | null> => {
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
    <div className="min-h-screen bg-dark-blue-gray text-gray-100 flex flex-col justify-center items-center shadow-2xl">
      <div className="w-full max-h-fit flex gap-10 justify-center">
        <div className="flex flex-col h-full w-1/3 justify-center items-center gap-3">
          <div className="flex bg-light-gray w-full h-full rounded-2xl shadow-2xl p-5 flex-col gap-4">
            <p className="text-3xl text-dark-blue-gray font-semibold font-mono text-left opacity-70">Term</p>
            <div className="flex flex-col flex-grow items-center justify-center gap-3">
              {termFile == null ? null : <img className="max-w-full max-h-80 h-1/2 rounded-xl shadow-lg" src={termFile} alt="Term" />}
              <TextareaAutosize className="text-5xl text-dark-blue-gray font-semibold font-display font-mono w-5/6 bg-transparent border-none text-center no-scrollbar" defaultValue={""}></TextareaAutosize>
            </div>
          </div>
          <FileUploader
              name="file"
              types={fileTypes}
              handleChange={handleTermFileChange}
            />
        </div>
        <div className="flex flex-col h-full w-1/3 justify-center items-center gap-3">
          <div className="flex bg-light-gray w-full h-full rounded-2xl shadow-2xl p-5 flex-col gap-4">
            <p className="text-3xl text-dark-blue-gray font-semibold font-mono text-left opacity-70">Definition</p>
            <div className="flex flex-col flex-grow items-center justify-center gap-3">
              {defFile == null ? null : <img className="max-w-full max-h-full h-1/2 rounded-xl shadow-lg" src={defFile} alt="Definition" />}
              <TextareaAutosize className="text-xl text-dark-blue-gray font-semibold font-display font-mono w-5/6 bg-transparent border-none no-scrollbar" defaultValue={""}></TextareaAutosize>
            </div>
          </div>
          <FileUploader
              name="file"
              types={fileTypes}
              handleChange={handleDefFileChange}
            />
        </div>
      </div>
    </div>
  );
}

export default Create;
