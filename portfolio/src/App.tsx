import { FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Photo from "./public/arnab-shanta-anu.jpg";

function App() {
  return (
    <div className="mx-24 my-2 text-center w-inherit h-fit">
      <div className="fixed top-0 left-20 w-48 h-48 border-t-8 border-l-8 rounded-lg border-yellow-500"></div>
      <div className="grid grid-cols-1 gap-96">
        <div className="flex justify-end gap-5">
          <a href="https://www.github.com/arnab-shanta-anu" target="blank">
            <FaGithubSquare style={{ fontSize: "2.7em" }} />
          </a>
          <a href="https://www.facebook.com/arnob.shanto.anu/" target="blank">
            <FaFacebookSquare style={{ fontSize: "2.7em" }} />
          </a>
          <a href="mailto:arnabshantaanu@gmail.com">
            <IoMail style={{ fontSize: "2.7em" }} />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex">
            <img src={Photo} className="w-48 h-48 rounded-full" />
            <div>
              <h2 className="text-3xl font-semibold">
                Hello I am Arnab Shanta Anu. A passionate backend developer.
              </h2>
              <p>
                Born & brought up in faridpur. M.Sc and B.Sc from Jahangirnagar
                University. Currently living in savar, Dhaka.
              </p>
            </div>
          </div>
          <div className="">
            <div className="top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-yellow-500 rounded-md"></div>
            <h1 className="text-3xl font-bold">Projects</h1>
            <br />
            <h2 className="text-xl font-semibold text-blue-500">
              <a href="">Mern Stack</a>
            </h2>
            <h2 className="text-xl font-semibold text-blue-500">
              <a href="">Laravel-React</a>
            </h2>
            <h2 className="text-xl font-semibold text-blue-500">
              <a href="">Python CLI</a>
            </h2>
            <h2 className="text-xl font-semibold text-blue-500">
              <a href="">Kotlin-Android</a>
            </h2>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-20 w-48 h-48 border-b-8 border-r-8 rounded-lg border-yellow-500"></div>
    </div>
  );
}

export default App;
