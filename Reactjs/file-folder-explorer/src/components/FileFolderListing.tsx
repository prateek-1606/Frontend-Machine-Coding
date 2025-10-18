import { MdExpandMore, MdExpandLess, MdDeleteOutline } from "react-icons/md";
import { FiFolderPlus } from "react-icons/fi";
import { AiOutlineFileAdd } from "react-icons/ai";

const FileFolderList = ({
  list,
  handleDelete,
  handleToggleExpand,
  setFileAddFormState,
  handleAdd,
}) => {
  return (
    <div className="file-explorer-container">
      {list.map((individualFile: any) => (
        <div key={individualFile.id} className="single-item">
          {individualFile.type === "file" ? (
            <div className="file">
              {individualFile.name}
              <span onClick={() => handleDelete(individualFile.id)}>
                <MdDeleteOutline />
              </span>
            </div>
          ) : (
            <div className="folder">
              <span onClick={() => handleToggleExpand(individualFile.id)}>
                {individualFile.isExpanded ? (
                  <MdExpandLess />
                ) : (
                  <MdExpandMore />
                )}
              </span>
              {individualFile.name}
              <span
                style={{ paddingLeft: "5px" }}
                onClick={() =>
                  setFileAddFormState({
                    show: true,
                    type: "folder",
                    parentId: individualFile?.id,
                  })
                }
              >
                <FiFolderPlus />
              </span>
              <span
                style={{ paddingLeft: "5px" }}
                onClick={() =>
                  setFileAddFormState({
                    show: true,
                    type: "file",
                    parentId: individualFile?.id,
                  })
                }
              >
                <AiOutlineFileAdd />
              </span>
              <span onClick={() => handleDelete(individualFile.id)}>
                <MdDeleteOutline />
              </span>
              {individualFile.isExpanded && (
                <div style={{ paddingLeft: "10px" }}>
                  <FileFolderList
                    list={individualFile.child}
                    handleDelete={handleDelete}
                    handleToggleExpand={handleToggleExpand}
                    setFileAddFormState={setFileAddFormState}
                    handleAdd={handleAdd}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FileFolderList;
