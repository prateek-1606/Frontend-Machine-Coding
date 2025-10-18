import "./App.css";
import FileFolderExplorer from "./components/FileFolderExplorer";

const initialState = [
  {
    id: 1,
    type: "file",
    name: "TestFile1",
  },
  {
    id: 2,
    type: "folder",
    name: "TestFolder1",
    isExpanded: false,
    child: [
      {
        id: 12,
        type: "file",
        name: "TestFile12",
      },
      {
        id: 13,
        type: "folder",
        name: "TestFolder13",
        isExpander: false,
        child: [],
      },
    ],
  },
];

function App() {
  return (
    <>
      <FileFolderExplorer filesFolderInitialList={initialState} />
    </>
  );
}

export default App;
