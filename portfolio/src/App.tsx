import { FaGithubSquare } from "react-icons/fa";

function App() {
  return (
    <div className="mx-24 my-2 text-center w-inherit h-fit">
      <div className="fixed top-0 left-20 w-48 h-48 border-t-8 border-l-8 rounded-lg border-yellow-500"></div>
      <div className="grid grid-cols-1 gap-10">
        <div className="flex bg-green-300 border justify-end">
          <FaGithubSquare style={{ fontSize: "2.7em" }} />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="border">
            <h2>
              Hello I am Arnab Shanta Anu. A passionate backend developer.
            </h2>
            <img src="http:" />
          </div>
          <div className="border">div 3</div>
        </div>
      </div>
      <div className="fixed bottom-0 right-20 w-48 h-48 border-b-8 border-r-8 rounded-lg border-yellow-500"></div>
    </div>
  );
}

export default App;
