import "../index.css"
import TextareaAutosize from 'react-textarea-autosize';
import Combobox from "react-widgets/Combobox";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"
import { AiFillSetting, AiOutlineAlignLeft, AiOutlineAlignRight, AiOutlineAlignCenter } from 'react-icons/ai'
import { BsFillImageFill } from 'react-icons/bs'
import 'react-dropdown/style.css';
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
  const [termFile, setTermFile] = useState<string | null>(null);
  const [termDecorationBold, setTermDecorationBold] = useState(false)
  const [termDecorationItalic, setTermDecorationItalic] = useState(false)
  const [termDecorationUnderline, setTermDecorationUnderline] = useState(false)
  const [termDecorationStriked, setTermDecorationStriked] = useState(false)
  const [termDecorationOverline, setTermDecorationOverline] = useState(false)
  const [termDecorationSize, setTermDecorationSize] = useState(30)
  const [termAlign, setTermAlign] = useState("center")

  const [defText, setDefText] = useState("");
  const [defFile, setDefFile] = useState<string | null>(null);
  const [defDecorationBold, setDefDecorationBold] = useState(false)
  const [defDecorationItalic, setDefDecorationItalic] = useState(false)
  const [defDecorationUnderline, setDefDecorationUnderline] = useState(false)
  const [defDecorationStriked, setDefDecorationStriked] = useState(false)
  const [defDecorationOverline, setDefDecorationOverline] = useState(false)
  const [defDecorationSize, setDefDecorationSize] = useState(30)
  const [defAlign, setDefAlign] = useState("")

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

  const nextPage = () => {

  }


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
              <TextareaAutosize
                className={" text-dark-blue-gray font-semibold  font-mono w-5/6 bg-transparent border-none no-scrollbar " +
                  "text-" + termAlign + " " +
                  (termDecorationBold ? " font-extrabold " : " ") +
                  (termDecorationItalic ? " italic " : " ") +
                  (termDecorationUnderline ? " underline " : " ") +
                  (termDecorationStriked ? " line-through " : " ") +
                  (termDecorationOverline ? " overline " : " ") +
                  (termDecorationSize == 30 ? " text-3xl " : " text-[" + termDecorationSize + "px] ")}
                defaultValue={""}
                onChange={
                  (e) => setTermText(e.target.value)
                }>
              </TextareaAutosize>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="bg-light-gray rounded-lg p-4 w-full bg-opacity-60 flex justify-between items-center gap-3 shadow-xl">
              <div className="w-full">
                <FileUploader
                  name="file"
                  label="Images "
                  types={fileTypes}
                  handleChange={handleTermFileChange}
                  children={
                    <div className="w-full bg-light-gray rounded-lg flex flex-grow items-center p-3 gap-3 shadow-md">
                      <BsFillImageFill className="w-10 h-10 fill-dark-blue-gray" />
                      <p className="font-medium font-mono text-dark-blue-gray">Drop Image here</p>
                    </div>
                  }
                />
              </div>
              <div className="bg-light-gray p-3 rounded-lg shadow-md">
                <AiFillSetting className="fill-dark-blue-gray w-10 h-10 " />

              </div>
            </div>
          </div>
          <div className="bg-light-gray rounded-lg p-4 w-full bg-opacity-60 flex justify-between items-center gap-1 shadow-xl">
            <button
              className={(termAlign == "left" ? "bg-dark-blue-gray" : "bg-light-gray") + " p-2 flex flex-grow items-center justify-center rounded-lg shadow-md text-xs width font-mono font-black text-dark-blue-gray"}
              onClick={() => { termAlign == "left" ? setTermAlign("center") : setTermAlign("left") }}><AiOutlineAlignRight className={termAlign == "left" ? "fill-light-gray" : "fill-dark-blue-gray"} /></button>
            <button
              className={(termAlign == "center" ? "bg-dark-blue-gray" : "bg-light-gray") + " p-2 flex flex-grow items-center justify-center rounded-lg shadow-md text-xs width font-mono font-black text-dark-blue-gray"}
              onClick={() => { termAlign == "center" ? setTermAlign("left") : setTermAlign("center") }}><AiOutlineAlignCenter className={termAlign == "center" ? "fill-light-gray" : "fill-dark-blue-gray"} /></button>
            <button
              className={(termAlign == "right" ? "bg-dark-blue-gray" : "bg-light-gray") + " p-2 flex flex-grow items-center justify-center rounded-lg shadow-md text-xs width font-mono font-black text-dark-blue-gray"}
              onClick={() => { termAlign == "right" ? setTermAlign("center") : setTermAlign("right") }}><AiOutlineAlignRight className={termAlign == "right" ? "fill-light-gray" : "fill-dark-blue-gray"} /></button>
            <button
              className= {(termDecorationBold ? "bg-dark-blue-gray text-light-gray" : "bg-light-gray text-dark-blue-gray") + " p-2 flex-grow text-center rounded-lg shadow-md text-xs width font-mono font-black text-dark-blue-gray"}
              onClick={() => { setTermDecorationBold(!termDecorationBold) }}>B</button>
            <button
              className={(termDecorationItalic ? "bg-dark-blue-gray text-light-gray" : "bg-light-gray text-dark-blue-gray") + " p-2 flex-grow text-center rounded-lg shadow-md text-xs width font-mono font-extrabold text-dark-blue-gray italic"}
              onClick={() => { setTermDecorationItalic(!termDecorationItalic) }}>I</button>
            <button
              className={(termDecorationUnderline ? "bg-dark-blue-gray text-light-gray" : "bg-light-gray text-dark-blue-gray") + " p-2 flex-grow text-center rounded-lg shadow-md text-xs width font-mono font-extrabold text-dark-blue-gray underline"}
              onClick={() => { setTermDecorationUnderline(!termDecorationUnderline);
                               (termDecorationOverline ? setTermDecorationOverline(false) : null);
                               (termDecorationStriked ? setTermDecorationStriked(false) : null);  }}>U</button>
            <button
              className={(termDecorationStriked ? "bg-dark-blue-gray text-light-gray" : "bg-light-gray text-dark-blue-gray") + " p-2 flex-grow text-center rounded-lg shadow-md text-xs width font-mono font-extrabold text-dark-blue-gray line-through"}
              onClick={() => { setTermDecorationStriked(!termDecorationStriked);
                               (termDecorationUnderline ? setTermDecorationUnderline(false) : null);
                               (termDecorationOverline ? setTermDecorationOverline(false) : null);  }}>S</button>
            <button
              className={(termDecorationOverline ? "bg-dark-blue-gray text-light-gray" : "bg-light-gray text-dark-blue-gray") + " p-2 flex-grow text-center rounded-lg shadow-md text-xs width font-mono font-extrabold text-dark-blue-gray overline"}
              onClick={() => { setTermDecorationOverline(!termDecorationOverline);
                (termDecorationUnderline ? setTermDecorationUnderline(false) : null);
                (termDecorationStriked ? setTermDecorationStriked(false) : null);  }}>O</button>
            <button
              className="bg-light-gray p-2 flex-grow text-center rounded-lg shadow-md text-xs width font-mono font-extrabold text-dark-blue-gray"
              onClick={() => { setTermDecorationSize(termDecorationSize + 1) }}>A+</button>
            <button
              className="bg-light-gray p-2 flex-grow text-center rounded-lg shadow-md text-xs width font-mono font-extrabold text-dark-blue-gray"
              onClick={() => { setTermDecorationSize(termDecorationSize - 1) }}>A-</button>
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
              {defFile == null ? null : <img className="max-w-full max-h-80 h-1/2 rounded-xl shadow-lg" src={defFile} alt="Definition" />}
              <TextareaAutosize className="text-3xl text-dark-blue-gray font-semibold font-mono w-5/6 bg-transparent border-none no-scrollbar" defaultValue={""}></TextareaAutosize>
            </div>
          </div>
          <div className="bg-light-gray rounded-lg p-4 w-full bg-opacity-60 flex justify-between items-center gap-3 shadow-xl">
            <div className="w-full">
              <FileUploader
                name="file"
                label="Images "
                types={fileTypes}
                handleChange={handleDefFileChange}
                children={
                  <div className="w-full bg-light-gray rounded-lg flex flex-grow items-center p-3 gap-3 shadow-md">
                    <BsFillImageFill className="w-10 h-10 fill-dark-blue-gray" />
                    <p className="font-medium font-mono text-dark-blue-gray">Drop Image here</p>
                  </div>
                }
              />
            </div>
            <div className="bg-light-gray p-3 rounded-lg shadow-md">
              <AiFillSetting className="fill-dark-blue-gray w-10 h-10" />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bg-cream-orange right-0 bottom-0 font-bold p-3 rounded-full m-10 text-xl border-black border-solid shadow-xl bg-light-gray
                      hover:bg-opacity-80 transition-all"
        onClick={nextPage}>
        <MdNavigateNext className="fill-dark-blue-gray w-10 h-10" />
      </div>

      <div className="fixed bg-cream-orange right-20 bottom-0 font-bold p-3 rounded-full m-10 text-xl border-black border-solid shadow-xl bg-light-gray
                     hover:bg-opacity-80 transition-all"
        onClick={nextPage}>
        <MdNavigateBefore className="fill-dark-blue-gray w-10 h-10" />
      </div>



    </div>
  );
}

export default Create;
