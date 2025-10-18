import { useState } from "react";
import FileFolderList from "./FileFolderListing";

const FileFolderExplorer = ({ filesFolderInitialList }) => {
  const [fileAddFormState, setFileAddFormState] = useState({
    show: false,
    type: "",
    parentId: undefined,
  });

  const [data, setData] = useState(filesFolderInitialList || []);

  const deleteRecursively = (files: any[], fileId: Number) => {
    return files
      .filter((file) => file.id !== fileId)
      .map((file) => {
        if (file.type === "folder" && file.child) {
          return {
            ...file,
            child: deleteRecursively(file.child, fileId),
          };
        }
        return file;
      });
  };

  const handleDelete = (fileId: Number) => {
    const newData = deleteRecursively(data, fileId);
    setData(newData);
  };

  const toogleExpandRecursively = (files: any[], fileId: Number) => {
    return files.map((file) => {
      if (file.id === fileId) {
        return {
          ...file,
          isExpanded: !file.isExpanded,
        };
      }
      if (file.type === "folder" && file.child) {
        return {
          ...file,
          child: toogleExpandRecursively(file.child, fileId),
        };
      }
      return file;
    });
  };

  const handleToggleExpand = (fileId: Number) => {
    setData(toogleExpandRecursively(data, fileId));
  };

  const createFolderRecursively = (
    files: any[],
    parentId: Number,
    newFolder: any
  ) => {
    return files.map((file) => {
      if (file.id === parentId) {
        return {
          ...file,
          child: [...file.child, newFolder],
        };
      }
      if (file.type === "folder" && file.child) {
        return {
          ...file,
          child: createFolderRecursively(file.child, parentId, newFolder),
        };
      }
      return file;
    });
  };

  const createFolder = (values: any) => {
    const newFolder = {
      id: Date.now(),
      name: values.name,
      isExpanded: false,
      child: [],
    };
    if (fileAddFormState.parentId) {
      setData(
        createFolderRecursively(data, fileAddFormState.parentId, newFolder)
      );
    } else {
      setData([...data, newFolder]);
    }
  };

  const createFileRecursively = (
    files: any[],
    parentId: Number,
    newFile: any
  ) => {
    return files.map((file) => {
      if (file.id === parentId) {
        return {
          ...file,
          child: [...file.child, newFile],
        };
      }
      if (file.type === "folder" && file.child) {
        return {
          ...file,
          child: createFileRecursively(file.child, parentId, newFile),
        };
      }
      return file;
    });
  };

  const createFile = (values: any) => {
    const newFile = {
      id: Date.now(),
      type: "file",
      name: values.name,
    };

    if (fileAddFormState.parentId) {
      setData(createFileRecursively(data, fileAddFormState.parentId, newFile));
    } else {
      setData([...data, newFile]);
    }
  };

  const handleAdd = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (fileAddFormState.type === "file") {
      createFile(data);
    } else {
      createFolder(data);
    }

    setFileAddFormState({
      show: false,
      type: "",
      parentId: undefined,
    });
  };

  return (
    <>
      <FileFolderList
        list={data}
        handleDelete={handleDelete}
        handleToggleExpand={handleToggleExpand}
        setFileAddFormState={setFileAddFormState}
        handleAdd={handleAdd}
      />
      {fileAddFormState.show && (
        <div className="add-form">
          <span>
            Add {fileAddFormState.type === "file" ? "File" : "Folder"}
          </span>
          <form onSubmit={handleAdd}>
            <input name="name" type="text" />
            <button type="submit">Add</button>
          </form>
        </div>
      )}
    </>
  );
};

export default FileFolderExplorer;
