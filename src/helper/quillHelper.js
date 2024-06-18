export const modules = {
    toolbar: {
      container: [
        [{ header: [2, 3, 4, false] }],
        ["bold", "italic", "underline", "blockquote"],
        [{ color: [] }],
        [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
        ["link",],
        [{ align: [] }],
        ["clean"],
        // ['image'],
      ],
      // handlers: {
      //   image: imageHandler,
      // },
    },
    clipboard: {
      matchVisual: true,
    },
    // resize: {
    //   parchment: Quill.import('parchment'),
    //   modules: ['Resize', 'DisplaySize']
    // }
  };
  
  export const formats = [
    "header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet",
    "indent", "link",  "color", "align", "clean"
  ];